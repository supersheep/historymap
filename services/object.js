var AV = require('leanengine')
var Object = AV.Object.extend('Object');
function createObj(name, yearRange, place, currentPlace) {
  var obj = new Object();
  obj.set('name', name);
  obj.set('yearRange', yearRange);
  obj.set('place', place);
  obj.set('currentPlace', currentPlace || place);
  return obj.save()
}

function getAll(pageIndex, pageSize) {
  return new AV.Query('Object').find()
}

function updateObject(objectId, params) {
  let query = new AV.Query('Object')
  return query.get(objectId)
  .then((obj) => {
    for (var k in params) {
      obj.set(k, params[k])
    }
    return obj.save()
  })
}

module.exports = {
  createObj,
  getAll,
  updateObject
}