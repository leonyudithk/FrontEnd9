let formulario = document.getElementById('formulario')
let btnGuardar = document.getElementById('btnGuardar')


window.addEventListener('DOMContentLoaded', ()=>{
 
})

formulario.addEventListener('submit', (e)=> {
   e.preventDefault()

    const name = document.getElementById('name').value
    const lastName= document.getElementById('lastName').value
    const email = document.getElementById('email').value
     console.log(name, lastName, email)
    fetch('http://localhost:4000/usuario', {
        method: 'POST',
        body: JSON.stringify({
            nombre: name,
            apellido:lastName,
            correo: email
        }),
        headers:{ 
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then((resp)=> console.log(resp))
   
})

