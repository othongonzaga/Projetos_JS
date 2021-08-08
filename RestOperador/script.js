function minhaLista(...nomes){
    console.log(nomes)
}

minhaLista('Othon', 'Matheus', 'João')

//----------------------------------------

function minhaLista(...numeros){
    console.log(numeros)
}

minhaLista(1, 2, 3, 4, 5)
 
//------------------------------------------

function cadastrar(usuarios, ...novosUsuarios){
    let totalUsuarios = [
        ...usuarios,
        ...novosUsuarios
    ]
    return console.log(totalUsuarios)
}

let usuarios = ['Othon', 'Matheus']
let novosUsuarios = cadastrar(usuarios, 'Henrique', 'Joao')