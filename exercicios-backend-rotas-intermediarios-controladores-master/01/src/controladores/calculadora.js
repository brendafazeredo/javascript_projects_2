const somar = (req, res) => {
    const {num1, num2} = req.query

    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return res.send(`${Number(num1) + Number(num2)}`);
    };
    return res.send('Não são números...');
};

const subtrair = (req, res) => {
    const {num1, num2} = req.query

    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return res.send(`${Number(num1) - Number(num2)}`);
    };
    return res.send('Não são números...');
};

const multiplicar = (req, res) => {
    const {num1, num2} = req.query

    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return res.send(`${Number(num1) * Number(num2)}`);
    };
    return res.send('Não são números...');
};

const dividir = (req, res) => {
    const {num1, num2} = req.query

    if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
        return res.send(`${Number(num1) / Number(num2)}`);
    };
    return res.send('Não são números...');
};

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
};