
let resultado = window.document.getElementById("res")
//let a = [1,2,5,8,10]
//a.push(num)

let cont = 0
let senha = 0
let num = prompt('Digite um valor ou 999 para encerrar')
while(senha != 999){
    senha = num
    cont = cont + 1
    soma = soma + num
    num = prompt('Digite um valor ou 999 para encerrar')
}
resultado.innerHTML = `${soma}`
