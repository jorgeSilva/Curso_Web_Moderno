function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao = getInteiroAleatorioEntre(-5, 11)
    console.log(`O valor escolhido foi: ${opcao}`)
}

console.log(`Acaba aqui`);