function calcular(){
    let nascimento = Number(window.document.getElementById("nasci").value)
    let dia = new Date()
    let ano = dia.getFullYear()
    let result = window.document.getElementById("res")
    let result2 = window.document.getElementById("res2")
    let idade = ano - nascimento
    

    result.innerHTML = `Estamos no ano de ${ano} `
    if(idade < 18){
        let calculo = 18 - idade
        result2.innerHTML = `Você não tem idade para se alistar. Faltam ${calculo} para o alistamento`
    }else if(idade == 18){
        result2.innerHTML = `Você ja pode se alistar, pois ja tem idade de ${idade} anos`
    }else if(idade > 18){
        let calculo = idade - 18
        result2.innerHTML = `Você passou ${calculo} anos da idade de se alistar`
    }


}