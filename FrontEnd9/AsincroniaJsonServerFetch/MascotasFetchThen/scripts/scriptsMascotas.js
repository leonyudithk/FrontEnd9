const btnGato = document.getElementById('btnGato')
const btnPerro = document.getElementById('btnperro')

btnGato.addEventListener('click', () => {
    SeleccionarMascota("http://localhost:4000/gatos")
})

btnPerro.addEventListener('click', () => {
    SeleccionarMascota("http://localhost:4000/perros")
})


const SeleccionarMascota = (url) => {
    
    const mostrarMascotas = document.querySelector('.grid-mascotas')

    mostrarMascotas.innerHTML =''

    // Como consumir esa URL

    fetch(url)
        .then((resp) => resp.json())
        .then(data => {
            data.forEach(mascota => {
                const { imagen, nombre, raza } = mascota
                mostrarMascotas.innerHTML += `
                <div class="card" style="width: 16rem;">
                        <img src="${imagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${nombre}</h5>
                        <p class="card-text">${raza}</p>
              
                    </div>
                </div>
                `
            });
        })




}