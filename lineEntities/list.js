const NestedEntity = require("./nestedEntity");
const type = "list";

class List extends NestedEntity {
  constructor(line) {
    super();

    if (!line.startsWith("#")) {
      throw new Error("List declaration should start with #");
    }

    this.title = line.match(/^#(.*)$/)[1].trim();
  }

  toJSON() {
    return super.toJSON({ title: this.title, type });
  }
}

module.exports = List;
