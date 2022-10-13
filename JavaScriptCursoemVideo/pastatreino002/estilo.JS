function calcular(){
    //entrada de dados 
    var vt1 = Number(window.document.querySelector("input#txtv1").value)
    var vt2 = Number(window.document.querySelector("input#txtv2").value)
    var vt3 = Number(window.document.querySelector("input#txtv3").value)
    var res = window.document.getElementById("res")

    //processamento
    if(vt1 < vt2 && vt1 < vt3){
        res.innerHTML = `A volta 1 foi mais rapida com tempo ${vt1} segundos`
        }else if(vt2 < vt1 && vt2 < vt3){
            res.innerHTML = `A volta 2 foi mais rapida com tempo de ${vt2} segundos`
            }else{
                res.innerHTML = `A volta 3 foi mais rapida com tempo ${vt3} segundos`
            }

    

}