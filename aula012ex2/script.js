function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(sex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <=6){
                img.setAttribute('src', 'bebM.jpg')
            }else if(idade >= 7 && idade <= 12){
                img.setAttribute('src', 'crianM.jpg')
            }else if(idade >= 13 && idade <= 20){
                img.setAttribute('src', 'jovemM')
            }else if(idade >= 21 && idade <=55){
                img.setAttribute('src', 'adultoM.jpg')
            }else{
                img.setAttribute('src', 'idosoM.jpg')
            }
        }else{
            genero = 'Mulher'
            if(idade >=0 && idade <=6){
                img.setAttribute('src', 'bebF.jpg')
            }else if(idade > 0 && idade <= 12){
                img.setAttribute('src', 'crianF.jpg')
            }else if(idade >= 13 && idade <= 20){
                img.setAttribute('src', 'jovemF.jpg')
            }else if(idade >= 21 && idade <=55){
                img.setAttribute('src', 'adultoF.jpg')
            }else{
                img.setAttribute('src', 'idosoF.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
