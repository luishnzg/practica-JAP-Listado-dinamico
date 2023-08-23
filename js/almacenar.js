// Grupo: Agustín Cabrera, Agustín Vimercatti, Cristian Pérez, Luis Hernández, Mauro Rodríguez

let lista = [];

function mostrarListado() {
    document.getElementById("contenedor").innerHTML = "";
    if (localStorage.getItem("listado") != null) {
        lista = JSON.parse(localStorage.getItem("listado"));
        for (item of lista) {
            document.getElementById("contenedor").innerHTML += `<li>${item}</li>`;
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {

    mostrarListado();

    document.getElementById("agregar").addEventListener("click", function () {
        if (document.getElementById("item").value != "") {
            lista.push(document.getElementById("item").value);
            localStorage.setItem("listado", JSON.stringify(lista));
            mostrarListado();
            document.getElementById("item").value = "";
        }
    })

    document.getElementById("limpiar").addEventListener("click", function () {
        document.getElementById("contenedor").innerHTML = "";
        localStorage.removeItem("listado");
        lista = [];
    })
})