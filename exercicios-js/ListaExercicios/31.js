negativoPositivo = (resultados) =>{
    let array = []
    let min = -100
    let max = 100
    let negativo = []
    let menor

    for(let i = 0; i <= resultados; i++){
        if(min > max) [min,max] = [max, min]
        const resultado = Math.random() * (max - min ) + min
        array.push( Math.floor(resultado))
    }

    for(let i = 0; i < array.length; i++){
        if(array[i]< 0){
            negativo.push(array[i])
        }
    }

    console.log(negativo);
    console.log(array);
}

negativoPositivo(10)