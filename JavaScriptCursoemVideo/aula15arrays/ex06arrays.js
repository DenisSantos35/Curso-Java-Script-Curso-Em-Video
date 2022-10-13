let num = [5,8,4]
let num2 = [12,15,18]
num.push(10)
let lista = []
lista.push(num)
lista.push(num2)
console.log(num)
console.log(lista)
console.log(lista.length)
lista[0].sort()
console.log(lista)
console.log(lista)
for (let i in num){
    console.log(`O valor numero ${i} e igual ${num[i]}`)
}
let pos = num.indexOf(10)
console.log(pos)