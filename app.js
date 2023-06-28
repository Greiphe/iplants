var createError = require('http-errors');
var express = require('express');
const mysql = require('mysql2/promise');
var path = require('path');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var usersRouter = require('./routes/users');
var produtoRouter = require('./routes/produto');
var loginRouter = require('./routes/login');
var cadastroRouter = require('./routes/cadastro');
var pedidosRouter = require('./routes/pedidos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'iplants',
  resave: false,
  saveUninitialized: true,
}));
app.use('/users', usersRouter);
app.use('/produtos', produtoRouter);
app.use('/login', loginRouter);
app.use('/cadastro', cadastroRouter);
app.use('/pedidos', pedidosRouter);




// Configuração da Página de Cadastro (NÃO ALTERAR NENHUM ARQUIVO)
app.post('/cadastre', async (req, res) => {
  const { cpf, usuario, senha, confirmar_senha } = req.body;


  // Verifica se as senhas correspondem 
  if (senha !== confirmar_senha) {
    return res.status(400).send('As senhas não correspondem');
  }
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      port: 3306,
      password: '',
      database: 'iplants'
    });
    // Executa a query de inserção na tabela 'Cadastro'
    const queryCadastro = 'INSERT INTO cadastro (cpf, usuario, senha) VALUES (?, ?, ?)';
    await connection.execute(queryCadastro, [cpf, usuario, senha])

    // Executa a query de inserção na tabela "Login"
    const queryLogin = 'INSERT INTO login (usuario, senha) VALUES (?, ?)';
    await connection.execute(queryLogin, [usuario, senha]);


    console.log('Dados de cadastro inseridos com sucesso!');
    console.log('Dados de login inseridos com sucesso!');
    res.redirect('../login'); // Redireciona ao login após conclusão de cadastro

  } catch (error) {
      console.error('Erro ao inserir dados', error);
    res.status(500).send('Erro ao inserir dados no banco de dados');
  }
});


// Configuração da Página de Login (NÃO ALTERAR NENHUM ARQUIVO)

app.post('/login', async (req, res) => {
  const { usuario, senha } = req.body;
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      port: 3306,
      password: '',
      database: 'iplants'
    });
    const query = 'SELECT * FROM login WHERE usuario = ? AND senha = ?';
    const [rows] = await connection.execute(query, [usuario, senha]);

    if (rows.length === 1) {
      req.session.loggedIn = true;
      res.redirect('/'); //Redireciona para o index
    } else {
      req.session.loggedIn = false;
      res.redirect('/login');
    }
  } catch (error) {
    console.error('Erro ao verificar as credenciais', error);
    res.status(500).send('Erro ao verificar as credenciais');
  }
});


/* GET login. */
app.get('/logout', function(req, res) {
  if(req.session.loggedIn){
    req.session.destroy();
  }
  res.redirect('/');
});

// Middleware para verificar se o usuário está logado
const requireLogin = (req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect('/login');
  }
};

app.get('/login', requireLogin, (req, res) => {
  // Verifica se o usuário está logado
  if (req.session.loggedIn) {
    res.send('Bem-vindo!');
  } else {
    // Caso ocorra algum erro
    res.status(401).send('Acesso não autorizado');
  }
});

// Configuração da Página de Perfil (NÃO ALTERAR NENHUM ARQUIVO)

app.post('/myAccount', async (req, res) => {
  const { nome, sobrenome, usuario, email, telefone, action } = req.body;

  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      port: 3306,
      password: '',
      database: 'iplants'
    });
    if (action === 'alterar') {
      // Remover o perfil existente da tabela "perfil"
      const deleteQuery = 'DELETE FROM perfil';
      await connection.execute(deleteQuery);

      // Inserir o novo perfil na tabela "perfil"
      const insertQuery = 'INSERT INTO perfil (nome, sobrenome, usuario, email, telefone) VALUES (?, ?, ?, ?, ?)';
      await connection.execute(insertQuery, [nome, sobrenome, usuario, email, telefone]);

      console.log('Perfil atualizado com sucesso!');
      res.redirect('/myAcount'); // Redirecionar de volta para a página myAccount após a atualização bem-sucedida
    } else if (action === 'salvar') {
      // Inserir o novo perfil na tabela "perfil"
      const insertQuery = 'INSERT INTO perfil (nome, sobrenome, usuario, email, telefone) VALUES (?, ?, ?, ?, ?)';
      await connection.execute(insertQuery, [nome, sobrenome, usuario, email, telefone]);

      console.log('Perfil salvo com sucesso!');
      res.redirect('/myAcount'); // Redirecionar de volta para a página myAccount após a inserção bem-sucedida
    } else {
      res.status(400).send('Ação inválida');
    }
  } catch (error) {
    console.error('Erro ao atualizar perfil:', error);
    res.status(500).send('Erro ao atualizar perfil no banco de dados');
  }
});


// Configuração da Página de Cartões (NÃO ALTERAR NENHUM ARQUIVO)
// Configuração do banco de dados


// Rota para salvar o cartão
app.post('/salvarCartao', async (req, res) => {
  const { numeroCartao, nomeTitular, expiraMes, expiraAno, cvv, tipoCartao } = req.body;

  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'iplants'
    });
    // Conexão com o banco de dados
    connection.connect();
    // Verificar se já existem 3 registros na tabela "cartao"
    let countQuery = 'SELECT COUNT(*) AS count FROM cartao';
    let [countResult] = await connection.execute(countQuery);
    let count = countResult[0].count;

    if (count >= 3) {
      console.log('Limite máximo de registros atingido. Não é possível adicionar mais cartões.');
      res.redirect('/myCard'); // Redirecionar de volta para a página myCard com uma mensagem de erro
    } else {
      // Inserir os dados do cartão na tabela "cartao"
      let insertQuery = 'INSERT INTO cartao (numeroCartao, nomeTitular, expiraMes, expiraAno, cvv, tipoCartao) VALUES (?, ?, ?, ?, ?, ?)';
      await connection.execute(insertQuery, [numeroCartao, nomeTitular, expiraMes, expiraAno, cvv, tipoCartao]);

      // Consultar os cartões da tabela "cartao"
      const selectQuery = `SELECT * FROM cartao;`;
      let [results] = await connection.execute(selectQuery);
      let cartoes = results;

      res.render('myCard', { cartoes }); // Renderizar a página "myCard" e passar os dados dos cartões
    }
  } catch (error) {
    console.error('Erro ao salvar cartão:', error);
    res.status(500).send('Erro ao salvar o cartão no banco de dados');
  }
});

app.get('/myCard', async (req, res) => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'iplants'
    });
    if (req.session.loggedIn) {
      res.locals.user = req.session.loggedIn;
    }
    // Conexão com o banco de dados
    connection.connect();
    // Consulta os cartões da tabela "cartao"
    const selectQuery = 'SELECT * FROM cartao;';
    const [results] = await connection.execute(selectQuery);
    const cartoes = results;

    // Renderiza a página myCard.ejs e passa os dados dos cartões como variável
    res.render('myCard', { cartoes });
  } catch (error) {
    console.error('Erro ao obter cartões:', error);
    res.status(500).send('Erro ao obter os cartões do banco de dados');
  }
});

// No final do arquivo, após todas as rotas
// Encerra a conexão com o banco de dados quando a aplicação é encerrada
process.on('SIGINT', () => {
  connection.end();
  process.exit();
});

app.delete('/myCard/:cartaoId', function (req, res) {
  const cartaoId = req.params.cartaoId;
  console.log('ID do cartão a ser excluído:', cartaoId);

  // Configuração do banco de dados
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'iplants'
  });

  // Conexão com o banco de dados
  connection.connect();

  // Consulta SQL para excluir o cartão com base no ID
  const deleteQuery = 'DELETE FROM cartao WHERE id = ?';

  // Executa a consulta SQL com o cartaoId fornecido
  connection.query(deleteQuery, [cartaoId], function (error, results, fields) {
    if (error) throw error;

    // Fecha a conexão com o banco de dados
    connection.end();

    // Envie a resposta adequada, como um status de sucesso
    res.sendStatus(200);
  });
});


app.post('/removerCartao', async (req, res) => {
  try {
    const cartaoId = req.body.cartaoId;
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      port: 3306,
      password: '',
      database: 'iplants'
    });

    const deleteQuery = 'DELETE FROM cartao WHERE id = ?';
    await connection.execute(deleteQuery, [cartaoId]);

    res.sendStatus(200);
  } catch (error) {
    console.error('Erro ao deletar o cartão:', error);
    res.sendStatus(500);
  }
});




// Configuração da Página de Endereço (NÃO ALTERAR NENHUM ARQUIVO)
app.get('/endereco', async (req, res) => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'iplants'
    });

    if (req.session.loggedIn) {
      res.locals.user = req.session.loggedIn;
    }
    // Conexão com o banco de dados
    connection.connect();
    // Consulta os cartões da tabela "cartao"
    const selectQuery = 'SELECT * FROM enderecos;';
    const [results] = await connection.execute(selectQuery);
    const enderecos = results;

    // Renderiza a página myCard.ejs e passa os dados dos cartões como variável
    res.render('endereco', { enderecos });
  } catch (error) {
    console.error('Erro ao obter endereços:', error);
    res.status(500).send('Erro ao obter os endereços do banco de dados');
  }
});

app.post('/endereco', async (req, res) => {
  const { rua, cep, numero, bairro, cidade, pais, uf } = req.body;

  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      port: 3306,
      password: '',
      database: 'iplants'
    });
    // Inserir os dados do endereço na tabela "enderecos"
    const enderecos = 'INSERT INTO enderecos (rua, cep, numero, bairro, cidade, pais, uf) VALUES (?, ?, ?, ?, ?, ?, ?)';
    await connection.execute(enderecos, [rua, cep, numero, bairro, cidade, pais, uf]);

    res.redirect('/endereco'); // Redirecionar para a página "endereco" após salvar o endereço
  } catch (error) {
    console.error('Erro ao salvar endereço:', error);
    res.status(500).send('Erro ao salvar o endereço no banco de dados');
  }
});

app.post('/deletarEndereco', async (req, res) => {
  try {
    const enderecoId = req.body.enderecoId; // Obtém o ID do endereço a ser deletado

    // Conecte-se ao banco de dados e execute a query para remover o endereço
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      port: 3306,
      password: '',
      database: 'iplants'
    });

    const deleteQuery = 'DELETE FROM enderecos WHERE id = ?';
    await connection.execute(deleteQuery, [enderecoId]);

    res.sendStatus(200); // Resposta HTTP 200 OK para indicar que a remoção foi concluída com sucesso
  } catch (error) {
    console.error('Erro ao deletar o endereço:', error);
    res.status(500).send('Erro ao deletar o endereço');
  }
});


// Configuração da Página de Carrinho (NÃO ALTERAR NENHUM ARQUIVO)
app.post('/carrinho', async function (req, res) {
  const { produto, quantidade, preco } = req.body;
  const data = new Date();

  const carrinhoItem = {
    produto: produto,
    quantidade: quantidade,
    preco: preco,
    data: data
  };

  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      port: 3306,
      password: '',
      database: 'iplants'
    });

    // Verifica se todos os parâmetros estão definidos
    if (produto && quantidade && preco) {
      // Insere os dados na tabela carrinho no banco de dados
      await connection.execute('INSERT INTO carrinho (produto, quantidade, preco, data) VALUES (?, ?, ?, ?)',
        [carrinhoItem.produto, carrinhoItem.quantidade, carrinhoItem.preco, carrinhoItem.data]
      );

      // Redireciona o usuário para a página de carrinho
      res.redirect('/carrinho');
    } else {
      throw new Error('Parâmetros inválidos');
    }
  } catch (error) {
    console.error('Erro ao inserir o item do carrinho:', error);
    res.status(500).send('Erro ao inserir o item do carrinho no banco de dados');
  }
});


app.get('/carrinho', async (req, res) => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      port: 3306,
      password: '',
      database: 'iplants'
    });
    if (req.session.loggedIn) {
      res.locals.user = req.session.loggedIn;
    }
    // Obter os cartões
    const cartoesQuery = 'SELECT * FROM cartao;';
    const [cartoes] = await connection.execute(cartoesQuery);

    // Obter os itens do carrinho
    const carrinhoQuery = 'SELECT * FROM carrinho;';
    const [itensCarrinho] = await connection.execute(carrinhoQuery);

    // Obter os endereços
    const enderecoQuery = 'SELECT * FROM enderecos;';
    const [enderecos] = await connection.execute(enderecoQuery);

    res.render('carrinho', { cartoes: cartoes, itensCarrinho: itensCarrinho, enderecos: enderecos });
    // Renderizar a página do carrinho com os cartões, itens do carrinho e endereços obtidos
  } catch (error) {
    console.error('Erro ao obter produtos do carrinho:', error);
    res.status(500).send('Erro ao obter produtos do carrinho');
  }
});

app.delete('/carrinho/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      port: 3306,
      password: '',
      database: 'iplants'
    });

    // Execute a consulta SQL para remover a linha com base no ID
    const query = 'DELETE FROM carrinho WHERE id = ?';
    await connection.execute(query, [id]);

    connection.end(); // Fechar a conexão com o banco de dados

    res.sendStatus(200);
  } catch (error) {
    console.error('Erro ao remover linha do banco de dados:', error);
    res.sendStatus(500);
  }
});
//adicionar numeros de notificações no carrinho
app.get('/cartCount', async (req, res) => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      port: 3306,
      password: '',
      database: 'iplants'
    });
    if (req.session.loggedIn) {
      res.locals.user = req.session.loggedIn;
    }
    // Obter os itens do carrinho
    const cartCountquery = 'SELECT  Count(*) AS quantidadeItens FROM carrinho;';
    const [cartCount] = await connection.execute(cartCountquery);
    res.json(cartCount);
    
    // Renderizar a página do carrinho com os cartões, itens do carrinho e endereços obtidos
  } catch (error) {
    console.error('Erro ao obter produtos do carrinho:', error);
    res.status(500).send('Erro ao obter produtos do carrinho');
  }
});

// Configuração da Página de Compras (NÃO ALTERAR NENHUM ARQUIVO)

app.post('/comprarProdutos', async (req, res) => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      port: 3306,
      password: '',
      database: 'iplants'
    });
    const data = new Date();

    // Obter os produtos do carrinho
    const selectQuery = 'SELECT * FROM carrinho';
    const [rows] = await connection.execute(selectQuery);

    // Inserir os produtos na tabela de compras
    const insertQuery = 'INSERT INTO compras (produto, quantidade, data, preco) VALUES (?, ?, ?, ?)';
    for (const produto of rows) {
      await connection.execute(insertQuery, [produto.produto, produto.quantidade, data, produto.preco]);
    }

    // Limpar o carrinho (excluir os produtos do carrinho)
    const deleteQuery = 'DELETE FROM carrinho';
    await connection.execute(deleteQuery);

    res.redirect('/minhas-compras'); // Redirecionar para a página do carrinho após efetuar a compra
  } catch (error) {
    console.error('Erro ao efetuar a compra:', error);
    res.status(500).send('Erro ao efetuar a compra');
  }
});

// Rota para mover os dados da tabela de carrinho para a tabela de compras
app.get('/minhas-compras', async (req, res) => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      port: 3306,
      password: '',
      database: 'iplants'
    });

    if (req.session.loggedIn) {
      res.locals.user = req.session.loggedIn;
    }

    // Consultar os dados da tabela de compras
    const selectQuery = 'SELECT * FROM compras';
    const [rows] = await connection.execute(selectQuery);

    res.render('minhas-compras', { compras: rows }); // Passar os dados da consulta para o template
  } catch (error) {
    console.error('Erro ao obter as compras:', error);
    res.status(500).send('Erro ao obter as compras');
  }
});




// Configuração da Página de Contato (NÃO ALTERAR NENHUM ARQUIVO)
app.post('/enviarContato', async (req, res) => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      port: 3306,
      password: '',
      database: 'iplants'
    });
    const { nome, usuario, email, mensagem } = req.body;

    // Inserir os dados do contato na tabela de contatos
    const insertQuery = 'INSERT INTO contato (nome, usuario, email, mensagem) VALUES (?, ?, ?, ?)';
    await connection.execute(insertQuery, [nome, usuario, email, mensagem]);

    res.redirect('/contato'); // Redirecionar de volta para a página de contato após enviar os dados
  } catch (error) {
    console.error('Erro ao enviar o contato:', error);
    res.status(500).send('Erro ao enviar o contato');
  }
});

// Sobre
app.get('/sobre', function (req, res) {
  if (req.session.loggedIn) {
    res.locals.user = req.session.loggedIn;
  }
  res.render('sobre');
});


//Contato
app.get('/contato', function (req, res) {
  if (req.session.loggedIn) {
    res.locals.user = req.session.loggedIn;
  }
  res.render('contato');
});

//myAcount

app.get('/myAcount', function (req, res) {
  if (req.session.loggedIn) {
    res.locals.user = req.session.loggedIn;
  }
  res.render('myAccount');
});


// Index

app.get('/', function (req, res) {
  if (req.session.loggedIn) {
    res.locals.user = req.session.loggedIn;
  }
  res.render('index');
});


//Produtos
app.get('/produtos', function (req, res) {
  if (req.session.loggedIn) {
    res.locals.user = req.session.loggedIn;
  }
  res.render('/produtos', produtosController.getProdutos);
});

app.get('/produtos/:id', function(req, res){
  if (req.session.loggedIn) {
    res.locals.user = req.session.loggedIn;
  }
  res.render('/produtos/:id', produtosController.exibirProduto);
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  if (err.status === 404) {
    res.render('404');
  } else {
    res.render('error');
  }
});

module.exports = app;

