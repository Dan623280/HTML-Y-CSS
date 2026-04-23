
function mostrarMenu() {
    let menu = document.getElementById("aside");

    if (menu.style.display === "none") {
        menu.style.display = "flex";
        menu.style.position = "fixed";
        menu.style.top = "0";
        menu.style.padding = "30px 40px";
        menu.style.flexDirection = "column";
    } else {
        menu.style.display = "none";
    }
}

