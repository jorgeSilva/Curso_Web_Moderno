const temporadaPedro = (pontosJogo) =>{
    const pontosPartida = [6, 7, 3, 12]
    pontosPartida.push(pontosJogo)

    const recordBatido = []
    const resultadoPior = []

    for( let i in pontosPartida ){
        if(pontosPartida[4] > pontosPartida[i]){
            recordBatido.push(pontosPartida[4])

            console.log(`Novo record: ${recordBatido}`);
            console.log(`Partida passada fez ${pontosPartida[i]} pontos, nessa fez ${pontosPartida[4]} pontos \n`);
        }else if(pontosPartida[4] == pontosPartida[i]){

            console.log('Mesmo numero de pontos\n');
        }else {
            resultadoPior.push(pontosPartida[4])

            console.log(`Resultados piores: ${resultadoPior}`);

            console.log(`Fez menos pontos (${pontosPartida[4]}) do que na ${i}° partida com ${pontosPartida[i]} pontos\n`);
        }
    }
}

temporadaPedro(7)