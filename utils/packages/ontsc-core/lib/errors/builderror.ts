var colors = require("colors");
var OntscError = require("ontsc-error");
var inherits = require("util").inherits;

inherits(BuildError, OntscError);

function BuildError(message) {
  message = "Error building:\n\n" + message + "\n\n" + colors.red("Build failed. See above.");
  BuildError.super_.call(this, message);
}

export = BuildError;
