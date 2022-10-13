const peso1 = 1.0
const peso2 = Number('2.0') 

const avaliacao1 = 9.25446
const avaliacao2 = 8.9985343

const total =  avaliacao1 * peso1 + avaliacao2 + peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString())

console.log(typeof media)