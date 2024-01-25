import { computeStats, filterData, sortData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

let filteredData;
//const nav = document.getElementById("root");//llamarla y borrar su contenido para que al llamar la función aparezcan
const nav = document.querySelector('#root');
const buttonClear = document.querySelector("button[data-testid='button-clear']"); //botón limpiar filtros
const buttonSearch = document.querySelector("button[data-testid='button-search']");//buscar por nombre
const buttonClearName = document.querySelector("button[data-testid='button-clearName']"); //botón limpiar nombre
const order = document.querySelector("[data-testid='select-sort']");//para ordenar
const statistics = document.getElementById("statistics");//contenedor modal
const close = document.querySelector("#close");//cerrar modal
const details = document.querySelector("#details"); //abrir el modal
const filterGender = document.querySelector("[data-testid='select-filterGender']");
const filter = document.querySelector("[data-testid='select-filter']");
const inputName = document.getElementById("searchAnimal"); //llamar el input donde va el nombre
const filterPersonality = document.querySelector("[data-testid='select-filterPersonality']");
renderItems(data);
filteredData = data;

buttonClearName.addEventListener("click", function() {//con esto limpio el nombre escrito
  //inputName.value = " " + nav.textContent;
  inputName.value = "";
});

buttonClear.addEventListener("click", () => {//esto lo tengo que usar para limpiar los filtros
  console.log("hola");
  nav.innerHTML = "";
});

details.addEventListener("click", (e) => {
  statistics.showModal();//showModal es una función establecida para abrir el modal
  console.log("gola");
  //let prueba;
  const titleH2 = document.getElementById("stats");
  if (e.target === details ) {
    //prueba = computeStats(data);
    titleH2.innerHTML = computeStats(data);     //sustituir el h2 donde va el texto
    console.log("prueba", titleH2);
  }
})

close.addEventListener("click", function () {
  statistics.close(); 
})

order.addEventListener("change", (event) => {//ordenar
  let dataOrdered;//inicializar donde se estan guardando las tarjetas
  if (event.target.value === "asc") {
    nav.textContent = "";
    dataOrdered = sortData(data, "name", "asc");
  } if (event.target.value === "desc") {
    nav.textContent = "";
    dataOrdered = sortData(data, "name", "desc");
  }
  console.log("render", dataOrdered);
  renderItems(dataOrdered);
});


filterPersonality.addEventListener("click", (e) => {//filtro personalidad
  if(!e.target.value) {
    return;
  }
  nav.innerHTML = "";
  filteredData = filterData(filteredData, "personality", e.target.value);
  //filterResult.push(filterData(data, "gender", gender));
  renderItems(filteredData);
});


filter.addEventListener("click", (e) => {// CON ESTO FILTRO POR ESPECIES
  if(!e.target.value) {
    return;
  }
  nav.innerHTML = "";
  filteredData =  filterData(filteredData, "species", e.target.value);
  //filterResult.push(filterData(data, "gender", gender));  
  /*if (document.getElementById("specieDog").checked){
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Perro");
  }
  if (document.getElementById("specieSquirrel").checked){
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Ardilla");
  }
  if (document.getElementById("specieChicken").checked){
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Gallo");
  }
  if (document.getElementById("specieTiger").checked){
    console.log("hola");
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Tigre");
  }
  if (document.getElementById("specieMouse").checked){
    console.log("hola");
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Ratón");
  }
  if (document.getElementById("specieWolf").checked){
    console.log("hola");
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Lobo");
  }
  if (document.getElementById("specieDeer").checked){
    console.log("hola");
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Ciervo");
  }
  if (document.getElementById("specieDuck").checked){
    console.log("hola");
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Pato");
  }
  if (document.getElementById("specieCat").checked){
    console.log("hola");
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Gato");
  }
  if (document.getElementById("specieGoat").checked){
    console.log("hola");
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Cabra");
  }
  if (document.getElementById("specieBear").checked){
    console.log("hola");
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Oso");
  }
  if (document.getElementById("specieEagle").checked){
    console.log("hola");
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Águila");
  }
  if (document.getElementById("specieHorse").checked){
    console.log("hola");
    nav.innerHTML = "";
    filterResult = filterData(data, "species", "Caballo");
  }*/ 
  renderItems(filteredData);
});

filterGender.addEventListener("click", (e) => {//  CON ESTE CÓDIGO LLAMO AL FILTRAR POR GÉNERO
  if(!e.target.value) {
    return;
  }
  nav.innerHTML = "";
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

const filterNames = () => { //Buscador
  //console.log(inputName.value);
  nav.innerHTML = "";// debe iniciar vacio
  const dataNames = inputName.value.toLowerCase() //pasa todo a minuscula
  for (const items of data) { //recorrer la data
    const name = items.name.toLowerCase();
    if (name.indexOf(dataNames) !== -1) {// retonrna el indice del elemento dado o -1 si no esta, dentro del index va lo que vamos escribiendo el dataNames
      nav.innerHTML += `
      <dl>
      <img src=${items.imageUrl} alt=${items.name}/>      
      <dd>${items.name}</dd>
      <dd itemprop="species">${items.species}</dd>
      <dd itemprop="gender">${items.gender}</dd>
      <dd itemprop="personality">${items.personality}</dd>
      <dd itemprop="zodiacSign">${items.facts.zodiacSign}</dd>
      <dd itemprop="birthDate">${items.facts.birthDate}</dd>
      <dd itemprop="shortDescription">${items.shortDescription}</dd>
      </dl>
      `
    }
  } //si sigue vacio en nav
  if (nav.innerHTML === "") {// retorna el indice del elemento dado o -1 si no esta, dentro del index va lo que vamos escribiendo el dataNames
    nav.innerHTML += `
    <li>Sin resultados</li>
    `
  }
}
buttonSearch.addEventListener("click", filterNames);
inputName.addEventListener("keyup", filterNames) 
//filterNames();

/*
  if (e.target.matches(input)) {
    console.log(e.target.value);
  }
  /*if(e.target.inputName) {
    data.forEach(names => {
      console.log(names.textContent.toLowerCase().includes(e.target.value));
    })
  }*/
  

//funcion para iniciar init

//FUNCIÓN PARA LA ESTADISTICA
