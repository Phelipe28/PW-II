const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index", {
        mensagem: "",
        mostraImagem: ""
    });
});


app.post("/calcular", function (req, res) { 
    let a = Number(req.body.ladoA);
    let b = Number(req.body.ladoB);
    let c = Number(req.body.ladoC);

    let imagemEscolhida = "";
    let mensagem = "";

    if(a + b <= c || b + c <= a || a + c <= b){
        mensagem = "Os valores não formam um triângulo";

    } else if (a == b && b == c) {
        mensagem = "Triângulo equilátero";
        imagemEscolhida = "img1";

    } else if (a == b || a == c || b == c) {
        mensagem = "Triângulo isósceles";
        imagemEscolhida = "img2";

    } else{
        mensagem = "Triângulo escaleno";
        imagemEscolhida = "img3";
    }

    res.render('index', {
        mensagem,
        mostraImagem: imagemEscolhida
    });
});

app.listen(8081, () =>
    console.log("Servidor executando na porta 8081")
);