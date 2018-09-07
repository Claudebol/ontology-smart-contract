var Linker = require("../linker");

export = function(library, destinations, deployer) {
  return function() {
    Linker.link(library, destinations, deployer.logger);
  };
};
