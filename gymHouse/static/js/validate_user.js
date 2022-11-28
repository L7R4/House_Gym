const input_mail = document.querySelector("#input-group--email > input")
const alert_input = document.querySelector(".gmail_invalid")
console.log(alert_input)
fetch("/u/alumnos/admin",{
    method: 'get',
    headers: {'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/json' ,}
}).then(
    function(response){
        return response.json()
    }
).then(data =>{
    input_mail.addEventListener('change' ,()=>{
        let input_value = input_mail.value
        for (let i = 0; i < data.length; i++) {
            let element = data[i];
            if (input_value == element.correo ) {
                alert_input.classList.add("active")
                break;
            }
            else{
                alert_input.classList.remove("active")
            }
        }

    })
    
})
