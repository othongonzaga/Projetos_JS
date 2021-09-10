const textarea = document.querySelector('textarea')
const tweetar = document.querySelector('button')

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
        foto:'./src/img/ProfilePic(2).png',
        usuario: '@douglasNunes',
        texto: tweetTexto,
        tempo: `${hora}:${minutos}`
    }
}