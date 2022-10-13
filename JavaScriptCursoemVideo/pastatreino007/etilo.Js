function verificar(){
    var numero = Number(window.document.querySelector('input#txtnumero').value)
    var result = window.document.querySelector('div#res')

    result.innerHTML = `O valor Digitado e = ${numero} `
    


    if(numero > 0){
        result.innerHTML += `</br>Este numero e Positivo`
        }else{
            result.innerHTML += `</br>Este numero e Negativo`
        }
    if(numero % 2 == 0){
        result.innerHTML += `</br>Este numero e Par`
        }else{
            result.innerHTML += `</br>Este numero e impar`
        }
}