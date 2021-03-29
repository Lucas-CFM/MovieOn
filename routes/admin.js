const express = require('express')
const router = express.Router()

router.get('/' , (req , res) =>{
    res.send("olaa")
})

router.get('/lista', (req , res)=>{
    res.send("Lista de Filmes")
})

module.exports = router 