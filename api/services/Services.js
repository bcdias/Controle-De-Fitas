const dataBase = require('../models');

class Services{
    constructor(nomeDoModelo){
        this.nomeDoModelo = nomeDoModelo
    }
    async pegarTodosOsRegistros(){
        return await dataBase[this.nomeDoModelo].findAll()
    }
    async pegarUmRegistro(id){
        return await dataBase[this.nomeDoModelo].findOne({
            where: {
                id: Number(id)
            }
        })
    }
    async criarRegistro(dados){
        return await dataBase[this.nomeDoModelo].create(dados)
    }

}

module.exports = Services