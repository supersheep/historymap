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

module.exports = {
  createObj,
  getAll
}