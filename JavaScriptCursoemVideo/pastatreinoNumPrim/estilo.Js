function verificar(){
    //create object
    let numero = Number(window.document.getElementById("num").value)
    let msg = window.document.getElementById("res")
    //create element
    let img = window.document.createElement('img') //crear 
    img.setAttribute('id', 'foto')

    let cont = 0
    for(let i = 1; i <= numero; i++){
        if(numero % i == 0){
            cont++
        }
    }
    if(cont == 2){
        msg.innerHTML = `O numero ${numero} e um numero primo</br/>`
        img.setAttribute('src', 'primo.png')
        document.body.style.background = 'rgb(43, 255, 0)'
    }else{
        msg.innerHTML = `O numero ${numero} não e um numero primo</br/>`
        img.setAttribute('src', 'naoprimo.png')
        document.body.style.background = 'rgb(43, 0, 0)'
    }

    msg.appendChild(img)

}