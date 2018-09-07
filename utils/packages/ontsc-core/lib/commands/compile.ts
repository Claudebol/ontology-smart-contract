var command = {
  command: 'compile',
  description: 'Compile contract source files',
  builder: {
    all: {
      type: "boolean",
      default: false
    }
  },
  run: function (options, done) {
    var Config = require("ontsc-config");
    var Contracts = require("ontsc-workflow-compile");

    var config = Config.detect(options);
    Contracts.compile(config, done);
  }
}

export = command;
