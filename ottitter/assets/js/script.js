const textarea = document.querySelector('textarea')
const tweetar = document.querySelector('button')
const feed = document.querySelector('.conteudoPrincipal__listaTweets')

function pegarTweet(event){
    event.preventDefault()

    const tweetTextarea = textarea.value
    criarTweet(tweetTextarea)
}
tweetar.addEventListener('click', pegarTweet )

function criarTweet(tweetTexto){
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()

    const tweet ={
        nome: 'Douglas',
        foto:'./assets/img/ProfilePic.png',
        usuario: '@douglasNunes',
        texto: tweetTexto,
        tempo: `${hora}:${minutos}`
    }

    listarTemplateTweet(tweet)
}

function listarTemplateTweet(tweet){
    const {nome, foto, usuario, texto, tempo} = tweet

    let li = document.createElement('li')
    li.classList.add('conteudoPrincipal__tweet')
    let img = document.createElement('img')
    img.src = foto
    img.classList.add('tweet__fotoPerfil')

    let div = document.createElement('div')
    div.classList.add('tweet__conteudo')
    let h2 = document.createElement('h2')
    h2.innerText = nome

    let span = document.createElement('span')
    span.innerText = `${usuario} ${tempo}`

    let p = document.createElement('p')
    let mudaHashtag = texto.replace(/(#[a-zA-Z0-9_]+\w+)/, '<span style="color:blue;"> $1 </span>')
    p.innerHTML = mudaHashtag

    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(p)
    li.appendChild(img)
    li.appendChild(div)
    feed.appendChild(li)

    textarea.value = ''
}