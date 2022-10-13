function calcular(){
    
    let pes = Number(window.document.getElementById("peso").value)
    let alt = Number(window.document.getElementById("altura").value)
    let msg = window.document.getElementById("res")

    let imc = pes / Math.pow(alt,2)
    
    if((pes == 0)||(alt==0)){
        msg.innerHTML = `Digite peso e altura e aperte para calcular`
    }else{
    msg.innerHTML = `Seu IMC e:  ${imc.toFixed(1)}!!!`
        if(imc < 18.5){
            msg.innerHTML += ` Voce esta abaixo do peso `
        }else if(imc < 25){
            msg.innerHTML += ` Voce esta no Peso ideal `
        }else if(imc < 30){
            msg.innerHTML += ` Voce esta no sobrepeso `
        }else if(imc < 40){
            msg.innerHTML += ` Voce esta na obesidade `
        }else{
            msg.innerHTML += ` Voce esta na obesidade morbida`
        }
    }
}