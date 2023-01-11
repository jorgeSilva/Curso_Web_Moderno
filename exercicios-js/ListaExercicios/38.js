imparesEntre = (inicio, fim ) =>{
    inicio < 0 ? inicio = 0 : inicio
    fim > 100 ? fim = 100: fim 
    let arrayImpares = []
    let array = []

    for(let i = 0; i < fim; i++){
        array.push(i+1)    
    }

    array = array.filter(item => item >= inicio)

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 1){
            arrayImpares.push(array[i])
        }
    }

    console.log(arrayImpares);
}

imparesEntre(10, 51)