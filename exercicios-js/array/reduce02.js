const alunos = [
    {nome: 'Joao', notas: 7.3, bolsista: false},
    {nome: 'Maria', notas: 9.2, bolsista: true},
    {nome: 'Pedro', notas: 9.8, bolsista: false},
    {nome: 'Ana', notas: 8.7, bolsista: true},
]

const alunosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(alunosBolsistas));

const alunoBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(alunoBolsista));