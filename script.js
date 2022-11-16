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
                <a href="${p.urlpag}" class="div-img-card a-proyectos">
                    <img src="${p.img}" class="card-img-top img-card" alt="${p.nombre}">
                </a>
                <div class="card-body">
                    <h4 class="titulo-card">${p.nombre}</h4>
                    <p class="texto-card">${p.descripcion}</p>
                    <h5 class="subtitulo-card">Herramientas:</h5>
                    <p class="herramientas-card">${p.herramientas}</p>
                    <a href="${p.urlgh}" class="a-proyectos">
                        <i class="fa-brands fa-github iconos-proyectos"></i>
                    </a>
                    <a href="${p.urlpag}" class="a-proyectos">
                        <i class="fa-solid fa-arrow-up-right-from-square iconos-proyectos"></i>
                    </a>
                </div>
            </div>
        `
    })
})