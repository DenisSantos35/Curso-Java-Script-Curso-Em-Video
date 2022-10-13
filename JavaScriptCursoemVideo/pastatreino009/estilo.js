function calcular(){
    var horai = Number(window.document.querySelector("input#txthorai").value)
    var mini = Number(window.document.querySelector("input#txtmini").value)
    var horaf = Number(window.document.querySelector("input#txthoraf").value)
    var minf = Number(window.document.querySelector("input#txtminf").value)
    var msg = window.document.querySelector("div#res")

    msg.innerHTML = ` A hora inicial da aula = ${horai} : ${mini} h, a hora final da aula = ${horaf} : ${minf} h`
    
    var con_ini = horai * 60
    var con_if = horaf * 60
    var mini_conv = con_ini + mini
    var minf_conv = con_if + minf

    if(horai < horaf){
        var min_aula = minf_conv - mini_conv
        msg.innerHTML += `</br>A duraçao da aula e de ${min_aula} minutos`
    }
}