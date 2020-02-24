// eslint-disable-next-line lodash-fp/use-fp
import _ from 'lodash';
import stringify from '../stringify';

export default class Modified {
  constructor(name, before, newValue) {
    this.name = name;
    this.type = 'Modified';
    this.oldValue = before[name];
    this.newValue = newValue[name];
  }

  toString(depth) {
    return `${'    '.repeat(depth)}  + ${this.name}: ${stringify(this.newValue, depth + 1)}\n${'    '.repeat(depth)}  - ${this.name}: ${stringify(this.oldValue, depth + 1)}`;
  }

  toPlainString(parents) {
    const oldValue = _.isObject(this.oldValue) ? '[complex value]' : this.oldValue;
    const newValue = _.isObject(this.newValue) ? '[complex value]' : this.newValue;
    return `Property '${[...parents, this.name].join('.')}' was updated. From ${oldValue} to ${newValue}`;
  }
}
