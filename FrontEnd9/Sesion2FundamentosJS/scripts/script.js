//Capturas de Datos, validaciones para mi HTML

let saludo= document.getElementById('bienve')
let div= document.getElementsByClassName('ClaseDiv')
let lista = document.getElementsByTagName('li')


let saludo = document.querySelector('#bienve')
let div = document.querySelector('.ClaseDiv')
let lista = document.querySelectorAll('li')
console.log(saludo, div, lista)



//Creacion de la funcion enviar que modifica lo que tengo dentro del div
// function enviar(){

//     document.getElementById('nombre').innerHTML="Hola Soy Academia"
//     document.getElementById('geek').style.fontSize="55px"
// }


const enviar = () => {

    document.getElementById('nombre').innerHTML = "Hola Soy Academia"
    document.getElementById('geek').style.fontSize = "55px"
}



const CalcularUC = () => {
    let UC = 0;
    let matricula = 900000;
    let totalPagar = 0;
    UC = document.querySelector('#UC').value;

    if (UC < 6) {
        totalPagar = matricula - (matricula * 0.50)
        console.log('Total a Pagar', totalPagar)

    }
    else {
        if((UC>6) && (UC<10)) {
            totalPagar = matricula - (matricula * 0.25)
            console.log('Total a Pagar', totalPagar)
        }
        else{
            totalPagar = matricula
            console.log('Total a Pagar', totalPagar)
        }
    }
}

