let herramientas = document.getElementById('herramientas')

async function traerLenguajes() {
    return (await fetch('lenguajes.json')).json();
}

async function traerProyectos() {
    return (await fetch('proyectos.json')).json();
}

traerLenguajes().then(info => {
    info.forEach((len) => {
        herramientas.innerHTML += `
            <div class="col-sm-5 col-10 card-herr" id="${len.id}">
                <i class="${len.icono} iconos-hab" style="color: ${len.color}"></i>
                <p>${len.nombre}</p>
            </div>
        `
    })
})

let proyectos = document.getElementById('proyectos')

traerProyectos().then(proy => {
    proy.forEach((p) => {
        proyectos.innerHTML += `
            <div class="card col-sm-4 col-10 card-proyectos" style="width: 18rem;">
                <img src="${p.img}" class="card-img-top" alt="${p.img}">
                <div class="card-body">
                    <h5 class="card-title">${p.nombre}</h5>
                    <p class="card-text">${p.descripcion}</p>
                    <a href="#">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="#">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
            </div>
        `
    })
})