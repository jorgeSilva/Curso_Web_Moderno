const pessoa = {nome: 'Pedro'}
pessoa.nome = 'Jorge'
console.log(pessoa);

Object.freeze(pessoa)

pessoa.nome = 'Rua'
pessoa.end = 'RUA ABa'
delete pessoa.nome

const pessoaConstante = Object.freeze({nome: 'joao'})
pessoaConstante.nome = 'maria'
console.log(pessoaConstante);