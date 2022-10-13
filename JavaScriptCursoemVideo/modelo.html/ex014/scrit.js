function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    //var hora = data.getHours()
    hora = 19
    msg.innerHTML = `Agora são ${hora} horas </br>`
    
    if(0 <= hora && hora < 12){
        //bom dia
        msg.innerHTML += 'Bom Dia'
        img.src = 'fotomanha-png.png'
        document.body.style.background= '#BDB76B'
        }else if(12<= hora && hora <= 18){
            //boa Tarde
            msg.innerHTML += 'Boa Tarde'
            img.src = 'fototarde.png'
            document.body.style.background = '#CD853F'
            }else{
                //Boa Noite
                msg.innerHTML += 'Boa Noite'
                img.src = 'fotonoite-png.png'
                document.body.style.background = '#708090'
            }



}

