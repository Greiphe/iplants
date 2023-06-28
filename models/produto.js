const db = require('../config/db');

class Produto {
  constructor({ id, nome, preco, preco_oferta, descricao, tamanho, peso, categoria, vendido_por, foto1, foto2, off, autor1, mensagem1, autor2, mensagem2, autor3, mensagem3 }) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.preco_oferta = preco_oferta;
    this.descricao = descricao;
    this.tamanho = tamanho;
    this.peso = peso;
    this.categoria = categoria;
    this.vendido_por = vendido_por;
    this.foto1 = foto1;
    this.foto2 = foto2;
    this.off = off;
    this.autor1 = autor1;
    this.mensagem1 = mensagem1;
    this.autor2 = autor2;
    this.mensagem2 = mensagem2;
    this.autor3 = autor3;
    this.mensagem3 = mensagem3;
  }

  static async listarTodos() {
    try {
      const sql = 'SELECT * FROM produtos';
      const [rows] = await db.query(sql);
      const produtos = rows.map(row => new Produto(row));

      return produtos;
    } catch (error) {
      throw error;
    }
  }

  static async buscarPorId(id) {
    try {
      const sql = `SELECT * FROM produtos WHERE id = ${id};`;
      const [rows] = await db.query(sql);
  
      if (rows.length === 0) {
        return null; // Retorna null caso nenhum produto seja encontrado com o ID fornecido
      }
  
      const produto = new Produto(rows[0]);
      return produto;
    } catch (error) {
      throw error;
    }
  }
}
  



module.exports = Produto;

