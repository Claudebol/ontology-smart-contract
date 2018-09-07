var OntscError = require("ontsc-error");
var inherits = require("util").inherits;

inherits(TaskError, OntscError);

function TaskError(message) {
  TaskError.super_.call(this, message);
};

export = TaskError;
