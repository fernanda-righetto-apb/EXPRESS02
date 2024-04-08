// declaraçãp padrão pra criar server dentro do express

const express = require('express');

const server = express();

server.listen(3000);

//inserindo midle ware - códigos que coloca entre request e response
//next - atualizar página de saída
server.use((req, res,next) => {
    console.log('Teste');
    next();
})

server.use((req,res,next) => {
    req.requestTime = Date.now();
    next();
})

// //ensinando rota pro servidor = get()
server.get('/', (req, res) => {
    console.log(req.requestTime);
    //send - enviar a resposta
    res.send('<h1>Teste</h1>');
})

