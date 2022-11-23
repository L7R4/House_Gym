let url = window.location.pathname
const menu_sections = document.querySelectorAll(".list")
const indicators = document.querySelectorAll(".indicator")
const indicators_2 = document.querySelectorAll(".indicator")[1]
const button_perfil = document.getElementById("perfil")

if (url.includes("profe")) {
    removeActive()
    inicio.classList.add("active")
    inicio.children[1].classList.add("active")
}
else if (url.includes("user")) {
    removeActive()
    inicio.classList.add("active")
    inicio.children[1].classList.add("active")
}
else if (url.includes("ejercicios")) {
    removeActive()
    entrenar.classList.add("active")
    entrenar.children[1].classList.add("active")
}
else if (url.includes("noticias")) {
    removeActive()
    noticias.classList.add("active")
    noticias.children[1].classList.add("active")
}
else if (url.includes("turnos")) {
    removeActive()
    turnos.classList.add("active")
    turnos.children[1].classList.add("active")
}
else if (url.includes("alumnos")) {
    removeActive()
    alumnos.classList.add("active")
    alumnos.children[1].classList.add("active")
}

button_perfil.addEventListener("click", () =>{
    removeActiveIndicators()
    removeActive()
    button_perfil.classList.toggle("active")
    button_perfil.children[1].classList.toggle("active")
    if (!modal_wrapper.classList.contains("active")) {
        removeActiveIndicators()
        removeActive()
        if (url.includes("profe")) {
            removeActive()
            inicio.classList.add("active")
            inicio.children[1].classList.add("active")
        }
        else if (url.includes("user")) {
            removeActive()
            inicio.classList.add("active")
            inicio.children[1].classList.add("active")
        }
        else if (url.includes("ejercicios")) {
            removeActive()
            entrenar.classList.add("active")
            entrenar.children[1].classList.add("active")
        }
        else if (url.includes("noticias")) {
            removeActive()
            noticias.classList.add("active")
            noticias.children[1].classList.add("active")
        }
        else if (url.includes("turnos")) {
            removeActive()
            turnos.classList.add("active")
            turnos.children[1].classList.add("active")
        }
        else if (url.includes("alumnos")) {
            removeActive()
            alumnos.classList.add("active")
            alumnos.children[1].classList.add("active")
        }
    }
})


function removeActive() {
    menu_sections.forEach(element => {
        
        if (element.classList.contains(".perfil_nav")) {
            return;
        }
        
        element.classList.remove("active")
    });
} 
function removeActiveIndicators() {
    indicators.forEach(element => {
        if (element.classList.contains(".perfil_nav")) {
            return;
        }
        element.classList.remove("active")
    });
}