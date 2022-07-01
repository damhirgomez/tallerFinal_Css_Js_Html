const todos_pares = document.querySelectorAll(".par");
const todos_impares = document.querySelectorAll(".impar");
document.getElementById("theme").addEventListener("change", () => {
  const seleccion = document.querySelector("#theme option:checked").value;
  if (seleccion == 1) {
    todos_pares.forEach((par) => {
      par.classList.add("pares-activos");
    });
    todos_impares.forEach((impar) => {
      impar.classList.remove("impares-activo");
    });
    console.log("funciono!!!!");
  } else {
    todos_impares.forEach((impar) => {
      impar.classList.add("impares-activo");
    });
    todos_pares.forEach((par) => {
      par.classList.remove("pares-activos");
    });
    console.log("funciono!!!!");
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
};
