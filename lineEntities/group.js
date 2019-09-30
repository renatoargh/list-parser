const NestedEntity = require("./nestedEntity");
const type = "group";

class Group extends NestedEntity {
  constructor(line) {
    super();

    this.title = line.match(/^##(.*)$/)[1].trim();
  }

  toJSON() {
    return super.toJSON({ title: this.title, type });
  }
}

module.exports = Group;
