function contar(){
   // var ini = document.getElementById("txti")
   // var fim = document.getElementById("txtf")
   // var passo = document.getElementById("txtp")
   // var res = document.getElementById("res")
    var ini = Number(document.getElementById("txti").value)
    var fim = Number(document.getElementById("txtf").value)
    var passo = Number(document.getElementById("txtp").value)
    var res = document.getElementById("res")

    //if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    if(ini == 0 || fim == 0 || passo == 0){
        res.innerHTML = `impossivel contar`
    }else{
        res.innerHTML = 'Contando:  '  
        //i = Number(ini.value) 
        //f = Number(fim.value)
        //p = Number(passo.value)
        //if(p <= 0){
        if(passo <= 0){
            window.alert(`impossivel contar, passo agora vale 1`)
            //p = 1
            passo = 1   
        }
            //if(i < f){
            if(ini < fim){
                //for(var c = i; c <= f; c += p){
                for(var c = ini; c <= fim; c += passo){
                res.innerHTML += ` ${c} \u{1F449} `
                }
            }else if(i > f){
                //for(var c = i; c >= f; c = c-p){
                    for(var c = ini; c >= fim; c = c-passo){
                    res.innerHTML += ` ${c} \u{1F449} `
                }
            }
            res.innerHTML += ` \u{1F3c1} `

    } 
}