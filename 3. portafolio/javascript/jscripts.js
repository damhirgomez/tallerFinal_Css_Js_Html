const Selector = document.querySelector("#theme-select");

Selector.addEventListener("change", () => {
  var theme = Selector.value;

  switch (theme) {
    case "dark":
      localStorage.setItem("theme", "dark");
      break;
    case "light":
      localStorage.setItem("theme", "light");
      break;
    case "original":
      localStorage.setItem("theme", "original");
      break;
    default:
      localStorage.setItem("theme", "original");
      break;
  }
  if (localStorage.getItem("theme")) {
    valorTema = localStorage.getItem("theme");
    const valorCambiar = document.querySelector("#root");
    var rectificar = valorCambiar.classList;
    if (rectificar.length > 0) {
      rectificar.remove("dark");
      rectificar.remove("light");
      rectificar.remove("original");
    }
    rectificar.toggle(valorTema);
  }
});

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
  Selector.value = valorTema;
};
