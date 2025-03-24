//Invocando o express
let express = require('express');
//Invocando o metodo para definir rotas do Express Router()
let routes = express.Router();

//Fazendo as coisas da rota padrão(/)
routes.get('/', (req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Olá</h1>');
});

//Exportando esse modulo para ser chamado na aplicação
module.exports = routes;


