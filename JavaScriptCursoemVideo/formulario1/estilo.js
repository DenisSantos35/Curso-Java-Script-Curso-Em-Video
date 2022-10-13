let nome = document.getElementById('nome')
let peso = document.getElementById('peso')
let msg = document.getElementById('res')
let formulario = document.getElementById('cadastro')
let vetnome = []
let vetpeso = []
let nomemaior = []
let nomemenor = []
function cadastrar(){
    if ((nome.value != 0) && (peso.value != 0)){
        vetnome.push(nome.value)    
        vetpeso.push(peso.value)
        let nom = document.createElement('option')
        let pes = document.createElement('option')        
        nom.text = `Nome: ${nome.value}`
        pes.text = `Peso: ${Number(peso.value)} Kg`
        formulario.appendChild(nom)
        formulario.appendChild(pes)
        
    }else{
        window.alert(`[ERRO!!] CAMPO NOME OU PESO SEM PREENCHER. <br> TENTE NOVAMENTE...`)
    }
    nome.value = ''
    nome.focus()
    peso.value = ''
    peso.focus()
}
function dados(){
    msg.innerHTML = ''
    let maior = vetpeso[0]
    let menor = vetpeso[0]
    let tot = vetnome.length  
      
    for(pos in vetpeso){        
        if(vetpeso[pos] > maior){
            maior = vetpeso[pos]
        }

        if(vetpeso[pos] < menor){
            menor = vetpeso[pos]
        }
   }   
   for(pos in vetpeso){
    if (vetpeso[pos] == maior){
        let nom = vetpeso.indexOf(maior,pos)
        nomemaior.push(vetnome[nom])
    }
    if(vetpeso[pos] == menor){
        let nomp = vetpeso.indexOf(menor,pos)
        nomemenor.push(vetnome[nomp])
    }
} 
    msg.innerHTML += `<p>Ao todo voce cadastrou ${tot} pessoa(s)</br>`
    msg.innerHTML += `<p>O maior peso foi ${maior}.E o(s) nome(s): ${nomemaior} </br>`    
    msg.innerHTML += `<p>O menor peso foi ${menor}.E o(s) nome(s): ${nomemenor}</br>`
    
}