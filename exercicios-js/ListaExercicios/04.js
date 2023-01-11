function rstd (divisor, dividendo){
    const resultado = (divisor/dividendo).toFixed(2)
    const restoDiv = (divisor % dividendo)
    return console.log('resultado: ' + resultado + ' Resto da divisao: ' + restoDiv);
}

rstd(81,17)