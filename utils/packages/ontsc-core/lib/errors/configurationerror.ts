var OntscError = require("ontsc-error");
var inherits = require("util").inherits;

inherits(ConfigurationError, OntscError);

function ConfigurationError(message) {
    ConfigurationError.super_.call(this, message);
}

export = ConfigurationError;
