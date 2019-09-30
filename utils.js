const extractLeadingSpaces = line => {
  return (line.match(/^(\s)*/) || [])[0];
};

const validateIndent = (lineNumber, indentLevel) => {
  if (indentLevel % 2 !== 0) {
    throw new Error(indentLevelErrorMessage(lineNumber));
  }
};

module.exports.calculateIndentLevel = (lineNumber, line) => {
  const leadingSpaces = extractLeadingSpaces(line);
  const spacesCount = leadingSpaces.split(" ").length - 1;
  const indentLevel = spacesCount / 2;

  validateIndent(lineNumber, spacesCount);

  return indentLevel;
};

module.exports.indentLevelErrorMessage = lineNumber =>
  `[LINE ${lineNumber}]: Indentation needs to be a multiple of 2 spaces`;

module.exports.isEmptyLine = line => line.trim() === "";

module.exports.validateIndentLevelChange = (
  currentIndentLevel,
  indentLevel
) => {
  if (indentLevel - currentIndentLevel > 1) {
    throw new Error(
      `[LINE ${currentLineNumber}]: Indentation cannot increase more than one level at a time`
    );
  }
};
