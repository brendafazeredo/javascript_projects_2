const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];

const obterConvidados = (req, res) => {
    if (!req.query.nome) {
        return res.json(convidados);
    };

    const convidadoBuscado = convidados.find(convidado => convidado === req.query.nome);
    
    if (!convidadoBuscado) {
        return res.status(404).json({mensagem: "O convidado buscado não está presente na lista."});
    };

    return res.json({mensagem: "Convidado presente na lista."});
};

const cadastrarConvidado = (req, res) => {
    const {nome} = req.body;

    if (!nome) {
        return res.status(400).json({mensagem: "O campo nome deve ser mandando no body da requisição"});
    };

    const convidadoExistente = convidados.find(convidado => convidado === nome);

    if (convidadoExistente) {
        return res.status(400).json({
            mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."
        });
    };
    
    convidados.push(nome);

    return res.status(201).json({mensagem: "Convidado adicionado."});
};

const deletarConvidado = (req, res) => {
    const {nome} = req.params;

    const indiceConvidadoExistente = convidados.findIndex(convidado => convidado === nome);

    if (indiceConvidadoExistente < 0) {
        return res.status(404).json({mensagem: "O convidado a ser removido não está presente na lista."});
    };

    convidados.splice(indiceConvidadoExistente, 1);

    return res.json({mensagem: "O convidado foi removido."});
};

module.exports = {
    obterConvidados,
    cadastrarConvidado,
    deletarConvidado
};