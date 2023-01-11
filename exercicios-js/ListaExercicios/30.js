maiorMenor = (valor) =>{
    let array = []
    let min = 0
    let max = 1000
    let maior
    let menor

    for(let i = 0; i <= valor; i++){
        if(min > max) [min,max] = [max, min]
        const resultado = Math.random() * (max - min ) + min
        array.push( Math.floor(resultado))
    }

    for (let i = 0; i < array.length; i++){
        if (maior === undefined && menor === undefined){
            maior = array[i]
            menor = array[i]
        } else {
            if (array[i] > maior){
                maior = array[i]
            }
            if(array[i] < menor){
                menor = array[i]
            }
        }
    }
    return console.log([maior, menor, array]);
}

maiorMenor(32)