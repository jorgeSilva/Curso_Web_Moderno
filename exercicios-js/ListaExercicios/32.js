mediaAritimetica = (resultados) =>{
    let array = []
    let min = 0
    let max = 100

    for(let i = 0; i <= resultados; i++){
        if(min > max) [min,max] = [max, min]
        const resultado = Math.random() * (max - min ) + min
        array.push( Math.floor(resultado))
    }

    let somaValorArray = 0
    for(let i = 0; i < array.length;i++){
        somaValorArray += array[i]
    }

    console.log((somaValorArray/array.length).toFixed(2));
}

mediaAritimetica(10)