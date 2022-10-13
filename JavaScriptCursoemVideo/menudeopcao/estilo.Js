function verificar(){
    let numero1 = Number(window.document.getElementById("num1").value)
    let numero2 = Number(window.document.getElementById("num2").value)
    let msg = window.document.getElementById("res")
    let menu = window.document.getElementsByName("menu")
    let soma = 0
    let multiplicacao = 0    
    let subtracao = 0
    
    
    
    if(menu[0].checked){
        soma = numero1 + numero2
        msg.innerHTML = `${numero1} + ${numero2} = ${soma}`
    }else if(menu[1].checked){
        multiplicacao = numero1 * numero2
        msg.innerHTML = `${numero1} * ${numero2} = ${multiplicacao}`
    }else if(menu[2].checked){
        if(numero1 == numero2){
            msg.innerHTML = `[ERRO!!!] NUMEROS IGUAIS TENTE UM NUMERO DIFERENTE DO OUTRO`
        }else{
            if(numero1 > numero2){
                msg.innerHTML = `${numero1} é maior que o numero ${numero1}`
            }else{
                msg.innerHTML = `${numero2} é maior que o numero ${numero1}`
            }
        }
    }else if(menu[3].checked){
        subtracao = numero1 - numero2
        msg.innerHTML = `${numero1} - ${numero2} = ${subtracao}`
    }else if(menu[4].checked){
        let cont = numero1 - 1
        msg.innerHTML = `${numero1} `
        while( cont != 0){
            numero1 = numero1 * cont
            msg.innerHTML += ` X ${cont} `
            cont -= 1
        }
        msg.innerHTML += ` = ${numero1} `
    }else if(menu[5].checked){
        let cont1 = numero2 - 1
        msg.innerHTML = `${numero2} `
        while( cont1 != 0){
            numero2 = numero2 * cont1
            msg.innerHTML += ` X ${cont1} `
            cont1 -= 1
        }
        msg.innerHTML += ` = ${numero2} `
    }else if(menu[6].checked){
        msg.innerHTML = ''
        msg.innerHTML += `PA do numero ${numero1}, razao ${numero2} = (${numero1}, `
        let decimo = 9
        while(decimo != 0){
            numero1 = numero1 + numero2
            msg.innerHTML += `${numero1}, `
            decimo--
        }
        msg.innerHTML += `)`
    }else if(menu[7].checked){
        msg.innerHTML = ''
        let a = 0
        let b = 0
        let res = 1
        msg.innerHTML = `As ${numero1} primeira(s) sequencia de fibonace = `
        while(numero1 > 0){
            a = a + b
            b = res
            res = a
            msg.innerHTML += `${a}, `
            numero1--
        }

    }else if(menu[8].checked){
        msg.innerHTML = ''
        let a = 0
        let b = 0
        let res = 1
        msg.innerHTML = `As ${numero2} primeira(s) sequencia de fibonace = `
        while(numero2 > 0){
            a = a + b
            b = res
            res = a
            msg.innerHTML += `${a}, `
            numero2--
        }

    }
    


}