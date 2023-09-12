const URL = 'https://fakestoreapi.com/products';

document.addEventListener("DOMContentLoaded", function (e) {
    fetchData(URL);
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

function showProducts(arreglo) {
    contenedor.innerHTML = "";
    for (const producto of arreglo) {
        contenedor.innerHTML +=
        `<div class="container border py-1 my-1 shadow-sm p-3 bg-body rounded">
            <h4>${cutString(producto.title)}</h4>
            <h6 class="fw-light">${getDate()}  ${stars(producto.rating.rate)}</h6>
        </div>`;
    }
}

// FUNCION QUE MUESTRA ESTRELLAS SEGUN LA PUNTUACION DEL PRODUCION (EN CASO DE ESTAR MAS CERCA DE .5 QUE DE UN ENTERO, AGREGA UNA MEDIA ESTRELLA)

function stars(cantidad) {
    let estrellas = "";
    let cont = 0;
    if (Math.abs(cantidad - Math.round(cantidad)) < 0.25){
        cantidad = Math.round(cantidad);
        while (cantidad > 0){
            estrellas += `<span class = "fa fa-star checked"></span>`;
            cantidad--;
            cont++;
        }
    } else {
        while (cantidad > 1){
            estrellas += `<span class = "fa fa-star checked"></span>`;
            cantidad--;
            cont++;
        }
        estrellas += `<span class = "fa fa-star-half-o checked"></span>`;
        cont++;
    }
    while (cont < 5){
        estrellas += `<span class = "fa fa-star unchecked"></span>`;
        cont++;
    }
    return estrellas;
}

// FUNCION QUE ACORTA EL TITULO EN CASO DE QUE EL MISMO SUPERE LOS 20 CARACTERES

function cutString(titulo) {
    let tituloModificado = titulo;
    if (titulo.length > 20){
        tituloModificado = "";
        for (let i = 0; i < 20; i++){
            tituloModificado += titulo[i];
        }
        tituloModificado += "...";
    }
    return tituloModificado;
}

// FUNCION QUE CONSIGUE LA FECHA Y HORA ACTUAL Y LA DEVUELVE COMO UN STRING

function getDate(){
    const date = new Date();
    const fecha = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear() + ", " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return fecha;
}
