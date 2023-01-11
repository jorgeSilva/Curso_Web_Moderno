concatenarVetores = () =>{
    let vetorPilha = [1, 2, 3, 4, 5]
    let vetorAdicional = [6, 7, 8, 9]

    let final = vetorPilha.concat(vetorAdicional)

    for(let i in vetorAdicional){
        vetorPilha.push(vetorAdicional[i])
    }

    console.log(vetorPilha);

    return console.log(final);
}

concatenarVetores()