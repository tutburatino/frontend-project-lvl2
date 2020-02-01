export default class Removed {
  constructor(name, before) {
    this.name = name;
    this.before = before[name];
  }

  toString() {
    return `  - ${this.name}: ${this.before}`;
  }
}
