
let buttons_disminuir = document.querySelectorAll(".disminuir")
let buttons_aumentar = document.querySelectorAll(".aumentar")

buttons_disminuir.forEach(element =>{
    element.nextElementSibling.value = 0
    element.addEventListener("click", ()=>{
        element.nextElementSibling.value --
        if (element.nextElementSibling.value == 8) {
            element.nextElementSibling.value = 21
        }else if(element.nextElementSibling.value == 13){
            element.nextElementSibling.value = 10
        }
    })
})
buttons_aumentar.forEach(element =>{
    element.addEventListener("click", ()=>{
        element.previousElementSibling.value  ++
        if (element.previousElementSibling.value == 22) {
            element.previousElementSibling.value = 9
        }else if(element.previousElementSibling.value == 11){
            element.previousElementSibling.value = 14
        }
    })
})

