const NestedEntity = require("./nestedEntity");
const type = "multipleChoice";

class MultipleChoice extends NestedEntity {
  constructor(line) {
    super();

    this.title = line.match(/^-\s\[\s\](.*)$/)[1].trim();
  }

  toJSON() {
    return super.toJSON({ title: this.title, type });
  }
}

module.exports = MultipleChoice;
