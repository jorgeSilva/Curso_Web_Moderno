const inteiroDivisivelPorTres = (n) =>{
    if(Number.isInteger(n)){
        if(n % 3 == 0){
            console.log(`Inteiro e divisivel por 3 o numero: ${n}`);
        }else{
            console.log(`Inteiro e nao divisivel por 3 o numero: ${n}`);
        }
    }else{
        return console.log('false');
    }
}

inteiroDivisivelPorTres(6)