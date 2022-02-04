import { heroes } from "./data.js"

const main = document.getElementById('main')

showMovies(heroes)

function showMovies(hero) {
    main.innerHTML = ''
    hero.forEach((hero) => {
        
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${hero.image}" alt="">
            <div class="movie-info">
                <h3>${hero.name}</h3>
                <span class="green">0.9</span>
            </div>
            <div class="overview">
                <h3>overview</h3>
               ${hero.first_appearance}
            </div>
        `
        main.appendChild(movieEl)
    });
}

//-- Funcion de buscar

//Capturamos el formulario
const form = document.getElementById('form')

//Escuchamos el evento submit en el formulario
form.addEventListener('submit', (e)=> {
    //Capturamos el evento que hace refrescar la pagina y lo detenemos
    e.preventDefault();

    //Capturamos la palabra escrita en el input
    const search = document.querySelector('#search').value;

    //Usamos un .filter para que nos genere un nuevo array con el resultado de los heroes que correspondan a la busqueda
    const resultado = heroes.filter(heroe=> heroe.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

    //Llamamos a la funcion que pinta en pantalla los heroes pero le pasamos el nuevo array con el resultado de la busqueda
    showMovies(resultado)
})