function progrecao(){
    //create object
    let termo = Number(window.document.getElementById("termo").value)
    let razao = Number(window.document.getElementById("razao").value)
    let msg = window.document.querySelector("div#result")   
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    
    msg.innerHTML = `O valor da Pogreçao Aritimetica: (`

    for(let i = termo; i <= termo * 10; i += razao){
        msg.innerHTML += `${i}, ` 
        
    } 
     
    img.setAttribute('src', 'mariosan.png')    
    msg.innerHTML += `) </br>`    
    msg.appendChild(img)  
}