let jogador = ''
let gols = ''
function ficha(nome='', gols=0){
    console.log(`O jogador ${nome} fez ${gols} gol(s) no campeonato`)
}
//console.log(typeof(gols))
if (isNaN('gols')){
    gols = Number(gols)
    //console.log(typeof(gols))
}else{
    gols = 0
}
if (jogador == ''){
    jogador = '<Desconhecido>'
}
ficha(jogador,gols)

