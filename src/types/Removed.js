import stringify from '../stringify';

export default class Removed {
  constructor(name, before) {
    this.name = name;
    this.before = before[name];
  }

  toString(depth) {
    return `${'    '.repeat(depth)}  - ${this.name}: ${stringify(this.before, depth + 1)}`;
  }

  toPlainString(parents) {
    return `Property '${[...parents, this.name].join('.')}' was removed`;
  }
}
