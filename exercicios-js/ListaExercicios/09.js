const passarOuReprovar = (nota = 0) =>{
    const valorMultiplo = 5
    const multiplo = nota % valorMultiplo
    let notaMultiplicada 

    if(nota >= 40 ){

        if(nota % 5 != 0){
            for(let i = nota; i % 5 != 0; i++){
                notaMultiplicada = i
            }
        
            console.log(`Aprovado com nota: ${notaMultiplicada+1}`);
        }else{
            console.log(`Aprovado com nota: ${nota}`)
        }
    }else if(nota >= 38){
        nota = 40
        console.log(`Aprovado com nota: ${nota}`);
    }else {
        console.log('Nao aprovado');
    }
}

passarOuReprovar(37)