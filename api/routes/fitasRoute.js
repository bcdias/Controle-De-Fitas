const Router = require('express')
const FitasController = require('../controller/fitasController.js')


const router = Router()
    .get('/fitas', FitasController.listarFitas)
    .get('/fitas/:id', FitasController.pegarUmaFita)
    .post('/fitas', FitasController.cadastrarFita)

module.exports = router