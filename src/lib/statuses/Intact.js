// eslint-disable-next-line lodash-fp/use-fp
import _ from 'lodash';
import stringify from '../../stringify';
// eslint-disable-next-line import/no-cycle
import { genDifference, render } from '../..';

export default class Intact {
  constructor(name, beforeObj, afterObj) {
    this.name = name;
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
    return `${'    '.repeat(depth)}    ${this.name}: ${render(this.children, depth + 1)}`;
  }
}
