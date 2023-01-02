const pessoa = {
    saudacao: "Hello",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() 

const falarDePessoas = pessoa.falar.bind(pessoa)
falarDePessoas()