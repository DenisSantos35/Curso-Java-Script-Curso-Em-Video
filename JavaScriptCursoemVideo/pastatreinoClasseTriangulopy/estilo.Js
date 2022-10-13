function calcular(){
    let segA = Number(window.document.getElementById("sega").value)
    let segB = Number(window.document.getElementById("segb").value)
    let segC = Number(window.document.getElementById("segc").value)
    let result = window.document.getElementById("res")
   

    if(((segA+segB)>segC) && ((segA+segC)>segB) && ((segB+segC)>segA)){
        result.innerHTML = `Os seguimentos A, B, C formam um triangulo:`
    }
        if((segA == segB) && (segA == segC)){
            result.innerText += `Equilatero`
        }else if(((segA!=segB) && (segA == segC)) || ((segA!=segC) && (segA == segB)) || ((segB!=segC) && (segB == segA))||((segB!=segC) && (segC == segA))||((segA!=segB) && (segB == segC))){
            result.innerText += `Isosceles`
        }else{
            result.innerText += `Escaleno`
        }


   
}