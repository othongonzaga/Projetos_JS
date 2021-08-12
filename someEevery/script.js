let nome = ['Mateus', 'Othon', 'Lucas']

console.log(nome.some(nomes => nomes === 'Othon'))

//----------------------------------------------------

let pessoas = [
    {nome: 'Mateus', idade: 20},
    {nome: 'Othon', idade: 19},
    {nome: 'Joana', idade: 22}
]

console.log(pessoas.every(pessoa =>nome.idade >= 18))

if(pessoas.every(pessoa => nome.idade >= 18)){
    console.log('Todos são maiores de 18')
}else{
    console.log('Tem menor')
}