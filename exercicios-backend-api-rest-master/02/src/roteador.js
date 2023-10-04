const express = require('express');
const { obterConvidados, cadastrarConvidado, deletarConvidado } = require('./controladores/convidados');

const rotas = express();

rotas.get('/convidados', obterConvidados);
rotas.post('/convidados', cadastrarConvidado);
rotas.delete('/convidados/:nome', deletarConvidado);

module.exports = rotas;