const operacoes = (a, b) =>{
    let rSoma = a + b
    let rSubi = a - b
    let rMult = a * b
    let rDivi = a / b

    return console.log(`
    ${a} + ${b} = ${rSoma}
    ${a} - ${b} = ${rSubi}
    ${a} * ${b} = ${rMult}
    ${a} / ${b} = ${rDivi}
    ----------------------`
    )
}

operacoes(2,4)
operacoes(10,5)
