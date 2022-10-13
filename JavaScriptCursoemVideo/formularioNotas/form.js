let aluno = document.getElementById('aluno')
let nota1 = document.getElementById('n1')
let nota2 = document.getElementById('n2')
let formulario = document.getElementById('form')
let selecionar = document.getElementById('corres')
let msg = document.getElementById('res')
let vetoraluno = []
let vetorn1 = []
let vetorn2 = []
let media = []
let item
let item1
let item2
let soma1 = 0
let soma2 = 0

msg.innerHTML = ""
function validacao(n1,n2){
    if((n1<0 || n1 > 10) || (n2<0 || n2>10)){
        return false
    }else{
        return true
    }
}

function cadastrar(){
    if((aluno.value == 0) || (Number(nota1.value == 0)) || (Number(nota2.value == 0))){
        window.alert(`[ERRO!!!]. PREENCHA OS CAMPOS EM BRANCO CORRETAMENTE.`)
    }else if(validacao(Number(nota1.value),Number(nota2.value)) == true){
        vetoraluno.push(aluno.value)
        vetorn1.push(Number(nota1.value))
        vetorn2.push(Number(nota2.value))
        media.push((Number(nota1.value)+Number(nota2.value))/2)
        item = document.createElement('option')
        item.text = `Aluno: ${aluno.value}`
        formulario.appendChild(item)
        item1 = document.createElement('option')
        item1.text = `Nota 1: ${nota1.value}`
        formulario.appendChild(item1)
        item2 = document.createElement('option')
        item2.text = `Nota 2: ${nota2.value}`
        formulario.appendChild(item2)
    }else{
        window.alert(`[ERRO] NOTA INVALIDA. DIGITE A NOTA CORRETA`)
    }
    aluno.value = ""
    aluno.focus()
    nota1.value = ""
    nota1.focus()
    nota2.value = ""
    nota2.focus()
    

}
function dados(){
    msg.innerHTML = ""
    if (Number(selecionar.value) < vetoraluno.length){
        msg.innerHTML += `<p>Nome: ${vetoraluno[Number(selecionar.value)]},  Media: ${media[Number(selecionar.value)]}</p>`
    }else{
        msg.innerHTML += `[ERRO]! NÃO HÁ CADASTRO PARA ESSE VALOR. TENTE NOVAMENTE`
    }


   
    
        
  

}