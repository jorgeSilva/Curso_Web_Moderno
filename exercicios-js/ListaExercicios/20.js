/* function sacarDinheiro(valorSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador2 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(valorSaque)

    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 2:
                valorSaque-=2
                contador2++
                break
            case 1:
                contador1++
                valorSaque -= 1
                break
        }

        valorNota = calcularValorNota(valorSaque)
    }

    console.log(valorSaque);
    return elaborarResultado(contador100, contador50, contador10, contador5, contador2, contador1)
}

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    }else if(valorSaque >= 2){
        return 2
    }else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(contador100, contador50, contador10, contador5, contador2, contador1) {
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }

    if(contador2 > 0){
        resultado += `${contador2} nota(s) de R$ 2. `
    }

    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(sacarDinheiro(274)); */

const banco = (saque) =>{
    let contador100 = 0
    let contador50 = 0
    let contador20 = 0
    let contador10 = 0
    let contador5 = 0
    let contador2 = 0
    let contador1 = 0
    let notas = 0

    if(saque >= 100){
        contador100++
        saque--
        console.log(contador100);

    }else if(saque >= 50 && saque <100){
        contador50++
        saque--
    }else if(saque >= 20 && saque <50){
        contador20++
        saque--
    }else if(saque >= 10 && saque <20){
        contador10++
        saque--
    }else if(saque >= 5 && saque <10){
        contador5++
        saque--
    }else if(saque >= 2 && saque < 5){
        contador2++
        saque--
    }else if(saque >= 1 && saque < 2){
        contador1++
        saque--
    }

    console.log(contador100,
        contador50,
        contador20,
        contador10,
        contador5,
        contador2,
        contador1,
        notas);
}

banco(200)