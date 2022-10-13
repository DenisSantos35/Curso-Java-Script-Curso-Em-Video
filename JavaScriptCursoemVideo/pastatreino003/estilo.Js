function verificar(){
    //declaraçao de variaveis
    var nota1 = Number(window.document.getElementById("txtn1").value)
    var nota2 = Number(window.document.getElementById("txtn2").value)
    var faltas = Number(window.document.getElementById("txtfalt").value)
    var media
    var res = window.document.getElementById("res")

    //calculo
    media = (nota1 + nota2)/2

    //processamento das condiçoes
    if(media > 6 && faltas < 20){
        res.innerHTML = `Aluno Aprovado com media ${media} e `
        res.innerHTML += `Faltas ${faltas} ficando abaixo de 20 faltas`
        
        }else if(media < 6 && faltas < 20){
            res.innerHTML = `Aluno Reprovado com media ${media} e `
            res.innerHTML += `Faltas ${faltas} sendo reprovado por nota`
            }else if(media > 6 && faltas > 20){
                res.innerHTML = `Aluno Reprovado com media ${media} e `
                res.innerHTML += `Faltas ${faltas} sendo reprovado por faltas`
                }else{
                    res.innerHTML = `Aluno Reprovado com media ${media} e `
                    res.innerHTML += `Faltas ${faltas} sendo reprovado por nota e faltas`
                }
}