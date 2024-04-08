//colocando parâmetros nas rotas

const express = require('express');

const app = express();

app.listen(3000, ()=> {
    console.log('Servidor em execução');
})

//rotas
app.get('/', (req,res) => {
    res.send('Teste1');
})

//rota com 1 parâmetro
//subdominio - ola, parametro chamado nome
app.get('/ola/:nome',(req,res) => {
    res.send('Teste2, tudo bem ' +req.params.nome+ "?");
})

app.get('/ola/:nome/:empresa',(req,res) => {
    res.send("Teste3, tudo bem "+ req.params.nome + " da empresa "+req.params.empresa+ "?");
})

app.get('/soma/:a/:b',(req,res) => {
    res.send("Resultado da soma é: " +(parseInt(req.params.a)+parseInt(req.params.b)));
})