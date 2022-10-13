function fotografia(){
    var fts = Number(window.document.querySelector("input#ft").value)
    var img = window.document.querySelector("img#imagem")
    var msg1 = window.document.querySelector("div#msg")

    msg1.innerHTML = `Voce escolheu a foto numero ${fts}</br>`
    if(fts == 0){
        img.src = 'fototarde.png'
        msg1.innerHTML += `Foto de capa</br>`
        }       
        else if(fts == 1){
            img.src = 'foto1.png'
            document.body.style.background = '#F5DEB3'
            }else if(fts == 2 ){
                img.src = 'foto2.png'
                document.body.style.background = '#00FF00'
                }else if(fts == 3){
                    document.body.style.background = '#40E0D0'
                    img.src = 'foto3.png'
                    }else if(fts == 4){
                        img.src = 'foto4.png'
                        document.body.style.background = '#BC8F8F'
                        }else{
                            img.src = ' '
                            msg1.innerHTML = `Voce escolheu foto numero ${fts} nao a fotos cadastradas no momento`
                        }
}

function carregar(){
    fotografia()
}
