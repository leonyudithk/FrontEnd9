import { apiHeroes } from "./dataHeroes.js";
const main = document.getElementById('main')
console.log(apiHeroes)

//creamos la funcion para pintar las tarjetas
const showMovies = (Heroes) =>{

    main.innerHTML = ``

    // recorrido de el arreglo de objetos
    Heroes.forEach(element => {
        //desestructuracion
        const {name, image, first_appearance} = element

        const pintarDiv = document.createElement('div')
        pintarDiv.classList.add('movies')

        pintarDiv.innerHTML = `
        <img src="${image}" alt="">
        <div class="movie-info">
            <h3>${name}</h3>
            <span class="green">0.8</span>
        </div>
        <div class="overview">
            <h3>overview</h3>
            ${first_appearance}
        </div>
        `
        main.appendChild(pintarDiv)
    });
}


//llamando a pintar las tarjetas y le estoy pasando la api que quiero que pinte
showMovies(apiHeroes)

// Funcion Buscar
//capturo el fromulario
const form =document.getElementById('form')

//escuhar los eventos para submit de el formulario
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    //capturo el valor o lo que escriben en el search o input
    const search = document.getElementById('search').value;
    
    //realizo la busqueda
    const busqueda = apiHeroes.filter(heroe => heroe.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

    //llamo a la funcion para que pinte las tarjetas que conicidierron con la busqueda
    showMovies(busqueda)

} )

