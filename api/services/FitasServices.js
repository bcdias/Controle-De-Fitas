const Services = require('./Services');
const dataBase = require('../models');

class FitasServices extends Services {
    constructor() {
        super('Fitas')
    }

    async pegarTodosOsRegistros() {
        return await dataBase[this.nomeDoModelo]
            .scope('exclui')
            .findAll()
    }
    async pegarUmRegistro(id){
        return await dataBase[this.nomeDoModelo]
            .scope('exclui')
            .findOne({
            where: {
                id: Number(id)
            }
        })
    }
}

module.exports = FitasServices