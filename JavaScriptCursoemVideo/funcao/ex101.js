let data = new Date()
ano = data.getFullYear()

console.log(`Estamos no ano de ${ano}`)
function voto(valor){
    let ida = ano - valor
    if (ida < 18){
        let msg = `com ${ida} anos: NÃO VOTA!`
        return msg
    }else if(ida >= 18 && ida <= 65){
        msg = `com ${ida} anos: VOTO OBRIGATORIO!`
        return msg
    }else{
        msg = `com ${ida} anos: VOTO OPCIONAL!`
        return msg
    }

}


//programa principal
let idade = 1910
let val = voto(idade)
console.log(val)