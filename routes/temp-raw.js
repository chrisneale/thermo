var express = require('express');
var router = express.Router();
var temp = require('temperature');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(temp.temperature);
});

module.exports = router;
