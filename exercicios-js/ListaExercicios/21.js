const planoSaude = (idade) =>{
    const planoGeral = 100
    const pessoa = idade
    const adicionalMenor10 = 80
    const adicional10 = 50
    const adicional30 = 95
    const adicional60 = 130
    let planoNovo = 0

    if(pessoa < 10){
        planoNovo = planoGeral + adicionalMenor10
        return console.log(`Novo plano: R$ ${planoNovo}`);

    }else if(pessoa >= 10 && pessoa <= 30){
        planoNovo = planoGeral + adicional10
        return console.log(`Novo plano: R$ ${planoNovo}`);

    }else if(pessoa > 30 && pessoa <= 60){
        planoNovo = planoGeral + adicional30
        return console.log(`Novo plano: R$ ${planoNovo}`);

    }else if(pessoa > 60){
        planoNovo = planoGeral + adicional60
        return console.log(`Novo plano: R$ ${planoNovo}`);
    }
}

planoSaude(15)