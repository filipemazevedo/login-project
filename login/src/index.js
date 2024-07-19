const express = require ('express');
const app = express(); //variável está recebendo a função express que vem do módulo express e essa função cria uma cópia inteira do módulo express na variável app. Essa função é a principal para o backend funcionar.
const PORT = 3000; //porta padrão


//o parâmetro req consegue ver informações de quem está enviando as coisas. ver o IP da pessoa, ver o que ele está passando.
//o res é a resposta.
app.get('/', (req,res) => {
    res.send("app GET");
})

app.post('/',(req,res) => {
    res.send("app POST");
})

app.delete('/',(req,res)=>{
    res.send("app DELETE");
})

// falar para o express ouvir o código. Essa função tem que ser a última do código, se não for, o express não funcionará.
app.listen( PORT, () => {
    //sempre vai ficar esperando alguma coisa para realizar a ação
    console.log(`App online na porta ${PORT}`);
})