const navMenu = document.getElementById('nav-menu'), 
navAlternancia = document.getElementById('nav-alternancia'), 
navClose = document.getElementById('nav-close')

const navLink = document.querySelectorAll('.nav__link')
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

const sections = document.querySelectorAll('section[id]')      

if(navAlternancia){
    navAlternancia.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
        console.log("clicou")
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

function scrollHeader(){
    // Quando a rolagem for maior que 100 de altura da janela de visualização, adicione a classe scroll-header à tag de cabeçalho
    const header = document.getElementById('header')
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

let swiper = new Swiper(".descobrir__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: -226,
    coverflowEffect: {
        rotate: 0,
    },
})

function playPause(){ 
    if (videoFile.paused){
        videoFile.play()
        // Mudando o ícone
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else {
        videoFile.pause(); 

        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')

    }
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// terminou, quando o vídeo termina
videoFile.addEventListener('ended', finalVideo)

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // Quando a rolagem for maior que 200 de altura da janela de visualização, adiciona a classe show-scroll à tag a com a classe scroll-up
    if(this.scrollY > 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// ------Dark Mode-------

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtemos o tema atual que a interface possui validando a classe dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-line'

// Validamos se o usuário já escolheu um tópico
if (selectedTheme) {
  // Se a validação for cumprida, perguntamos qual foi o problema para saber se ativamos ou desativamos o dark mode
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme)
}

// Ative/desative o tema manualmente com o botão
themeButton.addEventListener('click', () => {
    // Adicione ou remova o tema escuro / ícone
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})