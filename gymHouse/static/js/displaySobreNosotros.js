const sections = document.querySelectorAll(".seccion")

sections.forEach(element =>{
    element.addEventListener("click", ()=>{
        element.children[1].classList.toggle("active")
    })
})