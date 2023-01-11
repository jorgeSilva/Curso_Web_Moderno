const escola = (idAluno, nota1, nota2, nota3) =>{
    let mediaPonderada = (nota1*4 + nota2*3 + nota3*3) / (4+3+3)

    const nomesAlunos = ["Ana", "Beatriz", "Leticia", "Jorge", "Lucas"]

    console.log(nomesAlunos[idAluno-1]);

    if(mediaPonderada >= 5){
        console.log(`Aprovada com mensao: ${mediaPonderada}\n`);
    }else{
        console.log(`Reprovado: ${mediaPonderada}\n`);
    }
    
    

    /* for(let i in nomesAlunos){
        switch(idAluno){
            case 1:
                console.log(`Sua media foi: `);
        }
    } */
}

escola(1, 7, 8, 2)
escola(1, 1, 3, 10)
escola(1, 6, 5, 7)
escola(1, 7, 7, 5)