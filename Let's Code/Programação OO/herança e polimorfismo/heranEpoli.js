class pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

class cidadao extends pessoa{
    constructor(nome, idade, rg, cpf){
        super(nome, idade)
        this.rg = rg
        this.cpf = cpf 
    }
}

const cidadao1 = new cidadao('Lucas', 26, '000', '11111')
console.log(cidadao1)