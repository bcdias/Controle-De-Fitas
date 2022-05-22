const express = require('express')
const router =require('./routes')

const app = express();
const port = 3000;


router(app)

app.listen(3000, () =>{
    console.log(`API rodando em http://localhost:${port}`)
})