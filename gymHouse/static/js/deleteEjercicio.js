const button_delete = document.querySelectorAll(".button_delete_wrapper");


button_delete.forEach(element => {
    element.addEventListener("click", ()=>{
        let container_buttons = element.nextElementSibling
        container_buttons.classList.add("active")
        element.classList.add("desactivate")
        element.children[0].form.classList.add("active")
    })
    let button_negative = element.nextElementSibling.children[1].children[1]
    button_negative.addEventListener("click", ()=>{
        button_negative.form.children[3].classList.remove("active")
        element.classList.remove("desactivate")
        element.children[0].form.classList.remove("active")
    })
    
});