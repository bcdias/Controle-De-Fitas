const Router = require('express')
const FitasController = require('../controller/fitasController.js')


const router = Router()
    .get('/fitas', FitasController.listarFitas)
    .get('/fitas/:id', FitasController.pegarUmaFita)
    .post('/fitas', FitasController.cadastrarFita)
    .put('/fitas/:id', FitasController.atualizarFita)
    .delete('/fitas/:id', FitasController.deletarFita)

module.exports = router