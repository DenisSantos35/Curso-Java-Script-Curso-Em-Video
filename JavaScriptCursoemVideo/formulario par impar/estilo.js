let valor = document.getElementById('valor')
let form = document.getElementById('formulario')
let msg = document.getElementById('res')
let par = []
let impar = []
let numeros = []
let item
let item2
msg.innerHTML = ''
function pares(n){
    if(n % 2 == 0){
        return true
    }
    else{
        return false
    }

}

function cadastrar(){
    if(pares(valor.value) == true){
        par.push(Number(valor.value))
        item = document.createElement('option')
        item.text = `Numero ${Number(valor.value)} cadastrado!`
        form.appendChild(item)   
        msg.innerHTML = `numero ${valor.value} e par`     
    }else{
        impar.push(Number(valor.value))
        item2 = document.createElement('option')
        item2.text = `Numero ${Number(valor.value)} cadastrado!`
        form.appendChild(item2)
        msg.innerHTML = `numero ${valor.value} e impar` 
    }
    numeros.push(par)
    numeros.push(impar)
    valor.value = ''
    valor.focus()
}

function verificar(){
    msg.innerHTML = ''
    msg.innerHTML += `<p>Os valores Pares digitados foram: ${numeros[0]}</p>`
    msg.innerHTML += `Os valores Impares digitados foram: ${numeros[1]}</p> `

}

