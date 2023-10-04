const express = require('express');
const {somar, subtrair, multiplicar, dividir} = require('./controladores/calculadora')

const rotas = express();

rotas.get('/somar', somar);
rotas.get('/subtrair', subtrair);
rotas.get('/multiplicar', multiplicar);
rotas.get('/dividir', dividir);

module.exports = rotas;

