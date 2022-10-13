function horas(){
    //declarcaçao de variaveis
    var data = new Date()
    var hora = data.getHours()
    var horario = Number(window.document.querySelector("input#txthora").value)
    var res = window.document.querySelector("div#res")

    res.innerHTML = `Agora agora sao ${horario} horas`
    res.innerHTML += `</br>Hora real ${hora} horas`

    if(horario > 5 && horario <= 12){
        res.innerHTML += `</br>Bom dia`
        }else if(horario > 12 && horario <= 18){
            res.innerHTML += `</br>Boa Tarde` 
            }else if(horario > 18 && horario <=23){
                res.innerHTML += `</br>Boa Noite`
                }else{
                    res.innerHTML += `</br>Vai dormir`
                }
}
