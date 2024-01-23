import { filterData, sortData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

renderItems(data);//corregir a función para llamar desde el views
const nav = document.getElementById("root");//llamarla y borrar su contenido para que al llamar la función aparezcan
const article = document.getElementsByTagName("article");
const buttonClear = document.querySelector("button[data-testid='button-clear']"); //botón limpiar filtros
const buttonClearName = document.querySelector("button[data-testid='button-clearName']"); //botón limpiar nombre
const order = document.querySelector("[data-testid='select-sort']");//para ordenar
const statistics = document.getElementById("statistics");//contenedor modal
const close = document.getElementById("close");//cerrar modal
const details = document.getElementById("details"); //abrir el modal
const filter = document.querySelector("[data-testid='select-filterGender']");
const inputName = document.getElementById("searchAnimal"); //llamar el input donde va el nombre

buttonClearName.addEventListener("click", function() {//con esto limpio el nombre escrito
  inputName.value = "";
});
buttonClear.addEventListener("click", (e) => {//esto lo tengo que usar para limpiar los filtros
  //e.target.value = "";
  //let event = e.target.value = " ";
  //return event = renderItems(data);//e.target.value = "" + renderItems(data);//` ${renderItems(data)}` 
  location.reload();//recarga la página limpiando los filtros y ordenar
  /*nav.reset();
  return false;*/
});
details.addEventListener("click", () => {
  statistics.showModal();
})
close.addEventListener("click", function () {
  statistics.close();
  
})

order.addEventListener("change", (event) => {//
  let dataOrdered;//inicializar donde se estan guardando las tarjetas
  if (event.target.value === "asc") {
    nav.textContent = "";
    dataOrdered = sortData(data, "name", "asc");
  } if (event.target.value === "desc") {
    nav.textContent = "";
    dataOrdered = sortData(data, "name", "desc");
  }
  console.log("render", renderItems(dataOrdered));
  return renderItems(dataOrdered);
})


order.addEventListener("change", (event) => {//
  const nav = document.getElementById("root");//llamarla y borrar su contenido para que al llamar la función aparezcan
  let dataOrdered;//inicializar donde se estan guardando las tarjetas
  if (event.target.value === "asc") {
    console.log("hola funciona", example(data, "name", "asc"));
    dataOrdered = example(data, "name", "asc");
  } if (event.target.value === "desc") {
    console.log("adios funciona");
    dataOrdered = example(data, "name", "desc");
  }
  console.log("render", renderItems(dataOrdered));
  console.log("main", data);
  return renderItems(dataOrdered);

  //return data.textContent = event.target.value;

})

*/