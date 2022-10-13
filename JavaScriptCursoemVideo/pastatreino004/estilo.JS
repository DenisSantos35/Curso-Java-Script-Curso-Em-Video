function verificar(){
    //declaraçao de variavel
    var res = window.document.querySelector("div#res")
    var doenca = window.document.getElementsByName("txtdo")
    

    if(doenca[0].checked){
        res.innerHTML = `Voce foi diagnosticado com Dengue`
        }else if(doenca[1].checked){
            res.innerHTML = `Voce foi diagnosticado com Zika Virus`
            }else if(doenca[2].checked){
                res.innerHTML = `Voce foi diagnosticado com Chikungunya`
                }
}    