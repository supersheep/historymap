var express = require('express')
var objectRouter = require('./object')
var apiRouter = express.Router();


apiRouter.use('/object', objectRouter)

module.exports = apiRouter