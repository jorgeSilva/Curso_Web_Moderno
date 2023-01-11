const aumentoSalario = (plano, salarioAtual) =>{

    let planoA = ((salarioAtual * 10) / 100) + salarioAtual
    let planoB = ((salarioAtual * 15) / 100) + salarioAtual
    let planoC = ((salarioAtual * 20) / 100) + salarioAtual

    switch(plano){
        case "a": console.log(`Seu antigo salario era: ${salarioAtual}\nSeu novo salario e: ${planoA}\n`);
            break
        case "b": console.log(`Seu antigo salario era: ${salarioAtual}\nSeu novo salario e: ${planoB}\n`);
            break
        case "c": console.log(`Seu antigo salario era: ${salarioAtual}\nSeu novo salario e: ${planoC}\n`);
            break
        default: console.log(`plano nao disponivel para aumento`);
    }

   /*  if(plano == "a"){
        let salarioNovo = ((salarioAtual * 10) / 100) + salarioAtual
        console.log(`Seu antigo salario era: ${salarioAtual}\nSeu novo salario e: ${salarioNovo}\n`); 
    }else if(plano == "b"){
        let salarioNovo = ((salarioAtual * 15) / 100) + salarioAtual
        console.log(`Seu antigo salario era: ${salarioAtual}\nSeu novo salario e: ${salarioNovo}\n`); 
    }else if(plano == "c"){
        let salarioNovo = ((salarioAtual * 20) / 100) + salarioAtual
        console.log(`Seu antigo salario era: ${salarioAtual}\nSeu novo salario e: ${salarioNovo}\n`); 
    }else{
        console.log("plano nao disponivel para aumento");
    } */
}

aumentoSalario("a", 2000)
aumentoSalario("b", 2000)
aumentoSalario("c", 2000)
aumentoSalario("d", 2000)