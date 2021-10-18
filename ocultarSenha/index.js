function ocultarSenha(senha){
    let senhaAux = ''
    for(let i = 0; i < senha.length; i++){
        senhaAux = '*'
    }

    return senhaAux
}

const usuario = {
    nome : 'othon',
    email: 'othoncesar1@hotmail.com',
    senha: '12345'
}