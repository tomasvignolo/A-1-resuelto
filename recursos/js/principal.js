// Importar tienda.js
import tienda from "./tienda.js";

const articulos = tienda.articulos;

// Crear variable para almacenar el html de la vista
let html = "";

articulos.forEach((articulo) => {
    html += `
    <article class="articulo">
        <figure class="articulo__fig">
            <img src="${articulo.imagen}" alt="${articulo.nombre}" />
        </figure>
        <div class="articulo__datos">
            <h3>${articulo.nombre}</h3>
            <div>$ ${articulo.precio}</div>
        </div>
    </article>`;
});

const contenedor = document.getElementById("contenedor-articulos");
contenedor.innerHTML = html;
