export default class Intact {
  constructor(name, obj) {
    this.name = name;
    this.value = obj[name];
  }

  toString() {
    return `    ${this.name}: ${this.value}`;
  }
}
