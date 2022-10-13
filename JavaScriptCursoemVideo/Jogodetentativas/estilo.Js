//decalara variavel global para valor maximo e minimo
let max = 10
let min = 0
function verificar(){    
    let msg = window.document.getElementById("msg") 
    let resposta = window.document.getElementById("res") 
    
    let cont = 0
    //condiçao do jogo
    do{
        // verificaçao do numero aleatorio, atribuiçao para usuario, atribuiçao caixa de msg
        let computador = getRandomInt(max,min) // chama funçao random e atribui o valor para o computador
        let usuario = Number(window.document.getElementById("usuario").value)
        //Saida resposta dos valores escolhidos por computador e usuario
        msg.innerHTML = `O valor escolhido pelo computador e igual a: ${computador}</br>`
        msg.innerHTML += `O valor escolhido pelo usuario e igual a: ${usuario}</br>`  
        if(computador != usuario){
        resposta.innerHTML = `Voce ERROu!!! Digite outro numero e aperte verificar` 
        }      
        cont ++      
    }while(computador == usuario)
    resposta.innerHTML = `Parabens, voce venceu!!! Voce conseguiu realizar em ${cont} tentativas`
}

function getRandomInt(max,min){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}