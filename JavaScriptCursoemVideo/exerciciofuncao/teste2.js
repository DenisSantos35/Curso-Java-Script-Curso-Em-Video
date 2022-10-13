let vetpeso = [50, 100, 80, 100]
let vetnome = ['denis', 'marcos', 'joao', 'lucas']
let maior
let nomemaior = []
for(pos in vetpeso){
    maior = vetpeso[0]
    if (maior < vetpeso[pos]){
        maior = vetpeso[pos]
    }
}
console.log(maior)

for(pos in vetpeso){
    if (vetpeso[pos] == maior){
        let nom = vetpeso.indexOf(maior,pos)
        console.log(nom)
        nomemaior.push(vetnome[nom])
    }
}
console.log(nomemaior)
