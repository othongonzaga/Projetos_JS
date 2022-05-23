const navMenu = document.getElementById('nav-menu'), 
navAlternancia = document.getElementById('nav-alternancia'), 
navClose = document.getElementById('nav-close')

const navLink = document.querySelectorAll('.nav__link')

if(navAlternancia){
    navAlternancia.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
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

let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})