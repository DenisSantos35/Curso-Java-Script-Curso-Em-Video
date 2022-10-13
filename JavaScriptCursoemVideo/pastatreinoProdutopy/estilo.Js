function calcular(){
    let prod = Number(window.document.getElementById("valorProduto").value)
    let parc = Number(window.document.getElementById("parcelas").value)
    let forma = window.document.getElementsByName("formaPagamento")
    let msg = window.document.getElementById("res")
    if((parc > 0)&&((forma[0].checked)||(forma[1].checked))){
        msg.innerHTML = `<strong>Para valores parcelados so aceitamos cartoes!!!</strong><br>`
        msg.innerHTML += `<strong>Por favor Selecione a opção cartao caso deseje parcelar</strong>`

    }else{
        if((parc==0)&&((forma[0].checked)||(forma[1].checked))){
            let des = prod * 0.10
            let desconto = prod - des
            msg.innerHTML = `O valor a vista no cheque ou no dinheiro tem 10% de desconto.<br>.` 
            msg.innerHTML +=`O valor do desconto e de<strong> ${des.toFixed(2)} R$</strong><br>-`       
            msg.innerHTML += `O valor a ser pago e de<strong> ${desconto.toFixed(2)} R$</strong>`        
        }else if((parc==0)&&(forma[2].checked)){
            let des = prod * 0.05
            let desconto = prod - des
            msg.innerHTML = `O valor a vista no Cartao tem 5% de desconto.<br>.` 
            msg.innerHTML +=`O valor do desconto e de<strong> ${des.toFixed(2)} R$</strong><br>-`       
            msg.innerHTML += `O valor a ser pago e de<strong> ${desconto.toFixed(2)} R$</strong>`
        }else if((parc <= 2)&&(forma[2].checked)){
            let parcelado = prod / parc
            msg.innerHTML = `O valor parcelado em ate 2 veses no cartão não tem desconto.<br>-` 
            msg.innerHTML += `O valor a ser pago parcelado em ${parc} vez(s) e de<strong> ${parcelado.toFixed(2)} R$</strong>`

        }else{
            let jur = prod * 0.20
            let juros = prod + jur
            let parcelado = juros / parc
            msg.innerHTML = `O valor parcelado em ate 3 veses ou mais no cartão tem juros de 20%.<br>-` 
            msg.innerHTML +=`O valor do JUROS e de<strong> ${jur.toFixed(2)} R$</strong><br>-` 
            msg.innerHTML +=`O novo valor com JUROS embutido e de<strong> ${juros.toFixed(2)} R$</strong><br>-` 
            msg.innerHTML += `O valor a ser pago parcelado em ${parc} vez(s) e de<strong> ${parcelado.toFixed(2)} R$</strong>`
        }
        
    }
    prod = ' '
    parc = ' '
}

function limpar(){
    let limpa = window.document.getElementById("res")
    limpa.innerHTML = " "
}