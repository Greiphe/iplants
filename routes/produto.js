const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produto');

router.get('/', produtosController.getProdutos);
router.get('/:id', produtosController.exibirProduto);


module.exports = router;
