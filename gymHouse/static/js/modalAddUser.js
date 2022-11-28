const boton_modal = document.querySelector("#register-pupil");
const modal_plan = document.getElementById("planmensual--pop-up")
const modal_plan_0 = document.getElementById("pop-up--data")
const modal_plan_1 = document.getElementById("pop-up--first")
const modal_plan_2 = document.getElementById("pop-up--second")
const modal_plan_3 = document.getElementById("pop-up--third")

const close_modal = document.querySelector("#close_modal_plan")
const next_data = document.getElementById("data_button")

const next_plan = document.getElementById("first_button")
const atras_plan = document.getElementById("first_secondbutton")

const second_button = document.getElementById("second_button")
const second_secondbutton = document.getElementById("second_secondbutton")

// let data_inputs = document.querySelectorAll(".pop-up--data input")
// let data_inputs_to_array = Array.from(data_inputs)



// next_plan.addEventListener("click", () =>{
//     let list = data_inputs_to_array.filter(e => e.value == "")
//     console.log(list)
//     list.forEach(element=>{

//     })
    
// })

boton_modal.addEventListener("click",()=>{
    modal_plan.classList.add("active")
})

// primer pop-up
close_modal.addEventListener("click", ()=>{
    modal_plan.classList.remove("active")
})
next_data.addEventListener("click",()=>{
    modal_plan_0.classList.add("desactivate")
    modal_plan_1.classList.add("active")
})

// segundo pop_pup
next_plan.addEventListener("click", ()=>{
    modal_plan_1.classList.remove("active")
    modal_plan_2.classList.add("active")
})
atras_plan.addEventListener("click", ()=>{
    modal_plan_1.classList.remove("active")
    modal_plan_0.classList.remove("desactivate")
})


// tercer pop-up
second_button.addEventListener("click", ()=>{
    modal_plan_2.classList.remove("active")
    modal_plan_3.classList.add("active")
})
second_secondbutton.addEventListener("click", ()=>{
    modal_plan_2.classList.remove("active")
    modal_plan_1.classList.add("active")
})

// ultimo pop-up

function buttonHabilited() {
    
}
