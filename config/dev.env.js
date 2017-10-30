var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var config = require('./config')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_HOST: `"${config.api_dev_host}"`
})
