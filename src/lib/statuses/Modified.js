export default class Modified {
  constructor(name, before, after) {
    this.name = name;
    this.before = before[name];
    this.after = after[name];
  }

  toString() {
    return `  + ${this.name}: ${this.after}`
       + `\n  - ${this.name}: ${this.before}`;
  }
}
