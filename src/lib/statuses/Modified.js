import stringify from '../../stringify';

export default class Modified {
  constructor(name, before, after) {
    this.name = name;
    this.before = before[name];
    this.after = after[name];
  }

  toString(depth) {
    return `${'    '.repeat(depth)}  + ${this.name}: ${stringify(this.after, depth + 1)}\n${'    '.repeat(depth)}  - ${this.name}: ${stringify(this.before, depth + 1)}`;
  }
}
