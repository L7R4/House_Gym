let ejercicios = document.querySelectorAll(".ejer_container")
let form_child = document.querySelector(".ejercicio-pasos > form")
let ejercicios_in_div = document.querySelectorAll(".ejercicio-pasos > form > div > .ejercicios__wrapper > .ejercicio > label")
let ejercicio_text = document.querySelectorAll(".ejercicio-pasos > form > div > .ejercicios__wrapper > .ejercicio > p")
let ejercicios_text_arrays = [];
const button_submit = document.getElementById("button_submit_agregar_rutina")
button_submit.style.pointerEvents = 'none'


ejercicios.forEach(element => {
    element.addEventListener("click", ()=>{
        button_submit.style.pointerEvents = 'unset'
        let title_element = element.parentElement.parentElement.parentElement.children[0].children[0]

        let form_child_divs = document.querySelectorAll(".ejercicio-pasos > form > div ")
        let form_child_divs_arr = Array.from(form_child_divs)
        
        if (form_child_divs_arr.length == 0) {
            //Creo el div para meter en el form
            let crearDiv = document.createElement("div")
            let div_ejercicios =  document.createElement("div")
            //Seteo la clase segun el tipo de ejercicio
            crearDiv.setAttribute("class", title_element.textContent.toLowerCase()) 
            div_ejercicios.setAttribute("class", "ejercicios__wrapper") 
            ejer = element.cloneNode(true)
            ejer.children[0].checked = true
            crearDiv.appendChild(title_element.cloneNode(true))
            div_ejercicios.appendChild(ejer)
            crearDiv.appendChild(div_ejercicios)
            form_child.appendChild(crearDiv)
            // activar button
            
            
        }else{
            if (form_child.getElementsByClassName(title_element.textContent.toLocaleLowerCase()).length>0) {
                ejer = element.cloneNode(true)
                ejer.children[0].checked = true
                let div_general = form_child.getElementsByClassName(title_element.textContent.toLocaleLowerCase())[0]
                
                if(!ejercicios_text_arrays.includes(element.children[1].children[2].textContent)){
                    div_general.getElementsByClassName("ejercicios__wrapper")[0].appendChild(ejer)
                }

            }else{
                //Creo el div para meter en el form
                let crearDiv = document.createElement("div") 
                let div_ejercicios =  document.createElement("div")
                //Seteo la clase segun el tipo de ejercicio
                crearDiv.setAttribute("class", title_element.textContent.toLowerCase()) 
                div_ejercicios.setAttribute("class", "ejercicios__wrapper") 
                ejer = element.cloneNode(true)
                ejer.children[0].checked = true
                crearDiv.appendChild(title_element.cloneNode(true))
                div_ejercicios.appendChild(ejer)
                crearDiv.appendChild(div_ejercicios)
                form_child.appendChild(crearDiv)
                form_child_divs_arr = document.querySelectorAll(".ejercicio-pasos > form > div ")
            }
        }

        ejercicios_in_div = document.querySelectorAll(".ejercicio-pasos > form > div > .ejercicios__wrapper > .ejer_container > label")
        ejercicio_text = document.querySelectorAll(".ejercicio-pasos > form > div > .ejercicios__wrapper > .ejer_container > p")
      
        ejercicios_text_arrays.push(element.children[1].children[2].textContent)


        let cant_div_types = document.querySelectorAll(".ejercicio-pasos > form > div > .ejercicios__wrapper")
        ejercicios_in_div.forEach(e =>{
            e.children[0].addEventListener("click", ()=>{
                let validate_button = document.querySelectorAll(".ejercicio-pasos > form > div")
                e.parentElement.remove()
                ejercicios_text_arrays = ejercicios_text_arrays.filter((ejer) => ejer !== e.children[2].textContent)

                cant_div_types.forEach(div =>{
                    if(div.childElementCount==0){
                        div.parentElement.remove()
                    }
                })
                if (validate_button.length == 0) {
                    button_submit.style.pointerEvents = 'none'
                }

            })
        })
        

    })
 
});




