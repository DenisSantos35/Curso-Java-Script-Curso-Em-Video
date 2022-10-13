/*let num = [5, 8, 2, 9, 3]
num[5] = 7
num.push(10)
num.push(100)
num.push(2)
console.log(`Nosso vetor tem valor ${num}`)
console.log(num[3])
let a = num.length
console.log(`o tamanho do vetor ${a}`)
console.log(`${num.sort()}`)*/
/*let num = []
for(let i = 0; i < 10; i++){
    num.push(i) 
}
let a = num.length
for(let i = 0 ; i < a; i++){
    console.log(num[i])
}

let valores = [5,3,8,6,1,0]
valores.sort()
for(let i = 0; i < valores.length; i++){
    console.log(valores[i])
}*/
let valores = [5,3,8,6,1,0]
valores.sort()
for(let i in valores){
    console.log(valores[i])
}
 console.log(`o valor do numero esta na posicao ${valores.indexOf(8)}`)
 console.log(`o valor do numero esta na posicao ${valores.indexOf(9)}`)

