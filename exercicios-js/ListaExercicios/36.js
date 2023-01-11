function valorMultiplicado(params1 = [], params2){

    firstFunction = () =>{
        let valor = 0
        let array = []
        let media = 0

        for(let i in params1){
            valor = params2 * params1[i]
            array.push(valor)
        }

        for(let i in array){
            media += (array[i])/array.length
        }

        return media
    }

    let valorMedia = firstFunction()
    let valorMediaSecond = 0

    if(valorMedia > 5){
        secondFunction = (params3) =>{
            let valor = 0
            let array = []
            let media = 0
    
            for(let i in params3){
                valor = params2 * params3[i]
                array.push(valor)
            }
    
            for(let i in array){
                media += (array[i])/array.length
            }
    
            return media
        }

        valorMediaSecond = secondFunction()
        console.log(`Valor da media primeira funcao: ${valorMedia}`);

        console.log(`Valor da media segunda funcao: ${valorMediaSecond}`);
    }else{
        console.log(`Valor da media primeira funcao: ${valorMedia}`);
    }
}
valorMultiplicado([2, 2, 10, 2], 2)