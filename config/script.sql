DROP DATABASE IF EXISTS iplants;
CREATE DATABASE iplants;
USE iplants;

CREATE TABLE carrinho (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  produto VARCHAR(255),
  quantidade INT,
  data DATE,
  preco DECIMAL(10,2)
);

CREATE TABLE contato (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  usuario VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  mensagem TEXT
);


CREATE TABLE perfil (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  sobrenome VARCHAR(255) NOT NULL,
  usuario VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefone VARCHAR(20) NOT NULL
);


CREATE TABLE cartao (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  numeroCartao VARCHAR(255)NOT NULL,
  nomeTitular VARCHAR(255) NOT NULL,
  expiraMes VARCHAR(255) NOT NULL,
  expiraAno VARCHAR(255) NOT NULL,
  cvv VARCHAR(3) NOT NULL,
  tipoCartao VARCHAR(50)
);

CREATE TABLE enderecos (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  rua VARCHAR(255) NOT NULL,
  cep VARCHAR(10) NOT NULL,
  numero INT NOT NULL,
  bairro VARCHAR(255) NOT NULL,
  cidade VARCHAR(255) NOT NULL,
  pais VARCHAR(255) NOT NULL,
  uf VARCHAR(2) NOT NULL
);

CREATE TABLE compras (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  produto VARCHAR(255),
  quantidade INT,
  data DATE,
  preco DECIMAL(10,2)
);

CREATE TABLE login (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  usuario VARCHAR(255) NOT NULL,
  senha VARCHAR(255) NOT NULL
);


create table cadastro(
id INT AUTO_INCREMENT PRIMARY KEY,
cpf INT UNIQUE NOT NULL,
usuario VARCHAR(255) NOT NULL,
senha VARCHAR(255) NOT NULL
);


CREATE TABLE produtos (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255),
  preco DECIMAL(10, 2),
  preco_oferta DECIMAL(10, 2),
  descricao TEXT,
  tamanho VARCHAR(50),
  peso VARCHAR(10),
  categoria VARCHAR(50),
  vendido_por VARCHAR(100),
  foto1 VARCHAR(255),
  foto2 VARCHAR(255),
  off VARCHAR(255)
);

-- Inserir Dados na Tabela Produtos --

INSERT INTO `iplants`.`produtos` (`id`, `nome`, `preco`, `preco_oferta`, `descricao`, `tamanho`, `peso`, `categoria`, `vendido_por`, `foto1`, `foto2`, `off`) VALUES ('1', 'Rosa', '30.00', '60.00', 'As rosas são plantas ornamentais que produzem flores grandes e vistosas em muitas cores diferentes, como vermelho, rosa, amarelo, branco e laranja. Elas possuem espinhos em seus caules e suas flores podem ter uma fragrância doce e agradável. As rosas são frequentemente usadas em arranjos florais e são um símbolo popular de amor e romance.', '10cm', '30g', 'Casamento', 'Aurimar Flores', '/assets/flores/rosa/10.png', '/assets/flores/rosa/1.png', '50%');
INSERT INTO `iplants`.`produtos` (`id`, `nome`, `preco`, `preco_oferta`, `descricao`, `tamanho`, `peso`, `categoria`, `vendido_por`, `foto1`, `foto2`, `off`) VALUES ('2', 'Girassol', '25.00', '30.00', 'Os girassóis são plantas notáveis ​​por suas grandes flores em forma de disco que são conhecidas por seguir o sol em seu movimento diário de leste para oeste. Os girassóis são frequentemente associados à felicidade, otimismo e energia positiva, tornando-os um presente popular para amigos e familiares.', '2m', '1kg', 'Jardim', 'Campo Florecer', '/assets/flores/girassol/6.png', '/assets/flores/girassol/1.png', '30%');
INSERT INTO `iplants`.`produtos` (`id`, `nome`, `preco`, `preco_oferta`, `descricao`, `tamanho`, `peso`, `categoria`, `vendido_por`, `foto1`, `foto2`, `off`) VALUES ('3', 'Azaleia', '27.00', '30.00', 'As azaleias são arbustos floridos perenes conhecidos por suas flores grandes e vibrantes em forma de sino. Elas vêm em muitas cores diferentes, incluindo rosa, vermelho, branco, roxo e laranja. As flores das azaleias podem ser simples ou dobradas, e são frequentemente perfumadas.', '10cm', '35g', 'Escritório', 'Florescer', '/assets/flores/azaleias/1.png', '/assets/flores/azaleias/3.png', '3%');
INSERT INTO `iplants`.`produtos` (`id`, `nome`, `preco`, `preco_oferta`, `descricao`, `tamanho`, `peso`, `categoria`, `vendido_por`, `foto1`, `foto2`, `off`) VALUES ('4', 'Begônia', '25.00', '0.00', 'As begônias são plantas floridas perenes ou anuais conhecidas por suas flores grandes e coloridas em forma de rosa. Elas vêm em muitas cores diferentes, incluindo rosa, vermelho, branco, laranja e amarelo. As flores das begônias podem ser simples ou duplas, e muitas vezes são perfumadas.', '30cm', '25g', 'Jardim', 'Flores do Paraíso', '/assets/flores/Begônias/1.png', '/assets/flores/Begônias/2.png', '0%');
INSERT INTO `iplants`.`produtos` (`id`, `nome`, `preco`, `preco_oferta`, `descricao`, `tamanho`, `peso`, `categoria`, `vendido_por`, `foto1`, `foto2`, `off`) VALUES ('5', 'Cosmos', '20.00', '0.00', 'Os cosmos são plantas floridas anuais conhecidas por suas flores em forma de margarida e folhagem delicada. Elas vêm em muitas cores diferentes, incluindo branco, rosa, vermelho, laranja e amarelo. As flores dos cosmos são geralmente simples e têm uma aparência atraente, com pétalas finas e longas.', '5cm', '10g', 'Casa', 'Amor à Flor', '/assets/flores/cosmos/3.png', '/assets/flores/cosmos/download.jpg', '0%');
INSERT INTO `iplants`.`produtos` (`id`, `nome`, `preco`, `preco_oferta`, `descricao`, `tamanho`, `peso`, `categoria`, `vendido_por`, `foto1`, `foto2`, `off`) VALUES ('6', 'Cravo-Rosa', '35.00', '0.00', 'O Cravo-Rosa, também conhecido como Dianthus caryophyllus, é uma das flores mais populares do mundo. Originário do Mediterrâneo, o Cravo-Rosa é uma flor extremamente versátil, sendo utilizada em arranjos florais, decoração de eventos, em perfumaria e até mesmo em culinária.', '5cm', '20g', 'Escritório', 'Campo Belo', '/assets/flores/cravos_flor/2.png', '/assets/flores/cravos_flor/Cravo-Rosa.jpg', '0%');
INSERT INTO `iplants`.`produtos` (`id`, `nome`, `preco`, `preco_oferta`, `descricao`, `tamanho`, `peso`, `categoria`, `vendido_por`, `foto1`, `foto2`, `off`) VALUES ('7', 'Gérgebras', '20.00', '0.00', 'As gérberas são plantas floridas anuais ou perenes conhecidas por suas flores grandes e vibrantes em forma de margarida. Elas vêm em muitas cores diferentes, incluindo vermelho, rosa, amarelo, laranja e branco. As flores das gérberas podem ser simples ou dobradas, e muitas vezes são perfumadas.', '9cm', '45g', 'Casa', 'Florescer', '/assets/flores/Gérberas/2.png', '/assets/flores/Gérberas/1.png', '0%');
INSERT INTO `iplants`.`produtos` (`id`, `nome`, `preco`, `preco_oferta`, `descricao`, `tamanho`, `peso`, `categoria`, `vendido_por`, `foto1`, `foto2`, `off`) VALUES ('8', 'Lírios', '40.00', '0.00', 'Os lírios são plantas floridas altas e elegantes, conhecidas por suas flores grandes e perfumadas em forma de trombeta. Eles vêm em muitas cores diferentes, incluindo branco, rosa, vermelho, amarelo e laranja. Os lírios podem crescer até cerca de um metro de altura e suas folhas são longas e estreitas.', '12cm', '85g', 'Janela', 'Aurimar Flores', '/assets/flores/lirios/7.png', '/assets/flores/lirios/1.png', '0%');
INSERT INTO `iplants`.`produtos` (`id`, `nome`, `preco`, `preco_oferta`, `descricao`, `tamanho`, `peso`, `categoria`, `vendido_por`, `foto1`, `foto2`, `off`) VALUES ('9', 'Margarida', '50.00', '0.00', 'As margaridas são plantas floridas populares que produzem flores brancas com um centro amarelo. Elas são frequentemente encontradas em jardins e prados, mas também podem ser cultivadas em vasos e canteiros. As margaridas têm folhas verdes em forma de lança e suas flores têm uma aparência clássica de pétalas brancas em torno de um centro redondo amarelo.', '8cm', '15g', 'Janela', 'Campo Florecer', '/assets/flores/margarida/8.png', '/assets/flores/margarida/1.jpg', '0%');
INSERT INTO `iplants`.`produtos` (`id`, `nome`, `preco`, `preco_oferta`, `descricao`, `tamanho`, `peso`, `categoria`, `vendido_por`, `foto1`, `foto2`, `off`) VALUES ('10', 'Petúnias', '25.00', '0.00', 'As petúnias são plantas floridas anuais populares conhecidas por suas flores abundantes e coloridas em forma de trombeta. Elas vêm em muitas cores diferentes, incluindo rosa, vermelho, roxo, branco e amarelo, e suas flores podem ser simples ou dobradas. As petúnias são plantas de baixa manutenção que preferem sol pleno ou parcial e solo bem drenado.', '50cm', '20g', 'Casamento', 'Amor à Flor', '/assets/flores/petunias/9.png', '/assets/flores/petunias/1.png', '0%');
INSERT INTO `iplants`.`produtos` (`id`, `nome`, `preco`, `preco_oferta`, `descricao`, `tamanho`, `peso`, `categoria`, `vendido_por`, `foto1`, `foto2`, `off`) VALUES ('11', 'Tulipas', '35.00', '0.00', 'As tulipas são plantas floridas altamente valorizadas por suas flores grandes e coloridas em forma de taça. Elas vêm em muitas cores diferentes, incluindo vermelho, rosa, amarelo, branco, roxo e laranja, e suas flores podem ter uma aparência simples ou dobrada. As tulipas são plantas bulbosas que preferem sol pleno e solo bem drenado.', '7cm', '30g', 'Apartamento', 'Vida Florida', '/assets/flores/tulipas/11.png', '/assets/flores/tulipas/2.png', '0%');
INSERT INTO `iplants`.`produtos` (`id`, `nome`, `preco`, `preco_oferta`, `descricao`, `tamanho`, `peso`, `categoria`, `vendido_por`, `foto1`, `foto2`, `off`) VALUES ('12', 'Violeta', '25.00', '0.00', 'As violetas são plantas floridas perenes conhecidas por suas flores pequenas e delicadas em forma de coração. Elas vêm em muitas cores diferentes, incluindo azul, roxo, rosa e branco. As flores das violetas podem ser simples ou dobradas, e muitas vezes são perfumadas. As violetas são plantas de baixa manutenção que preferem sol parcial ou sombra e solo úmido e bem drenado.', '4cm', '5g', 'Apartamento', 'Flor Bela', '/assets/flores/violetas/12.png', '/assets/flores/violetas/2.png', '0%');

ALTER TABLE produtos
ADD column autor1 VARCHAR(255),
ADD column mensagem1 TEXT,
ADD column autor2 VARCHAR(255),
ADD column mensagem2 TEXT,
ADD column autor3 VARCHAR(255),
ADD column mensagem3 TEXT;

UPDATE `iplants`.`produtos` SET `autor1` = 'Fernanda Silva', `mensagem1` = 'Ótimo produto, muito bem entregue e sem nenhum defeito. Rosa verdadeira e bem cheirosa!', `autor2` = 'Matheus Carvalho', `mensagem2` = 'Ela é uma flor bonita, mas não é muito original, já que é bastante comum em festas e eventos.', `autor3` = 'Amanda Ferraz', `mensagem3` = 'Apesar de ser uma flor linda e perfumada, ela requer cuidados especiais para se manter viva por muito tempo.' WHERE (`id` = '1');
UPDATE `iplants`.`produtos` SET `autor1` = 'Vitória Soares', `mensagem1` = 'Para mim, o girassol merece nota 5, pois é uma flor imponente e cheia de personalidade. Ele pode ser usado em diversos tipos de decoração, desde rústica até elegante.', `autor2` = 'Jonas Pereira', `mensagem2` = 'Embora seja uma flor bonita, ela é bastante comum e não tem tanta variedade de cores e tamanhos.', `autor3` = 'Milena Santos', `mensagem3` = 'O girassol é uma flor muito alegre e ensolarada. Ele pode ser usado em diversos tipos de decoração, desde casamentos até festas infantis.' WHERE (`id` = '2');
UPDATE `iplants`.`produtos` SET `autor1` = 'Marcos Vinícius', `mensagem1` = 'A azaleia é uma planta encantadora e fácil de cuidar. Elas florescem lindamente e adicionam um toque de cor e elegância ao meu jardim. Eu recomendaria!', `autor2` = 'Alice Melissa', `mensagem2` = 'As azaleias são bonitas, mas requerem um pouco mais de cuidado do que outras plantas. É preciso estar atento à quantidade de água e luz que elas recebem, caso contrário, elas podem acabar morrendo. Mas, quando florescem, são realmente incríveis.', `autor3` = 'Euza Pereira', `mensagem3` = 'Eu odeio azaleias. Elas nunca florescem como eu quero e acabam morrendo rapidamente. Total perda de dinheiro e tempo.' WHERE (`id` = '3');
UPDATE `iplants`.`produtos` SET `autor1` = 'Arnaldo Lima', `mensagem1` = 'A begônia é uma das minhas plantas favoritas! Ela é tão fácil de cuidar e sempre floresce lindamente. Eu amo ver suas flores coloridas e brilhantes, e ela traz uma sensação de calma e serenidade para minha casa. Definitivamente recomendo!', `autor2` = 'Gabriel Ribeiro', `mensagem2` = 'A begônia é uma planta bonita, mas é um pouco difícil de cuidar. É preciso estar atento à quantidade de água e luz que ela recebe. Mas se você conseguir cuidar bem dela, vale a pena.', `autor3` = 'Edinaldo Lopes', `mensagem3` = 'Eu tentei cuidar da begônia, mas ela não parece gostar do clima da minha casa. Ela acabou morrendo rapidamente, mas pelo menos eu tentei.' WHERE (`id` = '4');
UPDATE `iplants`.`produtos` SET `autor1` = 'Laiane Cardoso', `mensagem1` = 'O cosmos é uma das minhas plantas favoritas! Eu amo a aparência delicada e a cor vibrante deles. Eles são fáceis de cuidar e acrescentam uma quantidade incrível de beleza natural ao meu jardim. Eu amoooo!!!', `autor2` = 'André Santos', `mensagem2` = 'Cosmos são bonitos, mas eu prefiro outras flores em vez deles. Eles são fáceis de cuidar e adicionam um toque de cor ao meu jardim, mas não são muito duráveis.', `autor3` = 'Daniel Ricardo', `mensagem3` = 'Eu não gosto de cosmos. Eles parecem muito simples e sem graça. Além disso, eles não florescem por muito tempo.' WHERE (`id` = '5');
UPDATE `iplants`.`produtos` SET `autor1` = 'Uribe Santos', `mensagem1` = 'O cravo-rosa é uma das minhas plantas favoritas! As flores são tão bonitas e perfumadas, e eles são tão fáceis de cuidar. Eu amo ter um monte deles em meu jardim, eles realmente adicionam uma beleza única. Recomendo!', `autor2` = 'Letícia Barros', `mensagem2` = 'Eu gosto bastante do cravo-rosa. As flores são bonitas e perfumadas, e eles são fáceis de cuidar. Eles adicionam uma bela cor ao meu jardim.', `autor3` = 'Aline Matos', `mensagem3` = 'Eu tentei plantar cravos-rosas no meu jardim, mas eles acabaram morrendo muito rapidamente. Talvez não seja a planta certa para mim.' WHERE (`id` = '6');
UPDATE `iplants`.`produtos` SET `autor1` = 'Guilherme Santana', `mensagem1` = 'Eu gosto de gérberas! Elas são fáceis de cuidar e florescem por um longo período de tempo, o que as torna uma ótima opção para adicionar cor ao meu jardim. Além disso, elas vêm em várias cores diferentes, o que é legal.', `autor2` = 'Lucas Oliveira', `mensagem2` = 'A gérbera é uma das minhas plantas favoritas! Eu amo as cores vibrantes e a beleza delas. Elas são fáceis de cuidar e acrescentam uma quantidade incrível de cor.', `autor3` = 'Melissa Pontes', `mensagem3` = 'Eu não gosto de gérberas. Elas parecem flores artificiais e não são muito bonitas. Além disso, elas atraem muitas pragas.' WHERE (`id` = '7');
UPDATE `iplants`.`produtos` SET `autor1` = 'Mayara Monique', `mensagem1` = 'O lírio é uma das minhas plantas favoritas! As flores são simplesmente incríveis, e eu amo o cheiro que elas têm. Eles são fáceis de cuidar e florescem tão bem. Eu recomendaria demais ter um lírio.', `autor2` = 'Kaylany Fontes', `mensagem2` = 'Eu tentei plantar lírios em meu jardim, mas eles nunca floresceram bem. Acho que precisam de mais atenção e cuidado do que outras plantas.', `autor3` = 'Isaque Moraes', `mensagem3` = 'Eu não gosto de lírios. Eles têm um cheiro forte demais e as flores são muito grandes e desajeitadas. Não recomendo.' WHERE (`id` = '8');
UPDATE `iplants`.`produtos` SET `autor1` = 'Valdirene Rocha', `mensagem1` = 'A margarida é uma das minhas plantas favoritas! Elas são simplesmente adoráveis e eu amo como elas parecem tão felizes em qualquer lugar onde as coloco. Além disso, elas são fáceis de cuidar e florescem lindamente. Todo mundo deveria ter uma.', `autor2` = 'Luine Samara', `mensagem2` = 'Eu gosto bastante de margaridas. Elas são fáceis de cuidar, florescem por muito tempo e adicionam um toque de cor ao meu jardim. Eu recomendaria definitivamente.', `autor3` = 'Paulo Souza', `mensagem3` = 'Eu tentei cultivar margaridas, mas elas nunca floresceram como eu queria. Parece que elas precisam de muito mais sol do que eu posso oferecer.' WHERE (`id` = '9');
UPDATE `iplants`.`produtos` SET `autor1` = 'Juliana Camargo', `mensagem1` = 'A petúnia é a minha planta favorita! Eu amo as cores vibrantes e a beleza delas, além disso, elas são fáceis de cuidar e adicionam uma quantidade incrível de cor, fizeram diferença no meu casamento. Recomendo!', `autor2` = 'Mônica Santos', `mensagem2` = 'As petúnias são bonitas, mas eu prefiro outras plantas em vez delas. Elas são fáceis de cuidar e acrescentam um toque de cor ao meu casamento, mas elas não são muito chamativas.', `autor3` = 'Rafael Faria', `mensagem3` = 'Eu tentei cultivar petúnias, mas elas nunca pareceram florescer como eu esperava. Parece que elas precisam de muito mais cuidado do que eu posso oferecer.' WHERE (`id` = '10');
UPDATE `iplants`.`produtos` SET `autor1` = 'Pedro Oliveira', `mensagem1` = 'Eu gosto bastante de tulipas! Elas são lindas e acrescentam uma bela cor ao meu jardim. Elas são fáceis de cuidar, mas é preciso ter cuidado para não pisar nelas.', `autor2` = 'Eduardo Thiago', `mensagem2` = 'As tulipas são bonitas, mas eu prefiro outras flores em vez delas. Elas são fáceis de cuidar, mas não duram muito tempo e as cores são um pouco comuns.', `autor3` = 'Gabriela Moreira', `mensagem3` = 'Eu não sou fã de tulipas. Elas são muito comuns e não têm nada de especial. Além disso, elas não duram muito tempo depois de florescer.' WHERE (`id` = '11');
UPDATE `iplants`.`produtos` SET `autor1` = 'Matheus Joaquim', `mensagem1` = 'A violeta é uma das minhas plantas favoritas! Eu adoro o aroma suave e a beleza delas. Elas são fáceis de cuidar e acrescentam um toque de cor delicado e um cheiro excelente ao meu apartamento.', `autor2` = 'Fabio Yuri', `mensagem2` = 'Eu tentei cultivar violetas em meu jardim, mas elas não parecem florescer tão bem quanto eu esperava. Elas precisam de muito mais atenção do que eu posso oferecer.', `autor3` = 'Roberto Silva', `mensagem3` = 'Eu realmente não gosto de violetas. Elas têm um cheiro desagradável e não são muito bonitas. Além disso, elas são difíceis de cuidar.' WHERE (`id` = '12');


SELECT * FROM login;
SELECT * FROM cadastro;
SELECT * FROM produtos;
SELECT * FROM contato;
SELECT * FROM perfil;
SELECT * FROM cartao;
SELECT * FROM enderecos;
SELECT * FROM compras;
SELECT * FROM carrinho;