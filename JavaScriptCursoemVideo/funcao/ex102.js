function fatorial(num = 1, show = false){
    let f = 1
    for(let c = num; c >= 1; c--){
        f *= c    
    } 
    lista = []   
    if(show == true){
        for(let i = num; i >= 1; i--){
            lista.push(i) 
            if(i > 1){ 
                lista.push('X')  
            }        
        }
        console.log(`${lista} = `)
    }
    return f
}
console.log(`${fatorial(5, show=true)}`)