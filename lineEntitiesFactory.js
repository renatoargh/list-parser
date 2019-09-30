const Group = require("./lineEntities/group");
const SingleChoice = require("./lineEntities/singleChoice");
const MultipleChoice = require("./lineEntities/multipleChoice");
const Checkbox = require("./lineEntities/checkbox");

module.exports = line => {
  line = line.trim();

  if (line.startsWith("##")) {
    return new Group(line);
  }

  if (line.startsWith("- ( )")) {
    return new SingleChoice(line);
  }

  if (line.startsWith("- [ ]")) {
    return new MultipleChoice(line);
  }

  if (line.startsWith("- ")) {
    return new Checkbox(line);
  }

  throw new Error(`Line type not supported, Line was: "${line}"`);
};
