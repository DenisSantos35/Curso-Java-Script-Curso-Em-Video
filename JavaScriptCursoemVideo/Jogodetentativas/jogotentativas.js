let min = 0
let max = 10
function getRandomInt(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

    let usuario = document.prompt(Number("digite um numero"))
    let computador = getRandomInt(min, max)

    console.log(usuario, computador)


