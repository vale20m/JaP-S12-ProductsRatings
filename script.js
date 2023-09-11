const URL = 'https://fakestoreapi.com/products';

document.addEventListener("DOMContentLoaded", function (e) {
    fetchData(URL);
    console.log(products);
});

let products = [];
const contenedor = document.querySelector("#products");

// TOMA LOS PRODUCTOS DE LA API Y LOS GUARDA EN UN ARREGLO "PRODUCTS"

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        for (const producto of data) {
            products.push(producto);
        }
        showProducts(products);
    } catch (error) {
        console.log ("Fetch error: ", error.message);
    }
}

// DEFINE EL COMO LOS PRODUCTOS SE VAN A MOSTRAR EN LA PAGINA, AGREGANDOLOS AL HTML
//class="position-absolute top-0 start-0"
//class="position-absolute top-0 start-0"
function showProducts(arreglo) {
    contenedor.innerHTML = "";
    for (const producto of arreglo) {
        contenedor.innerHTML +=
        `<div class="container border py-1 my-1 shadow-sm p-3 bg-body rounded">
            <h4>${cutString(producto.title)}</h4>
            <h6 class="fw-light">${getDate()}</h6>
        </div>`;
    }
}

function stars(cantidad) {

}

function cutString(titulo) {
    if (titulo.length < 20){

    }
    const tituloRecortado = titulo.length > 20 ? titulo.substring(0, 20) + "..." : titulo;
    return tituloRecortado;
}

function getDate(){
    const date = new Date();
    const fecha = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear() + ", " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return fecha;
}
