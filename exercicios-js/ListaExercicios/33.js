quatroArrays = () =>{
    let arrayInter = [5, 9, 19, 34]
    let arrayDoub = [4.2, 5.5, 6.8, 3.9]
    let arrayStrin = ['Jorge', 'Lucas', 'Leticia', 'Leme']

    let arrayConcatenadas = arrayInter.concat(arrayDoub, arrayStrin)
    return console.log(arrayConcatenadas);
}

quatroArrays()