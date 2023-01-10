const obj1 = {}
console.log(obj1);
console.log(typeof Object, typeof new Object);

const obj2 = new Object
console.log(obj2);

function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoDesconto = () =>{
        return preco * (1 - desc)
    }
}

const p1 = new  Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 4589.90, 0.10)
console.log(p1.getPrecoDesconto(), p2.getPrecoDesconto());

function criarFuncionario(nome, salario, faltas){
    return{
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 1290, 4)
const f2 = criarFuncionario('Maria', 11300, 2)
console.log(f1.getSalario(), f2.getSalario());

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha);

const fromJSON = JSON.parse('{"info":"Sou um JSOn"}')
console.log(fromJSON.info);