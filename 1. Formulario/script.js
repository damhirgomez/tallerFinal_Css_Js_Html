const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");
const area_texto = document.querySelectorAll("#formulario textarea");

const campos = {
  nombre: false,
  correo: false,
  asunto: false,
  email: false,
};
const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  asunto: /^[a-zA-ZÀ-ÿ0-9_.+-\s]{1,100}$/,
  mensaje: /^[a-zA-ZÀ-ÿ0-9_.+-\s]{1,10000}$/,
};
const validarCampo = (expresion, input, campo, ultimo) => {
  if (expresion.test(input.value)) {
    document.getElementById(`${campo}`).classList.remove("incorrecto");
    document.getElementById(`${campo}`).classList.add("correcto");
    document
      .querySelector(`.${ultimo} .error-mensaje`)
      .classList.remove("error-mensaje-activo");
    campos[ultimo] = true;
  } else {
    document.getElementById(`${campo}`).classList.add("incorrecto");
    document
      .querySelector(`.${ultimo} .error-mensaje`)
      .classList.add("error-mensaje-activo");
  }
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
      validarCampo(expresiones.nombre, e.target, "nombre-box", "nombre");
      break;
    case "email":
      validarCampo(expresiones.correo, e.target, "email-box", "email");
      console.log("aca estoy!!");
      break;
    case "asunto":
      validarCampo(expresiones.asunto, e.target, "asunto-box", "asunto");
      console.log("aca estoy!!");
      break;
    case "mensaje":
      validarCampo(expresiones.mensaje, e.target, "mensaje-box", "mensaje");
      console.log("aca estoy!!");
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

area_texto.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  if (campos.nombre && campos.email && campos.asunto && campos.mensaje) {
    // formulario.reset();
    document
      .getElementById("formulario__mensaje-exito")
      .classList.add("formulario__mensaje-exito-activo");
    imprimirConsola("nombre: ", "nombre-box");
    imprimirConsola("correo: ", "email-box");
    imprimirConsola("asunto: ", "asunto-box");
    imprimirConsola("mensaje: ", "mensaje-box");
  }
});

const imprimirConsola = (referencia, nombreClase) => {
  console.log(
    `${referencia}` + " " + document.getElementById(`${nombreClase}`).value
  );
};
