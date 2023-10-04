const validaSenha = (req, res, next) => {
    const {senha} = req.query;

    if (senha !== 'cubos123') {
        return res.status(401).json({mensagem: 'A senha está incorreta'});
    }

    next();
};

module.exports = validaSenha;