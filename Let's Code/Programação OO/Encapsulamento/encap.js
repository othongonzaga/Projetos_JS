/*function quadrado(base, altura){
    this.base = base
    this.altura = altura
    let cor = 'blue'
}

const quadrado1 = new quadrado(3, 4)
console.log(quadrado.cor)*/

/*function criaQuadrado(base, altura){
    let cor = 'blue'

    return{
        base,
        altura,
        getcor: function(){return cor}
    }
}

const quadrado = criaQuadrado(3,4)
quadrado.cor = 'red'
console.log(quadrado.getcor())*/

class quadrado{
    constructor(lado, altura){
        let cor = 'blue'
        this.lado = lado
        this.altura = altura
        this.getCor = () => {return cor}    
    }
}

const quadrado1 = new quadrado(3,4)
console.log(quadrado.getCor)