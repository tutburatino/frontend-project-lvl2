// eslint-disable-next-line lodash-fp/use-fp
import _ from 'lodash';
import stringify from '../stringify';
// eslint-disable-next-line import/no-cycle
import {
  genDifference, renderTree, renderPlain, getTree,
} from '..';

export default class Intact {
  constructor(name, beforeObj, afterObj) {
    this.name = name;
    this.type = 'Intact';
    if (_.isEqual(beforeObj[name], afterObj[name])) {
      this.value = beforeObj[name];
    } else {
      this.children = genDifference(beforeObj[name], afterObj[name]);
    }
  }

  toString(depth) {
    if (this.children === undefined) {
      return `${'    '.repeat(depth)}    ${this.name}: ${stringify(this.value, depth + 1)}`;
    }
    return `${'    '.repeat(depth)}    ${this.name}: ${renderTree(this.children, depth + 1)}`;
  }

  toPlainString(parents) {
    if (this.children === undefined) {
      return 'Intact';
    }
    return `${renderPlain(this.children, [...parents, this.name])}`;
  }

  genTree() {
    if (this.children === undefined) {
      return {
        name: this.name,
        type: 'Intact',
        value: this.value,
      };
    }
    return {
      name: this.name,
      type: 'Intact',
      children: getTree(this.children),
    };
  }
}
