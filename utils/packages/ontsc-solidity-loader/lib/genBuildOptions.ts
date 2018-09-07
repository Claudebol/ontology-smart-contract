const OntscConfig = require('ontsc-config')
const Logger = require('./logDecorator')
const getOntscConfig = require('./getOntscConfig')

const genBuildOptions = function (buildOpts) {
  if (!buildOpts.network) {
    throw new Error('You must specify the network name to deploy to. (network)')
  }

  var ontscConfig = getOntscConfig()
  if (ontscConfig) {
    var config = OntscConfig.load(ontscConfig, buildOpts)
  } else {
    throw new Error('No Ontsc Config file found!')
  }

  config.reset = true // TODO make this configurable
  config.logger = Logger // NOTE: this will be used within ontsc
  return config
}

export = genBuildOptions
