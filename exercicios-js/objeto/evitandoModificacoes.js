const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promocao'
})

console.log('Extensivel', Object.isExtensible(produto));

produto.nome = 'Borracha'
produto.descricao = 'Borracha escola Branca'
delete produto.tag
console.log(produto);

const pessoa = { nome: 'Juliana', idade: 32}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa);
