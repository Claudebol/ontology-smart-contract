var path = require("path");

export = function(filePath) {
  delete require.cache[path.resolve(filePath)];
  return require(filePath);
};
