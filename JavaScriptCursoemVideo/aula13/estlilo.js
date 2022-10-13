function verificar(){
    var data = new Date()  // armazena na variavel a data do dia
    var ano = data.getFullYear()    //armazena na variavel o ano Atual
    //fullyear pega data com 4 digitos
    var fano = window.document.querySelector("input#txtano") //variavel para atribuir valor para ano de input nascimento 
    var res = window.document.querySelector("div#res")      //variavel para atribuir uma msg para divres
    //var sex = window.document.getElementsByName("radsex")
    //var idade = ano - Number(fano.value)
    //var genero = ' '
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente')
        }else if(fano.value.length < ano){
            var sex = window.document.getElementsByName("radsex") //busca o elemento radsex masc ou fem e armazena na variavel
            var idade = ano - Number(fano.value) //calcula ano atual - ano nasc e armazena em idade
            var genero = ' '    //cria uma variavel genero com espaço em branco
            var img = window.document.createElement('img') //creaçao de imagem no html dinamicamente
            img.setAttribute('id','foto') //criaçao de id para img dinamicamente
            if(sex[0].checked){  
                genero = 'Masculino'
                if(idade >= 0 && idade < 10){
                    //criança   
                    img.setAttribute('src', 'criancah.png')             
                    }else if(idade < 21){
                        //jovem
                        img.setAttribute('src', 'jovemh.png') 
                        }else if(idade < 50){
                            //adulto
                            img.setAttribute('src', 'adultoh.png') 
                            }else{
                                //idoso
                                img.setAttribute('src', 'velhoh.png') 
                            }
            }else if(sex[1].checked){
                genero = 'Feminino'
                if(idade >= 0 && idade < 10){
                    //criança   
                    img.setAttribute('src', 'criancam.png')             
                    }else if(idade < 21){
                        //jovem
                        img.setAttribute('src', 'jovemm.png')                         
                        }else if(idade < 50){
                            //adulto
                            img.setAttribute('src', 'adultom.png') 
                            }else{
                                //velho
                                img.setAttribute('src', 'velham.png')
                            }
            }
            res.innerHTML = `Sexo ${genero} e idade calculada ${idade} Anos`
            res.appendChild(img)
            
        }
}   
