var command = {
  command: 'build',
  description: 'Execute build pipeline (if configuration present)',
  builder: {},
  run: function (options, done) {
    var Config = require("ontsc-config");
    var Build = require("../build");

    var config = Config.detect(options);
    Build.build(config, done);
  }
}

export = command;
