class quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw 'informação não numérica'
        this.base = base
        this.altura = altura
        this.cor = undefined
    }
    calcularArea(){
        return this.altura*this.base
    }
    duplicaBase(){
        this.base = 2 * this.base
    }
}

const quadrado1 = new quadrado(11, 12)
quadrado.duplicaBase()
console.log(quadrado.calcularArea())