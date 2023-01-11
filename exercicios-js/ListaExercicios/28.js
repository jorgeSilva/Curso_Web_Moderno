const paresEImpares = (valor) =>{
    let array = []
    let pares = []
    let impares = []

    for(let i = 0; i <= valor; i++){
        if(i % 2 == 1){
            impares.push(i)
        }
        if(i % 2 == 0){
            pares.push(i)
        }

        array.push(i)
    }

    console.log(`Total: ${array}\n`);
    console.log(`Pares: ${pares}\n`);
    console.log(`Impares: ${impares}\n`);
}

paresEImpares(100)