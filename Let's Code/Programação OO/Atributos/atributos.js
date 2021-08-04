class quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw 'informação não numérica'
        this.base = base
        this.altura = altura
        this.cor = undefined
    }
}

const quadrado1 = new quadrado(11, doze)
quadrado.cor = 'blue' 
console.log(quadrado1)