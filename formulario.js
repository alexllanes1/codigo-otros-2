//Selecciona los datos que se registren en el formulario y los guarda en la variable formulario
var formulario = document.querySelector("#form")

//Al momento de darle submit este realiza la fucnion 
formulario.onsubmit = function(e) {

  e.preventDefault(); //Finalizar el preventDefault

  //variables donde se guardan elementos del formulario. (Nombre, edad y nacionalidad)
  var n = formulario.elements[0] //Nombre
  var ed = formulario.elements[1] //Edad
  var na = formulario.elements[2] //Nacionalidad

  //Los valores se le asignan a otras variables
  var nombre = n.value
  var edad = ed.value

  //Se le asigna a i la nacionalidad que se escogió
  var i = na.selectedIndex
  var nacionalidad = na.options[i].value

  //Mostrar en la consola los valores de las variables
  console.log(nombre, edad)
  console.log(nacionalidad)

  //Si el nombre no tiene valor regresar un error
  if (nombre.length === 0) {
    n.classList.add("error")
  }
  //Si la edad es menor a 18 y mayor a 120 regresar un error
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

  //Si el largo del nombre es mayor a 0, la edad entre 18 y 120 instanciar un nuevo invitado.
if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

//crea un boton para eliminar a los invitados
var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"

//Crea un salto de linea
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

//Funcion para agregar invitados
function agregarInvitado(nombre, edad, nacionalidad) {

  //Cambiar los valores guardados en nacionalidad por el nombre completo del gentilicio
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

//Variable lista, el id no existe en el HTML
var lista = document.getElementById("lista-de-invitados")

//Crea un div
var elementoLista = document.createElement("div")

//Se le añade al elemento lista una clase
elementoLista.classList.add("elemento-lista")

//Append Child
lista.appendChild(elementoLista)

//Crear elementos span, input y br
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

//Funcion para crear elementos
function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)

/*
Codigo repetido
var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);*/

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}