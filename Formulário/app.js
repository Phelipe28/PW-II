const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

// Para ler dados de formulários (POST)
app.use(express.urlencoded({ extended: true }));

// Rota principal: Renderiza o formulário
app.get('/', (req, res) => {
    res.render('index', { 
        nome: null, 
        email: null,
        nascimento:null,
        estado:null,
        genero:null,
        estadoCivil:null,
        cep:null,  
        logra:null, 
        numero:null,
        cidade:null,
        complemento:null,
        cpf:null,
        rg:null,
    });
});


// Rota POST: Recebe os dados enviados
app.post('/enviarContato', (req, res) => {
    const nome = req.body.nome  
    const email = req.body.email    
    const nascimento = req.body.nascimento
    const estado = req.body.estado
    const genero = req.body.genero
    const estadoCivil = req.body.estadoCivil
    const cep = req.body.cep
    const logra = req.body.logra
    const numero = req.body.numero
    const cidade = req.body.cidade
    const complemento = req.body.complemento
    const cpf = req.body.cpf
    const rg = req.body.rg
    
    
    res.render('index',{
            nome:nome,
            email:email,
            nascimento:nascimento,
            estado:estado,        
            genero:genero,
            estadoCivil:estadoCivil,
            cep:cep,
            logra:logra,
            numero:numero,
            cidade:cidade,
            complemento:complemento,
            cpf:cpf,
            rg:rg,
        }        
    );
});

app.listen(8081, () => 
    console.log("Servidor executando na porta 8081")
);