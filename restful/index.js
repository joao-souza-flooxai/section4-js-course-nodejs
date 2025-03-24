//Aqui, estamos importando o módulo do Express(npm), que permite criar um servidor web em Node.js.
const express = require('express');
//Definindo as rotas da aplicação
let routesIndex = require('./routes/index');
let routesUsers = require('./routes/users');
//Instanciando o modulo do servidor 
let app = express();

//Descrevendo as rotas ao servidor
app.use(routesIndex);
app.use('/users', routesUsers);

app.listen(3000, '127.0.0.1', ()=>{
    console.log("servidor rodando");
});