'use strict'
/* eslint node/no-unsupported-features: 0 */

const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')

const { correlationMiddleware } = require('@first-lego-league/ms-correlation')
const { authenticationMiddleware, authenticationDevMiddleware } = require('@first-lego-league/ms-auth')
const { Logger, loggerMiddleware } = require('@first-lego-league/ms-logger')

const DEFAULTS = require('./server/defaults')

const port = process.env.PORT || DEFAULTS.PORT

const app = express()
const logger = new Logger()

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(correlationMiddleware)
app.use(loggerMiddleware)
app.use(cors())

const apis = ['/scores', '/challenge', '/config']

apis.forEach(api => {
  // eslint-disable-next-line import/no-dynamic-require
  app.use(api, require(`./server${api}`))
})

if (process.env.DEV) {
  app.use('', require('./server/dev_router'))
}

if (process.env.DEV) {
  app.use(authenticationDevMiddleware())
} else {
  app.use(authenticationMiddleware)
}

app.use(express.static(path.resolve(__dirname, 'client/dist')))

app.listen(port, () => {
  logger.info(`Scoring service listening on port ${port}`)
})

process.on('SIGINT', () => {
  logger.info('Process received SIGINT: shutting down')
  process.exit(130)
})

process.on('uncaughtException', err => {
  logger.fatal(err.message)
  process.exit(1)
})

process.on('unhandledRejection', err => {
  logger.fatal(err.message)
  process.exit(1)
})
