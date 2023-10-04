const express = require('express');
const app = express();

let minutos = 0;
let segundos = 0;
let intervalo;

function formatarTempo(min, seg) {
  const formatoMin = min.toString().padStart(2, '0');
  const formatoSeg = seg.toString().padStart(2, '0');
  return `${formatoMin} minutos e ${formatoSeg} segundos`;
}

app.get('/', (req, res) => {
  res.send(`Tempo atual do cronômetro: ${formatarTempo(minutos, segundos)}\n`);
});

app.get('/iniciar', (req, res) => {
  if (!intervalo) {
    intervalo = setInterval(() => {
      segundos++;
      if (segundos === 60) {
        segundos = 0;
        minutos++;
      }
    }, 1000);
    res.send('Cronômetro iniciado!\n');
  }
});

app.get('/pausar', (req, res) => {
  if (intervalo) {
    clearInterval(intervalo);
    intervalo = undefined;
    res.send('Cronômetro pausado!\n');
  }
});

app.get('/continuar', (req, res) => {
  if (!intervalo) {
    intervalo = setInterval(() => {
      segundos++;
      if (segundos === 60) {
        segundos = 0;
        minutos++;
      }
    }, 1000);
    res.send('Cronômetro continuando!\n');
  }
});

app.get('/zerar', (req, res) => {
  minutos = 0;
  segundos = 0;
  if (intervalo) {
    clearInterval(intervalo);
    intervalo = undefined;
  }
  res.send('Cronômetro zerado!\n');
});

const porta = 8000;

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}/`);
});