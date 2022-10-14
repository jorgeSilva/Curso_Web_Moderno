const valores = [7.7, 9.4, 8.2, 3.3]

console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)

valores[5] = 5
console.log(valores)

console.log(valores.length)

valores.push({id:3}, false, true, 'teste')
console.log(valores)

console.log(valores.pop()) 
console.log(valores)

delete valores[0]
console.log(valores)

console.log(typeof valores)