let vetor = []
let a = 5
for(i = 0; i < 9; i++){
    if(i == 0){
    vetor[i] =  5
    
    }else{
        vetor[i] = vetor[i-1]+5
    }
}
for(i = 0; i < 9; i++){
    console.log(vetor[i])
}
