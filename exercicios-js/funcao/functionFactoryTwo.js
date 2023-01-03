function criarProduto(nome, preco){
    const desconto = 0.05
    const preco2 = preco

    return {
        nome,
        preco,
        precoComDesconto: preco2 - (preco * desconto)
    }
}

console.log(criarProduto("Tenis", 450));
console.log(criarProduto("Chinelo", 200));