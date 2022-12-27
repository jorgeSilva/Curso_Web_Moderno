function soNotaBoaPassa(nota){
    if(nota >= 7){
        console.log('aprovado com ' + nota);
    }
}

/* soNotaBoaPassa(7) */

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log(`Se for verdade ${valor}`);
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(1)
seForVerdadeEuFalo(true)
seForVerdadeEuFalo('Verdade')
