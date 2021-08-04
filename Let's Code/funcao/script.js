/*function escreva(){
    console.log('Olá')
}
escreva()*/
/*function escreva(texto){
    console.log(texto)
}
escreva('Meu primeiro parametro')

escreva('Meu segundo parametro')*/
/*function somar(a,b){
        return a+b
}
let resultado = somar(1,3)
console.log(resultado)*/

/*const somar = function(a,b){return a+b}

console.log(somar(1,3))*/

/*const subtrair = (a,b)=> a - b //funçao de alta ordem
const aplicaOperacao = (a, b, operacao) => operacao(a,b)

let resultafo = aplicaOperacao(4, 2, subtrair)
console.log(resultado)*/

const somarX = (x) => (y) => x +y
const somar2 = somarX(2)

console.log(somar2(5))
