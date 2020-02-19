import stringify from '../../stringify';

export default class Intact {
  constructor(name, obj) {
    this.name = name;
    this.value = obj[name];
  }

  toString(depth) {
    return `${'  '.repeat(depth)}    ${this.name}: ${stringify(this.value, depth)}`;
  }
}
