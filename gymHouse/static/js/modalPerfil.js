const modal_wrapper = document.querySelector(".perfil_bg--blur")
const modal_perfil = document.querySelector(".perfil_bg--gradient")
const button_profile = document.querySelector(".show-profile")

button_profile.addEventListener("click", ()=>{
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