var path = require("path");
var module_with_global_require = require(path.join(__dirname, "module_with_global_require.js"));

export = function() {
  return module_with_global_require;
}
