const alunos = [
    {nome: 'Joao', notas: 7.3, bolsista: false},
    {nome: 'Maria', notas: 9.2, bolsista: true},
    {nome: 'Pedro', notas: 9.8, bolsista: false},
    {nome: 'Ana', notas: 8.7, bolsista: true},
]

const resultado = alunos.map(a => a.notas).reduce(function(acumulador, atual){
    console.log(acumulador, atual);
    return acumulador + atual
}, 0)

console.log(resultado);