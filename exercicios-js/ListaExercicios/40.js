escola = (notas = []) =>{
    let media = 0

    for(let i in notas){
        media += (notas[i])/notas.length
    }   

    if(media >= 0.0 && media <= 4.9){
        console.log(`D: ${media}`);
    }else if(media >= 5 && media <= 6.9){
        console.log(`C: ${media}`);
    }else if(media >= 7 && media <= 8.9){
        console.log(`B: ${media}`);
    }else if(media >= 9 && media <= 10){
        console.log(`A: ${media}`);
    }else{
        console.log('Nota invalida');
    }
}

escola([10, 7, 9, 10])