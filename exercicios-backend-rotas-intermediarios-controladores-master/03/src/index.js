const express = require("express");
const roteador = require("./roteador");

const app = express();

app.use(roteador);

app.listen(8000);