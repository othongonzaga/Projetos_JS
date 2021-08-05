function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
    if(hora >=0 && hora < 12){
        msg.innerHTML += ', Bom dia'
        img.src = 'imgmanha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        msg.innerHTML += ', Boa tarde'
        img.src = 'imgtarde.jpg'
        document.body.style.background = 'gray'
    }else{
        msg.innerHTML += ', Boa noite'
        img.src= 'noite.jpg'
        document.body.style.background = 'black'
    }
}
