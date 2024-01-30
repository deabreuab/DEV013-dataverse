import { computeStats, filterData, sortData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';
//ctrl + k + c
//ctrl + k + u
renderItems(data);//contiene la data incial
let filteredData;
const nav = document.querySelector('#root'); //contenedor
const buttonClearFilter = document.querySelector("button[data-testid='button-clear']"); //botón limpiar filtros
const inputSearchAnimal = document.getElementById("searchAnimal"); //llamar el input donde va el nombre
const buttonClearName = document.querySelector("button[data-testid='button-clearName']"); //limpiar nombre de inputSearchAnimal
const order = document.querySelector("[data-testid='select-sort']");//para ordenar
const statistics = document.getElementById("statistics");//contenedor modal dialog
const closeModal = document.querySelector("#close");//cerrar modal
const openModal = document.querySelector("#openModal"); //botón abrir el modal
const seeMoreModal = document.querySelector("#seeMoreModal"); // para abrir la opcion de ver mas en las tarjetas
const seeMoreClose = document.querySelector("#seeMoreClose"); //cerrar ver más
const dialogModal = document.querySelector("#dialogModal"); //contenedor del modal ver más
const filterGender = document.querySelector("[data-testid='select-filterGender']");
const filterSpecie = document.querySelector("[data-testid='select-filter']");
const filterPersonality = document.querySelector("[data-testid='select-filterPersonality']");
filteredData = data; //acomplar la inf de la base de datos para usarla de manera interna, ya la uso de forma que quiera, para mantener la data filtrada()

buttonClearFilter.addEventListener("click", () => {//esto lo tengo que usar para limpiar los filtros
  nav.innerHTML = "";
  filteredData = data;
  let radioButton = document.querySelectorAll('input[type="radio"]');
  console.log(radioButton);
  radioButton.forEach(item => item.checked = false );
  //falta que se quite la marca de los botones, el valor queda guardado, se debe resetar los valores no guardar
  renderItems(data);
});/*
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

order.addEventListener("change", (event) => {
  nav.textContent = "";
  filteredData = sortData(filteredData, "name", event.target.value);
  nav.textContent = "";
  filteredData = sortData(filteredData, "name", event.target.value);
  renderItems(filteredData);
});


filterPersonality.addEventListener("click", (e) => {//filtro personalidad
  if(!e.target.value) {//para que al dar clic fuera no haga nada
    return;
  }
  nav.innerHTML = "";
  filteredData = filterData(filteredData, "personality", e.target.value);//filteredData me esta guardando los filtros, si al filtrar quedan 10, se filtra sobre eso
  //filterResult.push(filterData(data, "gender", gender));
  renderItems(filteredData);
});


filterSpecie.addEventListener("click", (e) => {// CON ESTO FILTRO POR ESPECIES
  if(!e.target.value) {
    return;
  }
  nav.innerHTML = "";
  filteredData =  filterData(filteredData, "species", e.target.value);
  renderItems(filteredData);
});

filterGender.addEventListener("click", (e) => {//  CON ESTE CÓDIGO LLAMO AL FILTRAR POR GÉNERO
  if(!e.target.value) {
    return;
  }
  nav.innerHTML = "";//si es masculino que me muestre el contenido, si es mujer que me muetre el contenido
  //filterdData = "";
  filteredData =  filterData(filteredData, "gender", e.target.value);
  renderItems(filteredData);
});


const filterSearchNames = () => { //Buscador
  //console.log(inputSearchAnimal.value);
  nav.innerHTML = "";// debe iniciar vacio
  let dataNames = inputSearchAnimal.value.toLowerCase() //pasa todo a minuscula
  let filteredNames = filteredData.filter(item => item.name.toLowerCase().includes(dataNames))
  //item => item.name.toLowerCase().indexOf(dataNames) !== -1
  renderItems(filteredNames);
 
  
  /*for (const items of data) { //recorrer la data
    const name = items.name.toLowerCase();//name referencia a la data
  
    if (name.indexOf(dataNames) !== -1) {// retorna el indice del elemento dado o -1 si no esta, dentro del index va lo que vamos escribiendo el dataNames
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
      </dl>  `
    }*/
  } //si sigue vacio en nav
  if (nav.innerHTML === "") {// retorna el indice del elemento dado o -1 si no esta, dentro del index va lo que vamos escribiendo el dataNames
    nav.innerHTML += `
    <li>Sin resultados</li>`
  }


inputSearchAnimal.addEventListener("keyup", filterSearchNames); 

// buttonClearName.addEventListener("click", function(e) {//con esto limpio el nombre escrito
//   e.target.value = inputSearchAnimal.value = "";
//   nav.innerHTML = "";
//   renderItems(data);//corregir al dar clic me aparecen todos y el que busque
// });
//filterSearchNames();

/*
  if (e.target.matches(input)) {
    console.log(e.target.value);
  }
  /*if(e.target.inputName) {
    data.forEach(names => {
      console.log(names.textContent.toLowerCase().includes(e.target.value));
    })
  }*/
  

// ESTE ES EL QUE USO PARA ABRIR EL MODAL DE LA ESTADISTICA, DE MOMENTO NO ME ABRE, VOY A BUSCAR LA FALLA
/*
openModal.addEventListener("click", (e) => {  
  statistics.showModal();
  computeStats(data)
  const titleH2 = document.getElementById("stats");
  if (e.target === openModal ) {
    titleH2.innerHTML = computeStats(data);
  }
});

closeModal.addEventListener("click", ()=> {
  statistics.close(); 
});*/






// import { renderItems } from "./view.js";
// import { filtrarVecinos } from "./dataFunctions.js";

// import data from "./data/dataset.js";
// let selectedGender = "Cualquiera";
// let selectedSpecies = [];
// let selectedPersonalities = [];
// let selectedSort = "";
// let searchText = "";

// const selectGender = document.querySelector("#gender");
// const selectPersonality = document.querySelectorAll(
//   'input[name="personality"]'
// );
// const selectSpecie = document.querySelectorAll('input[name="species"]');
// const selectSort = document.querySelector("#sort");
// const searchBar = document.querySelector('#search')

// searchBar.addEventListener("keyup", () => {
//   searchText = searchBar.value
//   const dataFiltrada = filtrarVecinos(
//     data,
//     selectedGender,
//     selectedSpecies,
//     selectedPersonalities,
//     selectedSort,
//     searchText
//   )
//   renderItems(dataFiltrada);
// })


// selectSort.addEventListener("change", () => {
//   selectedSort = selectSort.value;
//   const dataFiltrada = filtrarVecinos(
//     data,
//     selectedGender,
//     selectedSpecies,
//     selectedPersonalities,
//     selectedSort,
//     searchText
//   );
//   renderItems(dataFiltrada);
// });

// selectGender.addEventListener("change", () => {
//   selectedGender = selectGender.value;
//   const dataFiltrada = filtrarVecinos(
//     data,
//     selectedGender,
//     selectedSpecies,
//     selectedPersonalities,
//     selectedSort,
//     searchText
//   );
//   // const dataFiltrada = filterBy(data, "gender", selectedGender)
//   renderItems(dataFiltrada);
// });

// const checkboxPersonality = () => {
//   const valoresEnArray = Array.from(selectPersonality);
//   const valoresFiltrados = valoresEnArray.filter(
//     (checkbox) => checkbox.checked
//   );
//   selectedPersonalities = valoresFiltrados.map((checkbox) => checkbox.value);
//   const dataFiltrada = filtrarVecinos(
//     data,
//     selectedGender,
//     selectedSpecies,
//     selectedPersonalities,
//     selectedSort,
//     searchText
//   );
//   renderItems(dataFiltrada);
// };

// const checkboxSpecie = () => {
//   const valoresEnArray = Array.from(selectSpecie);
//   const valoresFiltrados = valoresEnArray.filter(
//     (checkbox) => checkbox.checked
//   );
//   selectedSpecies = valoresFiltrados.map((checkbox) => checkbox.value);
//   const dataFiltrada = filtrarVecinos(
//     data,
//     selectedGender,
//     selectedSpecies,
//     selectedPersonalities,
//     selectedSort,
//     searchText
//   );
//   renderItems(dataFiltrada);
// };

// selectPersonality.forEach((checkbox) => {
//   checkbox.addEventListener("change", checkboxPersonality);
// });

// selectSpecie.forEach((checkbox) => {
//   checkbox.addEventListener("change", checkboxSpecie);
// });

// renderItems(data);
