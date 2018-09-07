const chalk = require('chalk')

const Logger = {
  log: function (msg) {
    console.log('[ONTSC SOLIDITY] ' + msg)
  },
  error: function (msg) {
    console.log(chalk.red('[! ONTSC SOLIDITY ERROR] ' + msg))
  },
  debug: function (msg) {
    console.debug(chalk.red('[! ONTSC SOLIDITY DEBUGGER] ' + msg))
  }
}

export = Logger
