const express = require('express');
const {vezDeJogar, consultar, remover, adicionar} = require('./controladores/rodadas');

const rotas = express();

rotas.get('/', vezDeJogar);

rotas.get('/consultar', consultar);

rotas.get('/remover', remover);

rotas.get('/adicionar', adicionar);

module.exports = rotas;