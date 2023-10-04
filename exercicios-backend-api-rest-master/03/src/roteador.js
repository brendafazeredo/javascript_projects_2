const express = require('express');
const {
    obterLivros,
    obterLivroPorId,
    cadastrarLivro,
    alterarLivro,
    alterarParteDoLivro,
    excluirLivro
} = require('./controladores/livros');

const rotas = express();

rotas.get("/livros", obterLivros);
rotas.get("/livros/:id", obterLivroPorId);
rotas.post("/livros", cadastrarLivro);
rotas.put("/livros/:id", alterarLivro);
rotas.patch("/livros/:id", alterarParteDoLivro);
rotas.delete("/livros/:id", excluirLivro);

module.exports = rotas;