let vetor = []
let aux = 5
let aux2 = 3
for(let i = 0; i<10; i++){
    vetor[i] = aux
    aux = aux2
    aux2 = vetor[i]
}
for(let i = 0; i<10; i++){
    console.log(vetor[i])
}

console.log(x)
var readline = require('readline');
var resp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Qual módulo pra ler dados no node.js?\n", function(answer) {
    var resp = answer;
    console.log("\nSua resposta '" + resp + "' foi grava com sucesso numa variável inútil");
    leitor.close();
});