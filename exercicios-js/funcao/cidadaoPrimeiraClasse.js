/* Function in JS is first-Class Object (Citizens)
   Higher-order function */

//criacao de forma literal
function func1(){}

//armazenar em uma variavel
const func2 = function () {}

//armazenar em um array
const array = [function (a, b){ return a + b}, func1, func2]
console.log(array[0](2, 4))

// Armazenar dentro de um atributo de um objeto
const obj = {}
obj.falar = function () { return 'Opa!'}
console.log(obj.falar())

//como passar uma function como parametro de outra function
function run (fun) {
    fun()
}

run(function () {console.log('Executando');})

function soma(a, b){
    return function(c){
        console.log(a + b + c);
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)