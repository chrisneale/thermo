var express = require('express');
var router = express.Router();
var temp = require('temperature');
/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {
  	"datetime" : new Date(),
	"temperature" : temp.temperature
  };
  res.send(data);

});

module.exports = router;
