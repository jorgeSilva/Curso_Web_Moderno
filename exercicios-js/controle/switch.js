const imprimirTodosResultado = function (nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de honra')
        case 8:
        case 7:      
            console.log('Aprovado')      
        case 6:
        case 5:
        case 4:
            console.log('Recuperação')
        case 3:
        case 2:
        case 1:
        case 0:        
            console.log('Reprovado')
    }
}

const imprimirResultadoDireto = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de honra')
            break
        case 8:
        case 7:      
            console.log('Aprovado')      
            break
        case 6:
        case 5:
        case 4:
            console.log('Recuperação')
            break
        case 3:
        case 2:
        case 1:
        case 0:        
            console.log('Reprovado')
            break
    }
}

imprimirTodosResultado(2)
imprimirResultadoDireto(6)