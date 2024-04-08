const express = require('express');

var morgan = require('morgan');

const server = express();
server.listen(3000);

//criar o arquivo de logs - listagem das informações realizadas - aqui gerar a apresentação dele aqui no terminal

// server.use(morgan('tiny'));
server.use(morgan('Método = :method | Status = :status | Url = :url'));

server.get('/', (req,res) => {
    res.send('Teste');
});