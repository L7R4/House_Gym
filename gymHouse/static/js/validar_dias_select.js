const plan_mensual = document.querySelectorAll(".plan_mensual")
const plan_dias = document.querySelectorAll(".day")
const button_next = document.getElementById("first_button")
const button_finish = document.getElementById("second_button")
const button_back = document.getElementById("second_secondbutton")
let plan_selected = 0
console.log(plan_mensual)

plan_mensual.forEach(element => {
    element.addEventListener("click", function control_plan(){
        if (element.checked && element.value === "2 días/semana") {
            plan_selected = 2
            button_next.style.pointerEvents = "unset"
            button_next.onclick = ()=>{
                checkDays(plan_selected)
            }
            
        } else if(element.checked && element.value === "3 días/semana") {
            plan_selected = 3
            button_next.style.pointerEvents = "unset"
            button_next.onclick = ()=>{
                checkDays(plan_selected)
            }
            
            
        }
        else if(element.checked && element.value === "5 días/semana") {
            plan_selected = 5
            button_next.style.pointerEvents = "unset"
            button_next.onclick = ()=>{
                checkDays(plan_selected)
            }
        }
        
    })
});

function checkDays(number) {
    plan_dias.forEach(element =>{
        element.addEventListener("click", ()=>{
            
            if (diasSelect().length == number){

                diasUnSelect().forEach(e => {
                    e.style.pointerEvents = "none"
                
                });
                button_finish.style.pointerEvents = "unset"

            }else if(diasSelect().length < number){
        
                button_finish.style.pointerEvents = "none"
                diasUnSelect().forEach(e => {
                    e.style.pointerEvents = "unset"
                });
            }
            button_back.onclick = () =>{
                plan_dias.forEach(i => i.style.pointerEvents = "unset")
                removeSelectAndRestartValue()
            }
            
        })
    });
}

function diasUnSelect() {
    list = []
    plan_dias.forEach(element => {
        if(!element.classList.contains("select")){
            list.push(element)
        }
    });
    return list
}
function diasSelect() {
    list = []
    plan_dias.forEach(element => {
        if(element.classList.contains("select")){
            list.push(element)
        }
    });
    return (list)
}

function removeSelectAndRestartValue() {
    plan_dias.forEach(element => {
        element.classList.remove("select")
        element.children[2].children[0].children[1].value = 0
    })
}




