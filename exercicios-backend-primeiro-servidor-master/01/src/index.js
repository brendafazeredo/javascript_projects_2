const express = require('express');
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let indiceAtual = 0;

app.get('/', (req, res) => {
  if (indiceAtual >= jogadores.length) {
    indiceAtual = 0;
  }

  const nomeDoJogador = jogadores[indiceAtual];

  indiceAtual++;

  res.send(`É a vez de ${nomeDoJogador} jogar!\n`);
});

const porta = 3000;

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}/`);
});