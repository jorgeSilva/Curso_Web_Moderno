const ferinha = (nomeFruta) =>{
    switch(nomeFruta){
        case "maca":
            console.log("Nao vendemos essa fruta")
            break
        case "kiwi": 
            console.log("Estamos com escassez de kiwis");
            break
        case "melancia": 
            console.log("Aqui esta, sao 3 reais o quilo");
            break
        default: console.log("Nao vendemos essa fruta ainda");
    }
   
}

ferinha("pera")