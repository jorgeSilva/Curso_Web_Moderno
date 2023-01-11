const calculadoraBasica = (x,operacao, y) =>{

    console.log("CALCUlADORA MUITO TOP");

    switch(operacao){
        case "/": console.log(`${x} / ${y} = `+ (x/y));
            break
        case "*": console.log(`${x} * ${y} = `+ (x*y));
            break
        case "-": console.log(`${x} - ${y} = `+ (x-y));
            break
        case "+": console.log(`${x} + ${y} = `+ (x+y));
            break
        default: console.log("Essa operacao nao existe");
    }
}

calculadoraBasica(10 , "/", 2)