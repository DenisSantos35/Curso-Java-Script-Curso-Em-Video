function verificar(){
    let nacimento = Number(window.document.getElementById("nasc").value)
    let dia = new Date()
    let ano = dia.getFullYear()
    let result = window.document.querySelector("div#res")
    let res = window.document.querySelector("div#res1")

    let idade = ano - nacimento

    result.innerHTML = `De acordo com a idade do atleta a sua categoria é: `
    if(idade <= 9){
        res.innerHTML = `MIRIM`
    }else if(idade <= 14){
        res.innerHTML = `INFANTIL`
    }else if(idade <= 19){
        res.innerHTML = `JUNIOR`
    }else if(idade <= 20){
        res.innerHTML = `SENIOR`
    }else{
        res.innerHTML = `MASTER`
    }
}