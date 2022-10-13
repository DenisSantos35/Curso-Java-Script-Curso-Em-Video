function calculo(){
    var codigo = Number(window.document.getElementById("codigo").value)
    var quantidade = Number(window.document.getElementById("quantidade").value)
    var res = window.document.getElementById("calc")

    var valor 

    switch (codigo){
        case 101:
            valor = (quantidade * 1.20)
            res.innerHTML = `Voce solicitou  ${quantidade} unidades de Cachorro Quente`
            res.innerHTML += `</br>O Valor total é de ${valor.toFixed(2)} R$`
            document.body.style.background  = 'red'
        break
        case 102:
            valor = (quantidade * 1.30)
            res.innerHTML = `Voce solicitou ${quantidade} unidades de Bauru Simples`
            res.innerHTML += `</br>O Valor total é de ${valor.toFixed(2)} R$`
            document.body.style.background  = 'yellow'
        break
        case 103:
            valor = (quantidade * 1.50)
            res.innerHTML = `Voce solicitou ${quantidade} unidades de Bauru com Ovo`
            res.innerHTML += `</br>O Valor total é de ${valor.toFixed(2)} R$`
            document.body.style.background  = 'green'
        break
        case 104:
            valor = (quantidade * 1.20)
            res.innerHTML = `Voce solicitou ${quantidade} unidades de Hamburguer`
            res.innerHTML += `</br>O Valor total é de ${valor.toFixed(2)} R$`
            document.body.style.background  = 'violet'
        break
        case 105:
            valor = (quantidade * 1.30)
            res.innerHTML = `Voce solicitou ${quantidade} unidades de Cheeseburguer`
            res.innerHTML += `</br>O Valor total é de ${valor.toFixed(2)} R$`
            document.body.style.background  = 'pink'
        break
        case 106:
            valor = (quantidade * 1.00)
            res.innerHTML = `Voce solicitou ${quantidade} unidades de Refrigerante`
            res.innerHTML += `</br>O Valor total é de ${valor.toFixed(2)} R$`
            document.body.style.background  = 'rgb(85, 231, 231)'
        break
        default:
            res.innerHTML = `[erro]! Código inválido`
            res.innerHTML += `</br> Tente Novamente`
        break

    }

}