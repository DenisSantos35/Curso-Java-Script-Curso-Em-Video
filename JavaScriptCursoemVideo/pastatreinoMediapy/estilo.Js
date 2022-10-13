function verificar(){
    //atribuição html em variaveis
    let nota1 = Number(window.document.getElementById("n1").value)
    let nota2 = Number(window.document.getElementById("n2").value)
    let result = window.document.getElementById("res")
    let res = window.document.querySelector("div#res2")
    let media = (nota1 + nota2)/2

    result.innerHTML = `Sua media é de ${media}`

    if(media < 5.0){
        res.innerHTML = `Sua media foi de ${media}.Voce foi Reprovado. Estude mais`
    }else if((media >= 5.0) && (media <= 6.9)){
        res.innerHTML = `Sua media foi de ${media}.Voce esta de Recuperação`
    }else{
        res.innerHTML = `Parabens!!!Sua media foi de ${media}. Voce foi aprovado`
    }
}