//Declarar variables
let menuButton=document.querySelector("#menu-button");
let responsiveMenu=document.querySelector("#responsive-menu")

//Chequear si se hace click en el boton
menuButton.addEventListener("click", ()=>{
    responsiveMenu.style.display="block"
})