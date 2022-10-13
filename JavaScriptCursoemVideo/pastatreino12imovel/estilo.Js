function calcular(){
    //declarar valores de html em variaveis
    let val = Number(window.document.getElementById("valor").value)
    let sal = Number(window.document.getElementById("salario").value)
    let ano = Number(window.document.getElementById("anos").value)
    let res = window.document.getElementById("result")

    let conversao = ano * 12
    let prestacao = val / conversao
    let percentual = sal * 0.30

    if(prestacao > percentual){
        res.innerHTML = `Seu emprestimo foi negado... Parcelas são maiores do que 30 % do salario`
    } else{
        res.innerHTML = `Emprestimo liberdado. O Valor da parcela e de ${prestacao.toFixed(2)} R$, parcelado em ${conversao} meses`
    }


    

}