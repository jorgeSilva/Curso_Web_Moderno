const { type } = require("os");

const ferrari = {
    modelo: 'F40',
    velMax: 334
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}
console.log(ferrari.prototype);
console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

function MeuObjetos(){}
console.log(typeof Object, typeof MeuObjetos);
console.log(Object.prototype, MeuObjetos.prototype);