const HomeModel = require('../models/HomeModel')

HomeModel.create({
    titulo: 'Opa',
    descricao: 'Vai dar boa'
}).then(dados => console.log(dados)).catch(e => console.log(e))

exports.paginaInicial = (req, res) => {

    res.render("index", {
        titulo: 'este será o <span style="color: red;"> titulo </span> da página',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    return
};

exports.trataPost = (req, res) => {
    // res.send("Ei,sou sua nova rota");
};