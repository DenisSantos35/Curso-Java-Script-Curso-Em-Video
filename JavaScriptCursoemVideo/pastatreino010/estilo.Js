function conversao(){
    var min = Number(window.document.getElementById("txtmin").value)
    var result = window.document.getElementById("res")

    result.innerHTML = `Minutos digitado = ${min} min`

    var minutosc = min % 60
    var horas =  Number.parseInt(min / 60)  

    if(min > 60){
        result.innerHTML += `</br>Os minutos convertidos em horas = ${horas} h : ${minutosc} min`
    }else{
        result.innerHTML += `</br>Os minutos convertidos em horas = ${min} min`
    }

}