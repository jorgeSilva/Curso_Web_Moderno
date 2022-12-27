Number.prototype.entre = function(inicio, fim ){
    return this >= inicio && this <= fim
}

const imprimirResultado =  function (nota){
    if(nota.entre(9, 10)){
        console.log( `Quadro de honra`)
    } else if(nota.entre(7, 8.99)){
        console.log(`Aprovado`)
    } else if(nota.entre(4, 6.99)){
        console.log(`Recuperacao`)
    } else if(nota.entre(0, 3.99)){
        console.log(`Reporvado`);
    } else{
        console.log(`Nota Invalida`)
    }
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(4)
imprimirResultado(2)
imprimirResultado(11)

const notas = function(suaNota){

    if(suaNota >= 8 && suaNota <= 10 ) console.log(`Quadro de honra: ${suaNota}`)
    else if(suaNota >= 6 && suaNota <= 8) console.log(`Aprovado: ${suaNota}`)
    else if(suaNota >= 4 && suaNota <= 6) console.log(`Recuperacao: ${suaNota}`)
    else if(suaNota >= 0 && suaNota <= 4) console.log(`Reprovado: ${suaNota}`)
    else console.log(`Ivalido sua nota`)
}

notas(5)