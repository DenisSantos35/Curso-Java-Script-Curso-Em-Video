var m = 5
var n = 100
var soma = 0

while( m < n ){
    m = m + 8
    n = n + 5
    soma = soma +1
    console.log(`Valor de m  = ${m} Valor de n = ${n}`)
}
console.log(`foram necessario ${soma} execuçoes para m passar n`)