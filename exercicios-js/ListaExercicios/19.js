const lanchonete = (codPedido, quantidade) =>{

    const Q = 3
    const HS = 4
    const ChB = 5.5
    const Bauru = 7.5
    const Refri = 3.5
    const Suco = 2.80

    switch(codPedido){
        case 100: console.log(`O preco foi de: R$${preco = Q * quantidade}`);
            break
        case 200: console.log(`O preco foi de: R$${preco = HS * quantidade}`);
            break
        case 300: console.log(`O preco foi de: R$${preco = ChB * quantidade}`);
            break
        case 400: console.log(`O preco foi de: R$${preco = Bauru * quantidade}`);
            break
        case 500: console.log(`O preco foi de: R$${preco = Refri * quantidade}`);
            break
        case 600: console.log(`O preco foi de: R$${preco = Suco * quantidade}`);
            break
            
    }
}

lanchonete(200, 5)