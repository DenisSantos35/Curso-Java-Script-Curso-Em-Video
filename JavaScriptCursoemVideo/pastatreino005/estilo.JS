function verificar(){
    //declaraçao de variaveis
    var liga = window.document.getElementsByName("txtliga")
    var personagem = window.document.getElementsByName("txtperson")
    var res = window.document.getElementById("res")
    var img = window.document.getElementById("imagem")
    var n_personagem = ' '
    var n_liga = ' '
    //condiçoes para selecionar personagem
    if(liga[0].checked){
        n_liga = 'MARVEL'
        if(personagem[0].checked){
            n_personagem = 'CAPITÃO AMERICA'
            res.innerHTML = `Liga escolhida ${n_liga} e personagem escolhido ${n_personagem}` 
            img.src = 'capitaoamerica.png'               
        }else if(personagem[1].checked){
            n_personagem = 'HOMEM DE FERRO'
            res.innerHTML = `Liga escolhida ${n_liga} e personagem escolhido ${n_personagem}`
            img.src = 'homemdeferro.png'
        }else{
            res.innerHTML = '[erro] Personagem nao pertense a liga'
            img.src = 'erro.png'
        } 
    }else if(liga[1].checked){
        n_liga = 'DC'
        if(personagem[2].checked){
            n_personagem = 'BATIMAM'
            res.innerHTML = `Liga escolhida ${n_liga} e personagem escolhido ${n_personagem}`
            img.src = 'batman.png'
        }else if(personagem[3].checked){
            n_personagem = 'SUPER MAN'
            res.innerHTML = `Liga escolhida ${n_liga} e personagem escolhido ${n_personagem}`
            img.src = 'superman.png'
        }else{
            res.innerHTML = '[erro] Personagem nao pertence a liga, tente novamente'
            img.src = 'erro.png'
        }          
    }
     
  
}
function entrou(){
    var entrou = window.document.getElementById("foto")
    entrou.style.background = 'red'
}
function saiu(){
    var saiu = window.document.getElementById('foto')
    saiu.style.background = 'rgb(102, 190, 219)'
}