let contador = 1 

while(contador <= 10){
    console.log(`Contador =  ${contador}`)
    contador++
}

console.log('-----------');

for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

console.log('-----------');

let notas = [9.2, 5.8, 2.2, 3.6, 9]

for(let aux = 0; aux < notas.length; aux++){
    console.log(`O valor de cada nota é: ${notas[aux]}`);
}