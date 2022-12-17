let navbar = document.querySelector('.navbar')
let menu = document.querySelector('#menu-btn')

// let menu = document.getElementById('menu-btn')
menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')

}

window.addEventListener('scroll', () => {
    menu.classList.remove('fa-times')    
    navbar.classList.remove('active')
})