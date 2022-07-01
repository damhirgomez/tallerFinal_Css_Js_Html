const main = () => {
  if (localStorage.getItem("theme")) {
    valorTema = localStorage.getItem("theme");
    console.log(valorTema);
    const valorCambiar = document.querySelector("#root");
    var rectificar = valorCambiar.classList;
    console.log(rectificar.length);
    if (rectificar.length > 0) {
      rectificar.remove("dark");
      rectificar.remove("light");
      rectificar.remove("original");
    }
    rectificar.toggle(valorTema);
  }
};

const Elem_acordeon = document.getElementsByClassName("menu-acordeon");

for (let i = 0; i < Elem_acordeon.length; i++) {
  Elem_acordeon[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
