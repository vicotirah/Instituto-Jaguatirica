

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

const dropdown = document.getElementById('dropdownAnimais');
dropdown.addEventListener('click', function() {
  const subMenu = this.querySelector('.dropdown-menu');
  subMenu.classList.toggle('show');
});

const dropdownColab = document.getElementById('dropdownColab');
dropdownColab.addEventListener('click', function() {
  const subMenu = this.querySelector('.dropdown-menu');
  subMenu.classList.toggle('show');
});

const dropdownConta = document.getElementById('dropdownConta');
dropdownConta.addEventListener('click', function() {
  const subMenu = this.querySelector('.dropdown-menu');
  subMenu.classList.toggle('show');

})

const dropdownItem = document.getElementById('dropdownAnimaisDkt');
const dropdownMenu = dropdownItem.querySelector('.dropdown-menu-dkt');
dropdownItem.addEventListener('click', function(event) {
    const isVisible = dropdownMenu.classList.contains('visible'); // Verifica se o menu está visível
    if (isVisible) {
        dropdownMenu.classList.remove('visible'); // Esconde o menu
    } else {
        dropdownMenu.classList.add('visible'); // Exibe o menu
    }
}); 

const dropdownItemColab = document.getElementById('dropdownColabDkt');
const dropdownMenuColab = dropdownItemColab.querySelector('.dropdown-menu-dkt');
dropdownItemColab.addEventListener('click', function(event) {
    const isVisible = dropdownMenuColab.classList.contains('visible'); // Verifica se o menu está visível
    if (isVisible) {
        dropdownMenuColab.classList.remove('visible'); // Esconde o menu
    } else {
        dropdownMenuColab.classList.add('visible'); // Exibe o menu
    }
}); 

const dropdownItemConta = document.getElementById('dropdownContaDkt');
const dropdownMenuConta = dropdownItemConta.querySelector('.dropdown-menu-dkt');
dropdownItemConta.addEventListener('click', function(event) {
    const isVisible = dropdownMenuConta.classList.contains('visible'); // Verifica se o menu está visível
    if (isVisible) {
        dropdownMenuConta.classList.remove('visible'); // Esconde o menu
    } else {
        dropdownMenuConta.classList.add('visible'); // Exibe o menu
    }
}); 

