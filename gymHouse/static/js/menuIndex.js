const menu = document.querySelector('.icon-menu')
const menu_cruz = document.querySelector('.icon-cruz')
const navbar = document.querySelector('.menu-icons')
menu.addEventListener('click', ()=>{
    menu.classList.add('desactivate')
    menu_cruz.classList.add('active')
    navbar.classList.add('active')
    
})
menu_cruz.addEventListener('click', ()=>{
    navbar.classList.remove('active')
    menu_cruz.classList.remove('active')
    menu.classList.remove('desactivate')
})