percorrerVetor = (valor) =>{
    let arrayFinal = []
    let intervalo = []
    let foraIntervalo = []

    for(let i = 0; i <= valor; i++){
        if(i >= 10 && i <=20){
            intervalo.push(i)
        }else{
            foraIntervalo.push(i)
        }

        arrayFinal.push(i)
    }
    console.log(intervalo.length, intervalo);
    console.log(foraIntervalo.length, foraIntervalo);
    console.log(arrayFinal);
}

percorrerVetor(30)