const notas = [1.2, 23.3, 4.6, 7.4, 3]

const notasBaixas1 = []
for (let i in notas) {
    if(notas[i] < 7) notasBaixas1.push(notas[i])
}

console.log(notasBaixas1)

const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)