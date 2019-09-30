const NestedEntity = require("./nestedEntity");
const type = "singleChoice";

class SingleChoice extends NestedEntity {
  constructor(line) {
    super();

    this.title = line.match(/^-\s\(\s\)(.*)$/)[1].trim();
  }

  toJSON() {
    return super.toJSON({ title: this.title, type });
  }
}

module.exports = SingleChoice;
