

var nome = ''

if(typeof localStorage.nome == 'undefined'){
    localStorage.nome = prompt('Digite seu nome')
}

document.getElementById('nome').innerHTML = nome


localStorage.lisa = ['Matheus', 23]
localStorage.idade = 23

// Também tem o sessionStorage