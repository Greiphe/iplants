var express = require('express');
var router = express.Router();

/* GET cadastro. */
router.get('/', function(req, res) {
  res.render('cadastro/index');
});

module.exports = router;