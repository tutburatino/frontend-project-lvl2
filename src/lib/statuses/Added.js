export default class Added {
  constructor(name, obj) {
    this.name = name;
    this.value = obj[name];
  }

  toString() {
    return `  + ${this.name}: ${this.value}`;
  }
}
