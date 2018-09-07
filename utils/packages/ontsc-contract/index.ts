var Schema = require("ontsc-contract-schema");
var Contract = require("./contract.js");

var contract = function(options) {
  var binary = Schema.normalize(options || {});

  // Note we don't use `new` here at all. This will cause the class to
  // "mutate" instead of instantiate an instance.
  return Contract.clone(binary);
};

export = contract;

if (typeof window !== "undefined") {
  window.OntscContract = contract;
}
