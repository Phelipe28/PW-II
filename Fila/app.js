const express = require('express');
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


    let filaAtual= [];
    let chamando = [];


 app.get('/', (req, res) => {
      res.render('index', {
        filaAtual: filaAtual,
        chamando: chamando,
      });
    });

     let numeroSenha = 0;
  
  app.post('/gerarSenha',(req, res) => {
       
        numeroSenha++;

        let novaSenha = 'Senha#' + numeroSenha;

        filaAtual.push(novaSenha);


        res.render('index', {
          filaAtual: filaAtual,
          chamando: chamando
        });
    });

    app.post('/proximo',(req, res) =>{
      if(filaAtual.length > 0){
          let senhaAtendida  = filaAtual.shift();
          chamando = ['Chamando: ' + senhaAtendida];
        }else{
          chamando = ['chamando: nenhuma senha na fila']
        }

        res.render('index', {
          filaAtual: filaAtual,
          chamando: chamando
        });
    });


app.listen(8081, () => 
    console.log("Servidor executando na porta 8081")
);