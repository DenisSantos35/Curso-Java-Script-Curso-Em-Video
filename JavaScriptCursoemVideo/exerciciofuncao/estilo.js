//declara todos os documentos
let num = document.getElementById('numero')
let lista = document.getElementById('flista')
let msg = document.getElementById('res')
let valores = []
//criou funçao para analizar se o numero e maior que 1 e menor que 100
function isNumero(n){ //o n vai ser o valor escrito pelo usuario
    if(Number(n) >= 1 && Number(n) <= 100 ){ 
        return true //
    }else{
        return false
    }

}

//funcao para ver se o valor esta na lista
function inLista(n, li){ // pega o valor digitado pelo usuario e coloca em n, pega lista valores e coloca em n1
    if (li.indexOf(n) != -1 ){ //verifica se o valor digitado pelo usuario esta dentro da lista
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(Number(num.value)) && !inLista(Number(num.value), valores)){
       valores.push(Number(num.value))
       let opt = document.createElement('option')
       opt.text = `Valor adicionado: ${Number(num.value)}`
       lista.appendChild(opt)
       msg.innerHTML = ''
      
    }else{
        window.alert(`Valor inválido ou já encontrado na lista.`)
    }
    num.value = ''
    num.focus()
    
}

function finalizar(){
    if (valores.length == 0){
        window.alert(`Adicione valores antes de finalizar`)
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        msg.innerHTML = ''
        msg.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>  `
        msg.innerHTML += `<p>O maior valor na lista cadastrada é ${maior} </p>`
        msg.innerHTML += `<p>O menor valor na lista cadastrada é ${menor} </p>`
        msg.innerHTML += `<p>A soma de todos os valores e igual a ${soma} </p>`
        msg.innerHTML += `<p>A média de todos os valores e  ${media} </p>`
    }
    
}