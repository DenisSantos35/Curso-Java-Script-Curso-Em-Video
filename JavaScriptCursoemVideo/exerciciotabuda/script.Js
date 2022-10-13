function tabuada(){
    let num = Number(window.document.getElementById('numero').value)
    let calc = window.document.getElementById("seltab")
    
   calc.innerHTML = " "
    if(num == 0){
        window.alert('[ERRO!!!]Digite um numero para gerar a tabuada')
    }else{
        for(let i = 0; i <= 10; i++){
            let item = document.createElement('option')
            item.text = `${num} X ${i} = ${num * i} `
            item.value = `calc${i}`
            calc.appendChild(item)
        }
    }
    
}