const revenda = (modelo) =>{
    switch(modelo){
        case "Hatch": 
            console.log("Compra efetuada com sucesso!");
            break

        case "Sedan":
            console.log("Tem certexa que nao prefere outro modelo?");
            break

        case "Motocicleta":
            console.log("Tem certexa que nao prefere outro modelo?");
            break

        case "Caminhonete":
            console.log("Tem certexa que nao prefere outro modelo?");
            break

        default: 
            console.log("Nao trabalhamos com esse tipo de automovel");
    }
}

revenda("Cupe")
revenda("Motocicleta")
revenda("Sedan")
revenda("Caminhonete")
revenda("Hatch")