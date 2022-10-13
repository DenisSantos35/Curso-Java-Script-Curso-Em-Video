function calcular(){
    let ini = Number(window.document.getElementById("inicio").value)
    let fim = Number(window.document.getElementById("fim").value)
    let pas = Number(window.document.getElementById("passo").value)
    let res = window.document.getElementById("result")
    
    res.innerHTML = ' '
    res.innerHTML = 'Contando: '
    if(ini == 0 || fim == 0 || pas == 0){
        window.alert('[Erro]!!! Faltam dados')
    }else{
        
        if(ini < fim){
            for( i = ini; i <= fim; i = i + pas ){
                res.innerHTML += `${i} \u{1F449} `
            }
        }else if(ini > fim){
            for( i = ini; i >= fim; i = i - pas ){
                res.innerHTML += `${i} \u{1F449}`
                
            }
            
        }else{
            res.innerHTML = `Inicio igual ao final, digite outro numero`
        }
    res.innerHTML += `\u{1F3C1}`
    }
}