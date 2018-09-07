if (process.env.NODE_ENV == "production") {
  export = require("./production");
} else if (process.env.NODE_ENV == "test") {
  export = require("./test");
} else {
  export = require("./development");
}
