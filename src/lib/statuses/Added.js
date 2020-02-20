import stringify from '../../stringify';


export default class Added {
  constructor(name, obj) {
    this.name = name;
    this.value = obj[name];
  }

  toString(depth) {
    return `${'    '.repeat(depth)}  + ${this.name}: ${stringify(this.value, depth + 1)}`;
  }
}
