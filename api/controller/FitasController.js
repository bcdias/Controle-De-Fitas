const { FitasServices } = require('../services');
const fitasServices = new FitasServices();

class FitasController{

    static async listarFitas(req, res){
        try{
            const todasFitas = await fitasServices.pegarTodosOsRegistros();
            res.status(200).json(todasFitas);
        }catch(error){
            res.status(500).json(error.message);
        }
    }
    static async pegarUmaFita(req, res){
        const {id} = req.params
        try{
            const umaFita = await fitasServices.pegarUmRegistro(id);
            res.status(200).json(umaFita);
        }catch(error){
            res.status(401).json(error.message);
        }
    }
    static async cadastrarFita(req, res){
        const dados = req.body;
        try{
            const novaFitaCadastrada = await fitasServices.criarRegistro(dados);
            res.status(200).json(novaFitaCadastrada)
        }catch(error){
            res.status(500).json(error.message)
        }
    }
    static async atualizarFita(req, res){
        const { id } = req.params
        const dados = req.body
        try{
            await fitasServices.atualizarRegistro(dados, id)
            const fitaAtualizada = await fitasServices.pegarUmRegistro(id)
            res.status(200).json({Mensagem:"Os dados foram atualizados", fitaAtualizada})
        }catch(error){
            res.status(500).json(error.message)
        }
    }
    static async deletarFita(req, res){
        const { id } = req.params
        try{
            await fitasServices.apagarRegistro(id)
            res.status(200).json({Mensagem: `A fita de id ${id} foi excluída com sucesso`})

        }catch(error){
            res.status(500).json(error.message)
        }
    }
}

module.exports = FitasController