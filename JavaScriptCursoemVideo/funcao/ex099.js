function aleatorio(max = 10){
    return Math.floor(Math.random() * max + 1 )
    
}

function sorteio(lst){
    
    for (let i=0; i<5; i++){
        let n1 = aleatorio()
        lst.push(n1)
    } 
    console.log(`Sorteando 5 valores da lista: ${lst} Pronto!`)  
    
}
function somapar(lst){
    let soma = 0    
    for(let i in lst){ //o i recebe o indice da lista
        if (lst[i] % 2 == 0){ //lst[i] recebe o valor dentro do indice atual
            soma += lst[i]
        }

    }
    console.log(`Somando os pares de ${lst} temos: ${soma}`)

}

//programa principal
let numeros = []
sorteio(numeros)
somapar(numeros)

