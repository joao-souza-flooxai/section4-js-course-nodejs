//Exportando esse modulo para ser chamado na aplicação
module.exports = (app) =>{
    //Fazendo as coisas da rota /users
    app.get('/users', (req,res)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
                users:[{
                    name: "João Victor",
                    idade: "21"
                }]
        });

    });

    //Recebe uma solicitação com corpo(body) e mostra o que foi enviado
    app.post('/users/admin', (req, res)=>{
    
        res.json(req.body);

    });
};
