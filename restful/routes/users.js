//Invocando o express
let express = require('express');
//Invocando o metodo para definir rotas do Express Router()
let routes = express.Router();

//Fazendo as coisas da rota /users
routes.get('/', (req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
            users:[{
                name: "João Victor",
                idade: "21"
            }]
    });

});

routes.get('/admin', (req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
            users:[{
               
            }]
    });

});

//Exportando esse modulo para ser chamado na aplicação
module.exports = routes;
