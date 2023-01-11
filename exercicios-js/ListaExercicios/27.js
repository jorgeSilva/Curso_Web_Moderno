alturaCriancas = (alturaKid1, mediaCrescimentoKid1, alturaKid2,  mediaCrescimentoKid2) =>{

    let kid1 = {
        altura: alturaKid1,
        mediaCrescimento: mediaCrescimentoKid1
    }

    let kid2 = {
        altura: alturaKid2,
        mediaCrescimento: mediaCrescimentoKid2
    }

    if(kid1.altura > kid2.altura){
        console.log("Crianca 1 eh maior");

    }else{
        if(kid1.mediaCrescimento > kid2.mediaCrescimento){
            console.log("Crianca 1 eh maior e tem uma media de crescimento maior");

        }else{
            let tempo

            if(kid1.mediaCrescimento < kid2.mediaCrescimento){
                 tempo = (kid2.altura - kid1.altura) / (kid1.mediaCrescimento/12)

            }else{
                 tempo = (kid1.altura - kid2.altura) / (kid2.mediaCrescimento/12)
            }

            console.log(`Crianca dois eh menor mas passara em ${tempo.toFixed(2)} anos`);
        }
    }
}

alturaCriancas(140, 10, 145, 11)
alturaCriancas(145, 8, 142, 11)
alturaCriancas(150, 12, 187, 15)
alturaCriancas(167, 5, 145, 4)