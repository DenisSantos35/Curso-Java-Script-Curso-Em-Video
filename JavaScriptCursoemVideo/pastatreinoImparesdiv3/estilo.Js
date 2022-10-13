function calcular(){
    // create object
    let num = Number(window.document.getElementById("numero").value)
    let impares = window.document.getElementById("tab")
    let res = window.document.getElementById("res")
    //create variable
    let soma = 0
    let cont = 0
    impares.innerHTML = ' '

    for(let i = 0; i <= num; i++){
        if(i % 2 == 1){
            if(i % 3 == 0){
                soma += i
                cont++
                let numero = document.createElement('option') //cria um elemento opçao
                numero.text = `Numero ${cont}: ${i} ` //armazenado texto dentro do elemnto numero
                impares.appendChild(numero) // coloco a informapao de option dentro do select
            }
        }
    }
    res.innerHTML = `Entre 0 e ${num} existe ${cont} numeros impares divisiveis por 3 </br>`
    res.innerHTML += `A soma dos numeros impares divisiveis por 3 e igual a: ${soma} `



}