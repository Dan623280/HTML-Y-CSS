/* BOTON HERO */
const boton = document.querySelector(".info button");

boton.addEventListener("click", () => {
    alert("Bienvenido al Festival Gastronómico Nocturno");
});


/* MENU CLICK */
const menu = document.querySelectorAll("nav ul li");

menu.forEach(opcion => {
    opcion.addEventListener("click", () => {
        alert("Sección: " + opcion.textContent);
    });
});


/* NEWSLETTER */
const formulario = document.querySelector("form");
const input = document.querySelector("input");

formulario.addEventListener("submit", function(e){
    e.preventDefault();

    if(input.value.trim() === ""){
        alert("Escribe tu correo");
    }else{
        alert("Suscripción exitosa");
        input.value = "";
    }
});