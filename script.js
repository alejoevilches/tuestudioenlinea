//Declarar variables
let menuButton=document.querySelector("#menu-button");
let responsiveMenuSection=document.querySelector(".responsive-menu")

//Chequear si se hace click en el boton
menuButton.addEventListener("click", ()=>{
    console.log("gunciona")
    responsiveMenuSection.classList.toggle("responsive-menu-active");
})