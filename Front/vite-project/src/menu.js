
const btnMenu = document.getElementById("hamburguer-button")
const menu =document.getElementById("menu")

btnMenu.classList.add("hamburguer-button-js-enabled")
menu.classList.add("menu-closed")
btnMenu.setAttribute("aria-expanded", "false")
menu.setAttribute("aria-hidden", "true")


btnMenu.addEventListener("click", function(){

    let expanded = this.getAttribute("aria-expanded") === "true" ? true : false

    if (expanded){
        menu.classList.add("menu-closed")
    } else {
        menu.classList.remove("menu-closed")
    }

    this.setAttribute("aria-expanded", !expanded)
    menu.setAttribute("aria-hidden", expanded)
})