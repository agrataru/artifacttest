var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'tarun test 566666666666 7y7y7y7y7y7y7y7' });
});

module.exports = router;
