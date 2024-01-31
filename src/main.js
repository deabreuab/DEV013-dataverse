
import { computeStats, filterData, sortData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';
//ctrl + k + c
//ctrl + k + u
//cursor encima de la palabra + f2
renderItems(data);//contiene la data incial
let filteredData;
const navRoot = document.querySelector('#root'); //contenedor
const buttonClearFilter = document.querySelector("button[data-testid='button-clear']"); //botón limpiar filtros
const inputSearchAnimal = document.getElementById("searchAnimal"); //llamar el input donde va el nombre
const buttonClearName = document.querySelector("button[data-testid='button-clearName']"); //limpiar nombre de inputSearchAnimal
const order = document.querySelector("[data-testid='select-sort']");//para ordenar
const filterGender = document.querySelector("[data-testid='select-filterGender']");
const filterSpecie = document.querySelector("[data-testid='select-filter']");
const filterPersonality = document.querySelector("[data-testid='select-filterPersonality']");
filteredData = data; //acomplar la inf de la base de datos para usarla de manera interna, ya la uso de forma que quiera, para mantener la data filtrada()
//navRoot.appendChild(renderItems(data));

buttonClearFilter.addEventListener("click", () => {//esto lo tengo que usar para limpiar los filtros
  navRoot.innerHTML = "";
  filteredData = data
  const radioButton = document.querySelectorAll('input[type="radio"]');
  radioButton.forEach(item => item.checked = false);
  renderItems(data);
});

order.addEventListener("change", (event) => {
  navRoot.textContent = "";
  filteredData = sortData(filteredData, "name", event.target.value);
  navRoot.textContent = "";
  filteredData = sortData(filteredData, "name", event.target.value);
  renderItems(filteredData);
});


filterPersonality.addEventListener("click", (e) => {//filtro personalidad
  if(!e.target.value) {//para que al dar clic fuera no haga nada
    return;
  }
  navRoot.innerHTML = "";
  filteredData = filterData(filteredData, "personality", e.target.value);//filteredData me esta guardando los filtros, si al filtrar quedan 10, se filtra sobre eso
  //filterResult.push(filterData(data, "gender", gender));
  renderItems(filteredData);
});

filterSpecie.addEventListener("click", (e) => {// CON ESTO FILTRO POR ESPECIES
  if(!e.target.value) {
    return;
  }
  navRoot.innerHTML = "";//sustituir por data filteredData
  filteredData =  filterData(filteredData, "species", e.target.value);
  //filteredData =  filterData(data, "species", e.target.value); para que no sea acumulativa
  renderItems(filteredData);
});

filterGender.addEventListener("click", (e) => {//  CON ESTE CÓDIGO LLAMO AL FILTRAR POR GÉNERO
  if(!e.target.value) {
    return;
  }
  navRoot.innerHTML = "";//si es masculino que me muestre el contenido, si es mujer que me muetre el contenido
  //filterdData = "";
  filteredData =  filterData(filteredData, "gender", e.target.value);
  /*if (document.getElementById("genderAll").checked){
    //nav.innerHTML;
    nav.innerHTML;//FALTA QUE LLAME A TODOS
    filterResult = filterData(data, "gender", "All");
    //return filterResult= event.target.value = filterData(data, "gender", "All")
  }
  if (document.getElementById("genderWomen").checked){
    nav.innerHTML = "";
    filterResult = filterData(data, "gender", "Femenino");
    //return filterResult = event.target.value = filterData(data, "gender", "Femenino");
  }
  if (document.getElementById("genderMasculine").checked){
    nav.innerHTML = "";
    //console.log(filterData(data, "gender", "Masculino"));
    filterResult = filterData(data, "gender", "Masculino");
    //return filterResult = event.target.value = filterData(data, "gender", "Masculino");
  }*/
  renderItems(filteredData);
});

const filterSearchNames = () => { //Buscador
  //console.log(inputSearchAnimal.value);
  navRoot.innerHTML = "";// debe iniciar vacio
  const dataNames = inputSearchAnimal.value.toLowerCase() //pasa todo a minuscula
  const filterNames = filteredData.filter(item => item.name.toLowerCase().includes(dataNames));
  renderItems(filterNames); 
}

inputSearchAnimal.addEventListener("keyup", filterSearchNames); 
buttonClearName.addEventListener("click", function(e) {//con esto limpio el nombre escrito
  e.target.value = inputSearchAnimal.value = "";
  navRoot.innerHTML = "";
  renderItems(filteredData);
});
  

// ESTE ES EL QUE USO PARA ABRIR EL MODAL DE LA ESTADISTICA, DE MOMENTO NO ME ABRE, VOY A BUSCAR LA FALLA
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#close");//cerrar modal
const openModal = document.querySelector("#openModal"); //botón abrir el modal
//const seeMoreModal = document.querySelector("#seeMoreModal"); // para abrir la opcion de ver mas en las tarjetas
// const seeMoreClose = document.querySelector("#seeMoreClose"); //cerrar ver más
// const dialogModal = document.querySelector("#dialogModal"); //contenedor del modal ver más

openModal.addEventListener("click", function(event) {  
  console.log("hola");
  //computeStats(data)
  modal.style.display = "block";
  const pageText = document.getElementById("page");//contenedor modal dialog
  if (event.currentTarget === openModal) {
    pageText.innerText = computeStats(data);
  }
});

closeModal.addEventListener("click", ()=> {
  modal.style.display = "none";
})

/*
seeMoreModal.addEventListener("click", (e)=> { //boton ver mas desde JS abre, solo falta mostrar la información
  dialogModal.showModal();
  const containerModalSeeMore = document.getElementById("containerModalSeeMore");
  if (e.target === seeMoreModal) {
    containerModalSeeMore.innerHTML = "";
  }
});
seeMoreClose.addEventListener("click", ()=> {
  dialogModal.close();
})*/


openModal.addEventListener("click", function(event) {  
  //computeStats(data)
  modal.style.display = "block";
  const pageText = document.getElementById("page");//contenedor modal dialog
  if (event.currentTarget === openModal) {
    pageText.innerText = computeStats(data);
  }
});

closeModal.addEventListener("click", ()=> {
  modal.style.display = "none";
})

/*
openModal.addEventListener("click", (e) => {  
  statistics.showModal();
  //computeStats(data)
  const titleH2 = document.getElementById("stats");
  if (e.target === openModal) {
    titleH2.innerHTML = computeStats(data);
  }
});

closeModal.addEventListener("click", ()=> {
  statistics.close(); 
});*/
/*
seeMoreModal.addEventListener("click", (e)=> { //boton ver mas desde JS abre, solo falta mostrar la información
  dialogModal.showModal();
  const containerModalSeeMore = document.getElementById("containerModalSeeMore");
  if (e.target === seeMoreModal) {
    containerModalSeeMore.innerHTML = "";
  }
});
seeMoreClose.addEventListener("click", ()=> {
  dialogModal.close();
})*/


