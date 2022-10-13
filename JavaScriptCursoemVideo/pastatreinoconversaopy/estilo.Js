function calcular(){
    let num = Number(window.document.getElementById("numero").value)
    let conv = window.document.getElementsByName("conversao")
    let res = window.document.getElementById("resu")

    
    if(conv[0].checked){
        res.innerHTML = `Aqui vai um texto`
    }else if(conv[1].checked){
        res.innerHTML = `Aqui vai outro texto`
    }else if(conv[2].checked){
        res.innerHTML =`Aqui vai o terceiro texto`
    }
   
    


}