const produto = new Object
produto.nome  = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto);

delete produto.preco
delete produto['marca do produto']

console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietari0: {
        nome: 'Raul',
        idade: 32,
        endereco:{
            logradouro: 'Rua ABS',
            numero: 'muitos'
        }
    },
    condutores: [{
        nome: 'Jorge',
        idade: 18
    },{
        nome: 'Leticia',
        idade: 43
    }],
    calcularValorSeguro: function () {
        //...
    }
}

carro.proprietari0.endereco.numero = 1000
carro['proprietari0']['endereco']['logradouro'] =  'Av Gigantes'
console.log(carro);

delete carro.proprietari0.endereco
delete carro.calcularValorSeguro
/* delete carro.condutores */

console.log(carro);
console.log(carro.condutores);
console.log(carro.condutores.length);