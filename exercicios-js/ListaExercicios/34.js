strings = (palavraUm, palavraDois ) =>{
    let arrayPalavraUm = []
    let arrayPalavraDois = []
    
    for(let i in palavraUm){
        arrayPalavraUm.push(palavraUm[i])
    }

    for(let i  in palavraDois){
        arrayPalavraDois.push(palavraDois[i])
    }

    if(arrayPalavraUm.values == arrayPalavraDois.values){
        return console.log(true)
    }else{
        return console.log(false);
    }

    console.log(arrayPalavraUm);
    console.log(arrayPalavraDois);
}

strings("casa", "cleber")