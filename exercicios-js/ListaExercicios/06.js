const montanteSimples = (captal = 0, tempAplicado = 0, juros = 0) =>{
    const calcJuros = captal * juros * tempAplicado
    const simples = captal + calcJuros 
    return simples
}

const montanteComposto = (captal = 0, tempAplicado = 0, juros = 0) =>{
    const composto = captal * (1 + juros) ** tempAplicado
    const montante = composto - captal

    console.log(`Montante: ${montante.toFixed(2)}`)
    return composto.toFixed(2)
}


console.log("Total juros simples: "+montanteSimples(200, 2, 0.12))
console.log("Total juros compostos: "+montanteComposto(5000, 2, 0.013));