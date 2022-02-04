
//2 capturar el boton enviar
let boton = document.getElementById('btnEnviar');
//3 llamar al controlador de eventos
boton.addEventListener('click',capturaDatos)

function capturaDatos(){
    let nombre = document.querySelector('#inputNombre').value;
    let apellido = document.querySelector('#inputApellido').value;
    let telefono = document.getElementById('inputTelefono').value;
    let direccion = document.getElementById('inputDireccion').value;
    
    guardarLocalStorage(nombre,apellido,telefono,direccion);
    console.log(nombre,apellido,telefono,direccion);
}

function guardarLocalStorage(nom,ape,tel,dir){

    localStorage.setItem('Nombre',nom);
    localStorage.setItem('Apellido',ape);
    localStorage.setItem('Teléfono',tel);
    localStorage.setItem('Dirección',dir);
    listarData();
} 

//capturar la lista
let listar = document.getElementById('listar');


//capturamos el formulario
let form = document.getElementById('form');




//cargar la lista al cargar el DOM
//document.addEventListener('DOMContentLoaded',listarData)

//5 llamar al escuchador del evento
form.addEventListener('submit',formSumbit)

//6 funcion para prevenir el evento por defecto
function formSumbit(e){
    e.preventDefault();
  }

  function listarData(){
    
    let nombre = localStorage.getItem('Nombre');
    let apellido = localStorage.getItem('Apellido');
    let telefono = localStorage.getItem('Teléfono');
    let direccion = localStorage.getItem('Dirección');

    listar.innerHTML = `
    <table class="table">
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Teléfono</th>
        <th>Dirección</th>
      </tr>
      <tr>
         <td>${nombre}</td>
         <td>${apellido}</td>
         <td>${telefono}</td>
         <td>${direccion}</td>
      </tr>
     </table>
    `;
}
