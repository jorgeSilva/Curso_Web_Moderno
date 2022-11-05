function rand({min = 0, max = 100}){
    const valor = Math.random() * (max - min ) + min
    return Math.floor(valor)
}

const obj = ({max: 50, min: 40})
console.log(rand(obj))

const entreDoiseCem = ({max: 100, min: 2})
console.log(rand(entreDoiseCem)); 

const valorRandom = (min = 0, max = 1000) => {
    const valor = Math.random() * (max - min)
    return Math.floor(valor)
}

console.log(valorRandom({max:20, min:5}));