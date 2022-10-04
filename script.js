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