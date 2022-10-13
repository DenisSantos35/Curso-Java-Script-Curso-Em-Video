function calcular(){
    let num = Number(window.document.getElementById("num").value)
    let pares = window.document.getElementById("pares")
    pares.innerHTML = ' '

    for(let i = 1; i <= num; i++){        
        if(i % 2 == 0){            
            let item = document.createElement('option')
            item.text = ` Numero: ${i};  `
            pares.appendChild(item)            
        }
    }
}