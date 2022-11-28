const inputs = document.querySelectorAll(".inputt")
console.log(inputs)

inputs.forEach(element =>{
    if (element.value != "") {
        element.classList.add("active")
    }
    element.addEventListener("change", ()=>{
        console.log("nashe")
        if (element.value == "") {
            console.log("entre al  if")
            element.classList.remove("active")
            element.classList.add("invalid")
        }else if(element.value != ""){
            console.log("entre al else if")
            element.classList.remove("invalid")
            element.classList.add("active")
        }
    })
})
