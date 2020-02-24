import stringify from '../stringify';

export default class Removed {
  constructor(name, before) {
    this.name = name;
    this.type = 'Removed';
    this.value = before[name];
  }

  toString(depth) {
    return `${'    '.repeat(depth)}  - ${this.name}: ${stringify(this.value, depth + 1)}`;
  }

  toPlainString(parents) {
    return `Property '${[...parents, this.name].join('.')}' was removed`;
  }

  genTree() {
    return {
      name: this.name,
      type: 'Removed',
      value: this.value,
    };
  }
}
