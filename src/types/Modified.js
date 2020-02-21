// eslint-disable-next-line lodash-fp/use-fp
import _ from 'lodash';
import stringify from '../stringify';

export default class Modified {
  constructor(name, before, after) {
    this.name = name;
    this.before = before[name];
    this.after = after[name];
  }

  toString(depth) {
    return `${'    '.repeat(depth)}  + ${this.name}: ${stringify(this.after, depth + 1)}\n${'    '.repeat(depth)}  - ${this.name}: ${stringify(this.before, depth + 1)}`;
  }

  toPlainString(parents) {
    const before = _.isObject(this.before) ? '[complex value]' : this.before;
    const after = _.isObject(this.after) ? '[complex value]' : this.after;
    return `Property '${[...parents, this.name].join('.')}' was updated. From ${before} to ${after}`;
  }
}
