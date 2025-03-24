//Aqui, estamos importando o módulo do Express(npm), que permite criar um servidor web em Node.js.
const express = require('express');
//Usando o consign(npm) para gerenciar rotas
const consign = require('consign');
//Usando o bodyParser(npm) para gerenciar rotas
const bodyParser = require('body-parser');
let app = express();

//Definindo que as solicitações que o servidor receber e tiver corpo(body) sejam covertidas em json
app.use(bodyParser.json());
//Sugestão de configurar as solicitações para UrlEncoded
app.use(bodyParser.urlencoded({extended: false}));

//Colocando todas as rotas definidas em "routes" na instacia do servidor Express(app)
consign().include('routes').into(app);


app.listen(3000, '127.0.0.1', ()=>{
    console.log("servidor rodando");
});