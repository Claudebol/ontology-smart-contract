var colors = require("colors");
var OntscError = require("ontsc-error");
var inherits = require("util").inherits;

inherits(DeployError, OntscError);

function DeployError(message, contract_name) {
  message = "Error deploying " + contract_name + ":\n\n" + message + "\n\n" + colors.red("Deploy failed. See above.");
  DeployError.super_.call(this, message);
}

export = DeployError;
