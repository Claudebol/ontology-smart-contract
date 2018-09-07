var colors = require("colors");
var OntscError = require("ontsc-error");
var inherits = require("util").inherits;

inherits(CompileError, OntscError);

function CompileError(message) {
  // Note we trim() because solc likes to add extra whitespace.
  var fancy_message = message.trim() + "\n" + colors.red("Compilation failed. See above.");
  var normal_message = message.trim();

  CompileError.super_.call(this, normal_message);
  this.message = fancy_message;
};

export = CompileError;
