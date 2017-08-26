var objectService = require('./services/object')


// 新建一个 Todo 对象
var data = require('./data.json')
var async = require('async')

async.eachSeries(data, (item, done) => {
  var name = item[0];
  var time = item[1];
  var place = item[2];
  var currentPlace = item[3];

  objectService.createObj(name, time, place, currentPlace)
    .then((result) => {
      done(null, result)
    })
    .catch(done)
}, (err, results) => {
  if (err) {
    console.log('Err', err)
  } else {
    console.log('results', results)
  }
})