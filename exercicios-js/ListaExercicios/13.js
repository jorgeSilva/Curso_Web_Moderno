const diaSemana = (dia) => {
    if(dia != 0){
        switch(dia){
            case 7:
                console.log("Fim de semana");
                break        
            case 6:
                console.log("Dia util");
                break
            case 5:
                console.log("Dia util");
                break
            case 4:
                console.log("Dia util");
                break
            case 3:
                console.log("Dia util");
                break
            case 2:
                console.log("Dia util");
                break
            case 1:
                console.log("Dia invalido");
                break
        }
    }else{
        return console.log("Data invalida");
    }
}

diaSemana(7)