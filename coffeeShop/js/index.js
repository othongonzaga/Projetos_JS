let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').addEventListener('click', () =>{
    navbar.classList.toggle('active')
    console.log('oi')
})

let cartItem = document.querySelector('.cart-items-container')

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active')
}