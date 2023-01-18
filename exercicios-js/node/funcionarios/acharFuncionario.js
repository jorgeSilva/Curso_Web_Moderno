const funcionario = require('./funcionarios')
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'f'
const menoSalario = (func, funcAtual) =>{
    return func.salario < funcAtual ? func : funcAtual
}

const func = funcionario.filter(chineses).filter(mulheres).reduce(menoSalario)
