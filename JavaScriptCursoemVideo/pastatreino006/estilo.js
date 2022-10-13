function resultado(){
    //declaraçao de variaveis
    var time1 = (window.document.getElementById("txttime1").value)
    var time2 = window.document.getElementById("txttime2").value
    var gol1 = Number(window.document.querySelector("input#gols1").value)
    var gol2 = Number(window.document.querySelector("input#gols2").value)
    var resultado = window.document.querySelector("div#res")

    //resultado.innerHTML = `time 1 ${time1} time 2 ${time2} gols time 1 ${gol1} gols time 2 ${gol2}`
    if(gol1 > gol2){
        resultado.innerHTML = `Placar : </br> ${time1} [${gol1}] X [${gol2}] ${time2} </br> `
        resultado.innerHTML += `O Time campeao foi ${time1}`
        }else if(gol1 < gol2){
            resultado.innerHTML = `Placar : </br> ${time1} [${gol1}] X [${gol2}] ${time2} </br> `
            resultado.innerHTML += `O Time campeao foi ${time2}`
            }else{
                resultado.innerHTML = `Placar : </br> ${time1} [${gol1}] X [${gol2}] ${time2} </br> `
                resultado.innerHTML += `O jogo terminou empatado`
            }
}