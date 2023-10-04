const imoveis = require("../dados/imoveis");

function get(req, res) {
    return res.json(imoveis);
};

function getPorId(req, res) {
    return res.json(imoveis.find(imovel => imovel.id === Number(req.params.id)));
};

module.exports = {get, getPorId};