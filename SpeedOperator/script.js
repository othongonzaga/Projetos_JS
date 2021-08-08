let primeiros = [1, 2, 3]
let numeros = [...primeiros, 4, 5, 6] //Ele junta as informações

//--------------------------------------

let pessoa = {
    nome: "Othon",
    idade: 19,
    cargo: "Programador"
}

let novaPessoa = {
    ...pessoa,
    altura: 1.70,
    cidade: 'Feira Nova'
}

//------------------------------------------

function cadastroPessoa(info){
    let novosDados ={
        ...info,
        cargo: 'Programador',
        status: 1,
        cpf: '939930399'
    }
    return novosDados
}

console.log(cadastroPessoa({nome: 'Othon', sobrenome: 'Gonzaga'}))