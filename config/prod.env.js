var config = require('./config')

module.exports = {
  NODE_ENV: '"production"',
  API_HOST: `"${config.api_prod_host}"`
}
