let n = leiaint(`Digite um numero`)
if (isNaN(n)){
    console.log('')
}else{
    console.log(`Você acabou de digitar o numero ${n}`)
}

function leiaint(msg){
    
    let valor = '10'    
    console.log(`${msg} = ${valor}`) 
    valor = Number(valor)   
    
    if(isNaN(valor)){
        console.log(`ERRO! Tente novamente`)
        
    }else{
        return valor
    }
        

    
}