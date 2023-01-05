const menuemail = document.querySelector(".navbar-email");//seleccionamos los elementos que queramos se incluyan para modificarlos.
const menumovil = document.querySelector(".desktop-menu");//seleccionamos los elementos que queramos se incluyan para modificarlos.
const menuhamburguesa = document.querySelector(".mobile-menu");
const desktopmenu = document.querySelector(".menu");
const shopingCart = document.querySelector(".navbar-shopping-cart");
const shopingCartMovil = document.querySelector(".product-detail");
const cardContainer =document.querySelector(".cards-container");

menuemail.addEventListener("click" , toggleDesktopMenu);//creamos la funcion para que el elemento que tenga la clase inactive desaparezca al hacerle pointer al elemento en este caso al email.
desktopmenu.addEventListener("click", toggleMenuHmburguesa);
shopingCart.addEventListener("click", toggleMenuCart);

function toggleDesktopMenu(){
    menumovil.classList.toggle("inactive");
}
//classList.toggle habilita o desabilita la clase inactive dependiendo si esta en uso o no.

function toggleMenuHmburguesa(){
   
    const isMenuCartClosed = shopingCartMovil.classList.contains("inactive");
    if(!isMenuCartClosed){
        shopingCartMovil.classList.add("inactive");
        }
        menuhamburguesa.classList.toggle("inactive");

}
function toggleMenuCart(){
    
    const ismenuhamburclosed = menuhamburguesa.classList.contains("inactive");
   
    if  (!ismenuhamburclosed){
            menuhamburguesa.classList.add("inactive");
           }
           shopingCartMovil.classList.toggle("inactive");
}
const productList = [];
productList.push({
        name: "Bike",
        prize: 100,
        imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "Notebook",
    prize: 1000,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "cell",
    prize: 300,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  name: "tv",
  prize: 400,
  imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  name: "ball",
  prize: 60,
  imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

for (product of productList){

    const createcarddiv = document.createElement ("div");
    createcarddiv.classList.add("product-card");
    
    const imgProduct = document.createElement("img");
    imgProduct.setAttribute("src", product.imagen);
    
    const productInfo = document.createElement ("div");
    productInfo.classList.add("product-info");
    
    const productInfoDetails = document.createElement("div");
    
    const infoPrice = document.createElement("p");
    infoPrice.innerHTML = "$" + product.prize;
    const infoName = document.createElement("p");
    infoName.innerHTML = product.name;
    


    const divFigure = document.createElement("figure");
    const imgCart =document.createElement("img");
    imgCart.setAttribute( "src", "./icons/bt_add_to_cart.svg");

    divFigure.appendChild(imgCart);
    createcarddiv.appendChild(imgProduct);
    cardContainer.appendChild(createcarddiv);
    productInfoDetails.appendChild(infoPrice);
    productInfoDetails.appendChild(infoName);
    createcarddiv.appendChild(productInfo);
    productInfo.appendChild(productInfoDetails);
    productInfo.appendChild(divFigure);
  }
    
