const Produto = require('../models/produto');

exports.getProdutos = async (req, res) => {
  try {
    const produtos = await Produto.listarTodos();
    console.log(req.session);
    if (req.session.loggedIn) {
      res.locals.user = req.session.loggedIn;
    }
    res.render('produto/index', { produtos });
  } catch (error) {

    res.status(500).render('error', { message: 'Erro no servidor', error });
  }
};

exports.exibirProduto = async (req, res) => {
  try {
    const id = req.params.id;
    const produtosId = await Produto.buscarPorId(id);
    console.log({produtosId: produtosId});
    if (req.session.loggedIn) {
      res.locals.user = req.session.loggedIn;
    }
    res.render('produto/show', {produtosId: produtosId });
  } catch (error) {

    res.status(500).render('error', { message: 'Erro no servidor', error });
  }
};
