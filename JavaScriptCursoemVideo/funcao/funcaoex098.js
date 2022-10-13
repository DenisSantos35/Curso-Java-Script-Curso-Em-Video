lista = []
lista2 = []
function txt(msg){
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
    console.log(msg)
}
function contador(inicio, fim, passo){
    if(inicio < fim){
        for(let cont = inicio; cont <= fim; cont += passo){
            lista.push(cont)
        }
        console.log(lista)
    }else if(inicio > fim){
        for( let i = inicio; i >= fim; i -= passo){            
            lista2.push(i)
        }
        console.log(lista2)
    }
}


txt('  Contagem de 1 até 10 de 1 em 1')
contador(1, 10, 1)
txt('  Contagem de 10 até 1 de 2 em 2')
contador(10, 1, 2)