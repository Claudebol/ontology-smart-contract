const findUp = require('find-up')
const Logger = require('./logDecorator')

const getOntscConfig = function () {
  const isWin = /^win/.test(process.platform)
  let file

  if (isWin) {
    file = findUp.sync('ontsc-config.js')
  } else {
    file = findUp.sync('ontsc.js')
  }

  if (file) {
    return file
  }

  Logger.log('No Ontsc config file found.')
}

export = getOntscConfig
