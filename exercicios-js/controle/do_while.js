function getInteiroAleatorioEntre(max, min){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let aux = 0

do{
    aux = getInteiroAleatorioEntre(-5, 11)
    console.log(`O valor do auxiliar é: ${aux}`)
}while(aux != 1)