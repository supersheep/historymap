var express = require('express')
var objectRouter = express.Router();
var service = require('../services/object')

objectRouter.get('/', (req, res, next) => {
  service.getAll()
    .then((results) => {
      res.send(results)
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = objectRouter
