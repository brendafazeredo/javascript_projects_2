const axios = require('axios');

const getCityFromZipcode = async (zipcode) => {
    const city = new Promise(async (resolve, reject) => {
        try {
            if (!zipcode) {
                throw new Error('O Cep é obrigatório');
            }

            const { data: { localidade } } = await axios.get(`https://viacep.com.br/ws/${zipcode.replace(/[^0-9]/g, '')}/json/`);

            return resolve(localidade);
        } catch (error) {
            return reject(error);
        }
    });

    return city;
}

const getStateFromZipcode = async (zipcode) => {
    const city = new Promise(async (resolve, reject) => {
        try {
            if (!zipcode) {
                throw new Error('O Cep é obrigatório');
            }

            const { data: { uf } } = await axios.get(`https://viacep.com.br/ws/${zipcode.replace(/[^0-9]/g, '')}/json/`);

            return resolve(uf);
        } catch (error) {
            return reject(error);
        }
    });

    return city;
}

const getPackageDescriptionNpm = async (package) => {
    const description = new Promise(async (resolve, reject) => {
        try {
            if (!package) {
                throw new Error('O nome do pacote é obrigatório');
            }

            const { data: { description } } = await axios.get(`https://registry.npmjs.org/${package}`);

            return resolve(description);
        } catch (error) {
            return reject(error);
        }
    });

    return description;
}

const listarPokemons = async (pagina) => {
    const pokemons = new Promise(async (resolve, reject) => {
        try {
            const offset = pagina || pagina > 1 ? (pagina - 1) * 10 : 0;
            const pg = pagina ?? 1;

            const { data: { results } } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=10`);

            return resolve({
                pagina: pg,
                results
            });
        } catch (error) {
            return reject(error);
        }
    });

    return pokemons;
}

const detalharPokemon = async (idOuNome) => {
    const pokemon = new Promise(async (resolve, reject) => {
        try {
            if (!idOuNome) {
                throw new Error('O id ou o nome do pokemon é obrigatório');
            }

            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idOuNome}`);

            return resolve(data);
        } catch (error) {
            return reject(error);
        }
    });

    return pokemon;
}

const buscarEndereco = async (zipcode) => {
    const address = new Promise(async (resolve, reject) => {
        try {
            if (!zipcode) {
                throw new Error('O Cep é obrigatório');
            }

            const { data } = await axios.get(`https://viacep.com.br/ws/${zipcode.replace(/[^0-9]/g, '')}/json/`);

            return resolve(data);
        } catch (error) {
            return reject(error);
        }
    });

    return address;
}

module.exports = {
    getCityFromZipcode,
    getStateFromZipcode,
    getPackageDescriptionNpm,
    listarPokemons,
    detalharPokemon,
    buscarEndereco
}