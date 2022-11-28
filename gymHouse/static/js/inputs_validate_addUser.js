const inputs = document.querySelectorAll(".input")
const inputs_array = Array.from(inputs)
const input_edad = document.querySelector('#edad');

window.addEventListener("keypress", function(event){
    if (event.keyCode == 13){
        event.preventDefault();
    }
}, false);

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
        let inputs_active = inputs_array.filter(i => i.classList.contains('active'))
        if (inputs_active.length == 5) {
            console.log("entro al lehtg")
            data_button.style.pointerEvents = "unset"
        }else{
            data_button.style.pointerEvents = "none"
        }
    })
})


input_edad.addEventListener('keypress', function (e){
	if (!soloNumeros(e)){
  	e.preventDefault();
  }
})

//Solo permite introducir numeros.
function soloNumeros(event){
    var key = event.charCode;
    return key >= 48 && key <= 57;
}
