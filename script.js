const URL = 'https://fakestoreapi.com/products'

document.addEventListener("DOMContentLoaded", function (e) {
    fetchData(URL)
})

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    products = data
}


function showProducts() {

}

function stars(cantidad) {

}

function cutString(string) {

}
