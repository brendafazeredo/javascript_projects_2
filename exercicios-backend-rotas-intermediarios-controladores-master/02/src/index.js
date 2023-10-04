const express = require('express');
const rotas = require('./roteador');

const app = express();

app.use(rotas);

app.listen(8000);