const express = require('express')
const fitas = require('./fitasRoute.js')



module.exports = app => {
    
    app.use(
        express.json(),
        fitas)
}