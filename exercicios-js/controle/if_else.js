const imprimirResultado = function (nota){
    if(nota >= 6 && nota != String) console.log(`Aprovado com nota: ${nota}`);
    else console.log(`Fudeu com nota: ${nota}`);
}

imprimirResultado(5)
imprimirResultado(7) 