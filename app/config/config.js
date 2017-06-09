var config = module.exports
var PRODUCTION = process.env.NODE_ENV === 'production'

config.express = {
  port: process.env.EXPRESS_PORT || 3000,
  ip: '127.0.0.1'
}

config.mongodb = {
  dbname: 'myfitweek',
  host: '127.0.0.1:27017'
}

if (PRODUCTION) {
  config.express.ip = '0.0.0.0'
}