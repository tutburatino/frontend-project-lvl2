// eslint-disable-next-line lodash-fp/use-fp
import _ from 'lodash';
import stringify from '../stringify';


export default class Added {
  constructor(name, obj) {
    this.name = name;
    this.type = 'Added';
    this.value = obj[name];
  }

  toString(depth) {
    return `${'    '.repeat(depth)}  + ${this.name}: ${stringify(this.value, depth + 1)}`;
  }

  toPlainString(parents) {
    const value = _.isObject(this.value) ? '[complex value]' : this.value;
    return `Property '${[...parents, this.name].join('.')}' was added with value: ${value}`;
  }
}
