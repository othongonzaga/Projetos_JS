const pessoa ={
    nome = 'Othon',
    sobrenome = 'Gonzaga',
    idade = 19,
    cargo ='Desenvolvedor'
}

let {nome} = pessoa

let {idade, cargo} = pessoa

let {cargo:programador} = pessoa

// ---------------------------------

let nomes = ['Matheus', 'Felipe', 10]

let{1:segundoNome} = nomes 

let[nome, sobrenome, idade] = nomes

let[primeiroNome, segundo] = nomes