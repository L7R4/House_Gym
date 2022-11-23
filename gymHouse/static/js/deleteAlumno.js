const button_delete = document.querySelectorAll(".button_delete");
// const confirm_delete_container = document.querySelectorAll(".confirm_delete_container")
// let confirm_negative = document.querySelectorAll(".confirm_negative")

button_delete.forEach(element => {
    element.addEventListener("click", ()=>{
        let container_buttons = element.parentElement.children[3]
        container_buttons.classList.add("active")
        element.classList.add("desactivate")
    })
    let button_negative = element.parentElement.children[3].children[1].children[1]
    console.table(button_negative)
    button_negative.addEventListener("click", ()=>{
        button_negative.form.children[3].classList.remove("active")
        element.classList.remove("desactivate")
    })
    
});