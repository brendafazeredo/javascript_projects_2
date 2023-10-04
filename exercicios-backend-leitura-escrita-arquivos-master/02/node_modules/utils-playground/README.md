## A simple library to practice asynchronous programming

# Usage

```javascript
const { getCityFromZipcode, getStateFromZipcode } = require("utils-playground")

buscarEndereco("01001000")
    .then((a) => console.log(a))
    .catch((a) => console.log(a.message))

// {
//   "cep": "01001-000",
//   "logradouro": "Praça da Sé",
//   "complemento": "lado ímpar",
//   "bairro": "Sé",
//   "localidade": "São Paulo",
//   "uf": "SP",
//   "ibge": "3550308",
//   "gia": "1004",
//   "ddd": "11",
//   "siafi": "7107"
// }

getCityFromZipcode("01001000")
    .then((a) => console.log(a))
    .catch((a) => console.log(a.message))

// São Paulo

getStateFromZipcode("01001000")
    .then((a) => console.log(a))
    .catch((a) => console.log(a.message))

// SP

getPackageDescriptionNpm("express")
    .then((a) => console.log(a))
    .catch((a) => console.log(a.message))

// Return express package description

listarPokemons(2)
    .then((a) => console.log(a))
    .catch((a) => console.log(a.message))

// Return list of Pokemons
// argument page is optional

detalharPokemon(1)
    .then((a) => console.log(a))
    .catch((a) => console.log(a.message))

// returns the information of the bulbasaur pokemon

detalharPokemon("bulbasaur")
    .then((a) => console.log(a))
    .catch((a) => console.log(a.message))

// returns the information of the bulbasaur pokemon
```
