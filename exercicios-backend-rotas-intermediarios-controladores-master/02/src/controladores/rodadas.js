const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let jogadorDaVez = 0;

const vezDeJogar = (req, res) => {
    const nomeJogador = jogadores[jogadorDaVez];

    jogadorDaVez++;

    if (jogadorDaVez >= jogadores.length) {
        jogadorDaVez = 0;
    };

    return res.send(`É a vez de ${nomeJogador} jogar!`);
};

const consultar = (req, res) => {
    return res.send(jogadores);
};

const remover = (req, res) => {
    const indiceDoArray = Number(req.query.indice);

    if (indiceDoArray >= jogadores.length) {
        return res.send(`Não existe jogador no índice informado (${indiceDoArray}) para ser removido!`)
    };

    jogadores.splice(indiceDoArray, 1);

    return res.send(jogadores);
};

const adicionar = (req, res) => {
    let nomeJogador = req.query.nome;

    const indiceDoArray = Number(req.query.indice);

    nomeJogador = `${nomeJogador[0].toUpperCase()}${nomeJogador.slice(1).toLowerCase()}`;

    if (isNaN(indiceDoArray)) {
        jogadores.push(nomeJogador);
        return res.send(jogadores);
    };

    if (indiceDoArray >= jogadores.length) {
        return res.send(`O índice informado (${indiceDoArray}) não existe no array. Novo jogador não adicionado!`);
    };

    jogadores.splice(indiceDoArray, 0, nomeJogador);
    return res.send(jogadores);
};

module.exports = {
    vezDeJogar,
    consultar,
    remover,
    adicionar
};