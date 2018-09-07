/*
 * returns a VCS url string given:
 * - a VCS url string
 * - a github `org/repo` string
 * - a string containing a repo under the `ontsc-box` org
 */
function normalizeURL(url) {
  url = url || "https://github.com/claudebol/ontsc-init-default";

  // full URL already
  if (url.indexOf("://") != -1 || url.indexOf("git@") != -1) {
    return url;
  }

  if (url.split("/").length == 2) { // `org/repo`
    return "https://github.com/" + url;
  }

  if (url.indexOf("/") == -1) { // repo name only
    if (url.indexOf("-box") == -1) {
      url = url + "-box";
    }
    return "https://github.com/ontsc-box/" + url;
  }

  throw new Error("Box specified in invalid format");
}

/*
 * returns a list of messages, one for each command, formatted
 * so that:
 *
 *    command key:   command string
 *
 * are aligned
 */
function formatCommands(commands) {
  var names = Object.keys(commands);

  var maxLength = Math.max.apply(
    null, names.map(function(name) { return name.length })
  );

  return names.map(function(name) {
    var spacing = Array(maxLength - name.length + 1).join(" ");
    return "  " + name + ": " + spacing + commands[name];
  });
}

var command = {
  command: 'unbox',
  description: 'Download a Ontsc Box, a pre-built Ontsc project',
  builder: {},
  run: function(options, done) {
    var Config = require("ontsc-config");
    var Box = require("ontsc-box");
    var OS = require("os");

    var config = Config.default().with({
      logger: console
    });

    var url = normalizeURL(options._[0]);

    Box.unbox(url, config.working_directory, {logger: config.logger})
      .then(function(boxConfig) {
        config.logger.log("Unbox successful. Sweet!" + OS.EOL);

        var commandMessages = formatCommands(boxConfig.commands);
        if (commandMessages.length > 0) {
          config.logger.log("Commands:" + OS.EOL);
        }
        commandMessages.forEach(function(message) {
          config.logger.log(message);
        });

        if (boxConfig.epilogue) {
          config.logger.log(boxConfig.epilogue.replace("\n", OS.EOL));
        }

        done();
      })
      .catch(done);
  }
}

export = command;
