const button_profile_responsive = document.querySelector(".navigation ul li > .perfil")
button_profile_responsive.addEventListener("click", ()=>{
    disableScroll()
    modal_wrapper.classList.toggle("active")
    modal_perfil.classList.toggle("active")
    if (modal_wrapper.classList.contains("active")) {
        window.addEventListener('scroll', disableScroll);
    }else{
        window.removeEventListener('scroll', disableScroll);
    }
})

function disableScroll(){  
    window.scrollTo(0, 0);
}