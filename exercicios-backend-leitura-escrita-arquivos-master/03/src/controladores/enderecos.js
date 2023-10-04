const {buscarEndereco} = require('utils-playground');
const {readFile, writeFile} = require('fs/promises');

const gerenciarEndereco = async (req, res) => {
    const {cep} = req.params;

    try {
        const enderecos = JSON.parse(await readFile('./src/enderecos.json'));

        let endereco = enderecos.find(endereco => endereco.cep.replace('-', '') === cep);

        if (endereco) {
            return res.json(endereco);
        };

        endereco = await buscarEndereco(cep);

        if (endereco.erro) {
            return res.status(400).json({mensagem: 'Endereço não encontrado.'});
        };

        enderecos.push(endereco);

        await writeFile('./src/enderecos.json', JSON.stringify(enderecos));

        return res.json(endereco);
    } catch (error) {
        return res.status(400).json({mensagem: error.message});
    };
};

module.exports = {
    gerenciarEndereco
};