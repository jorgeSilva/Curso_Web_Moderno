let valor 
console.log(valor)

valor = null
console.log(valor)

const produto = {}
console.log(produto.preco)

produto.preco = 3.90
console.log(produto.preco)

produto.preco = undefined
console.log(!!produto.preco)
 

const a = {
    nome: "Pedro"
}
console.log(a)

const b = a 
console.log(b)

b.nome = "Jorge"
console.log(b)

console.log(a)