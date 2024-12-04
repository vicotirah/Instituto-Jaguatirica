function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
function envioVoluntario(){
  alert("Dados enviados!")
}
function receberPix(){
  alert("Apadrinhamento selecionado! Mande o comprovante pelo nosso email!")
}