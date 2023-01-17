Array.prototype.filter2 = function(callback){
    const newArray = []

    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nomes: 'Notebook', preco: 2499, fragil: true},
    {nomes: 'iPad Pro', preco: 4199, fragil: true},
    {nomes: 'Copo de vidro', preco: 12.49, fragil: true},
    {nomes: 'Copo de plastico', preco: 18.99, fragil: false},
]

console.log(produtos.filter(function(p){
    return false
}));

const ecaro = produto => produto.preco > 500
const efragil = produto => produto.fragil 

const resultado = produtos.filter2(ecaro).filter2(efragil)
console.log(resultado);