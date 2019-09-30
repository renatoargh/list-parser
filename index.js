const fs = require("fs");
const utils = require("./utils");
const lineEntitiesFactory = require("./lineEntitiesFactory");
const List = require("./lineEntities/list");

const filePath = process.argv[2];
const file = fs.readFileSync(filePath, "utf8");
const lines = file.split("\n");

const firstLine = lines.shift();
const list = new List(firstLine);
const itemPerIndentLevel = {
  "-1": list
};

let currentLineNumber = 1;
let currentIndentLevel = -1;

for (const line of lines) {
  currentLineNumber++;

  if (utils.isEmptyLine(line)) {
    continue;
  }

  const indentLevel = utils.calculateIndentLevel(currentLineNumber, line);
  utils.validateIndentLevelChange(currentIndentLevel, indentLevel);

  const lineEntity = lineEntitiesFactory(line);
  itemPerIndentLevel[indentLevel] = lineEntity;

  const previousIndentLevel = indentLevel - 1;
  const parentItem = itemPerIndentLevel[previousIndentLevel];
  parentItem.add(lineEntity);

  currentIndentLevel = indentLevel;
}

console.log(JSON.stringify(list, null, 2));
