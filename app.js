// Carregando Modulos
const express = require ('express')
const handlebars = require ('express-handlebars')
const bodyParse = require ('body-parser')

const app = express()
//Configurações
    // Body parser
        app.use(bodyParse.urlencoded({extended :true}))
        app.use(bodyParse.json())
    //HandleBar
        app.engine('handlebars', handlebars({defaultLayout:'main'}))
        app.set('view engine' , 'handlebars')
// Rotas 
    
//Outros
const PORT = 8081

app.listen(PORT, ()  => {
    console.log("Servidor rodando")
})    