function tratarErro(erro){
    throw "deu ruim"
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + "!!!");
    }catch(e){
        tratarErro(e)
    }
}

const obj = {nome : "Enaldinho"}
imprimirNomeGritado(obj)