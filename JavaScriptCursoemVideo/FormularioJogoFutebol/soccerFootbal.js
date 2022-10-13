let jogador = document.getElementById('nome')
let partidas = document.getElementById('partida')
let form = document.getElementById('formulario')
let msg = document.getElementById('individual')
let stat = Number(document.getElementById('status').value)
let jog = {}
let gol = []
let dados = []
let soma = 0
let cont = 0


function cadastroNome(){
    jog['nome'] = jogador.value
    dados.push(jog['nome'].value)
    let texto = document.createElement('option')
    texto.text = `Nome Jogador: ${jog['nome']}`
    form.appendChild(texto) 
}

function cadastropartida() {    
    jog['partida'] = Number(partidas.value)
    dados.push(Number(jog.value))
    let texto = document.createElement('option')
    texto.text = `Quantidade partidas: ${jog['partida']}`
    form.appendChild(texto)
    do{
        cont += 1
        let g = window.prompt(`quantos gols foram marcados na partida ${cont}`)
        gol.push(g)
        let texto1 = document.createElement('option')
        texto1.text = `Quantidade gols na partida ${cont}: ${g}`
        form.appendChild(texto1)
    }while(cont < Number(partidas.value))
    cont = 0
    jog['gols'] = gol.value
    dados.push(jog['gols'])   
    dados.push(jog['partida'])
    
      
} 
function individuais(){
    
   for(let i in dados){
        if(stat == i){
            msg.innerHTML = `${jog['nome']}`
            msg.innerHTML += `${jog['gols']}`
            

        }
   }



}

