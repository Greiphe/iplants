var express = require('express');
var router = express.Router();

/* GET login. */
router.get('/', function(req, res) {
  res.render('endereco');
});

module.exports = router;