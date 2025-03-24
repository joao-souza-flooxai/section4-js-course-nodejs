//Aqui, estamos importando o módulo http, que permite criar um servidor web em Node.js.
const http = require('http');
/*
O método http.createServer() cria um servidor HTTP e recebe uma callback function que será chamada toda vez que houver uma requisição.
Essa função recebe dois parâmetros:
    req (Request): Contém os dados da requisição, como URL, método (GET, POST, etc.), headers, etc.
    res (Response): Responsável por enviar uma resposta ao cliente.
*/
let server = http.createServer((req,res)=>{
    console.log('URL:', req.url);
    console.log('METHOD:', req.method);
    res.end("Ok");
});

server.listen(3000, '127.0.0.1', ()=>{
    console.log("servidor rodando");
});