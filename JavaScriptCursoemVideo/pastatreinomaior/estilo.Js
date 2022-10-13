function CALCULAR(){
    //atribuiçao html a varaveis
    let num1 = Number(window.document.getElementById("numero1").value)
    let num2 = Number(window.document.getElementById("numero2").value)
    let res = window.document.getElementById("res")

    if (num1 > num2){
        res.innerHTML = `O Numero ${num1} é maior que o ${num2}`
    }else if(num1 < num2){
        res.innerHTML = `O Numero ${num1} é menor que o ${num2}`
    }else if(num1 == num2){
        res.innerHTML = `O Numero ${num1} é igual o ${num2}`
    }

}