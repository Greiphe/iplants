var express = require('express');
var router = express.Router();

/* GET pedidos. */
router.get('/', function(req, res) {
  res.render('pedidos/index');
});

module.exports = router;
