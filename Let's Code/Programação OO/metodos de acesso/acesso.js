/*class quadrado{
    constructor(lado, altura){
        let cor = 'blue'
        this.lado = lado
        this.altura = altura
        this.getCor = () => {return cor}
        this.setCor = (c) => {cor = c}    
    }
}

const quadrado1 = new quadrado(3,4)
quadrado.setCor('red')
console.log(quadrado.getCor())*/

class quadrado{
    constructor(lado, altura){
        this._cor = 'blue'
        this.lado = lado
        this.altura = altura
    }
    get cor() {return this._cor}
    set cor(cor) {this._cor = cor}
}

const quadrado1 = new quadrado(3,4)
quadrado.cor = 'red'
console.log(quadrado.cor)