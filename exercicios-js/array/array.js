let aprovados = new Array('bia', 'Carlos', 'Ana')
console.log(aprovados);

aprovados = ['Bia', 'Ana', 'Carlos']
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Pablo'
aprovados.push('Jorge')

console.log(aprovados.length);

aprovados.sort()
console.log(aprovados);

aprovados = ['Bia', 'Ana', 'Carlos']
aprovados.splice(1, 1)
console.log(aprovados);

aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados);