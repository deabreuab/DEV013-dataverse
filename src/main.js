import { computeStats, filterData, sortData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

renderItems(data);
let filteredData;
const nav = document.querySelector('#root'); 
const buttonClearFilter = document.querySelector("button[data-testid='button-clear']"); 
const inputSearchAnimal = document.getElementById("searchAnimal"); 
const buttonClearName = document.querySelector("button[data-testid='button-clearName']"); 
const order = document.querySelector("[data-testid='select-sort']");
const statistics = document.getElementById("statistics");
const closeModal = document.querySelector("#close");
const openModal = document.querySelector("#openModal");
const seeMoreModal = document.querySelector("#seeMoreModal");
const seeMoreClose = document.querySelector("#seeMoreClose");
const dialogModal = document.querySelector("#dialogModal");
const filterGender = document.querySelector("[data-testid='select-filterGender']");
const filterSpecie = document.querySelector("[data-testid='select-filter']");
const filterPersonality = document.querySelector("[data-testid='select-filterPersonality']");
filteredData = data; 

buttonClearFilter.addEventListener("click", () => {
  nav.innerHTML = "";
  renderItems(data);
});

openModal.addEventListener("click", (e) => {
  statistics.showModal();
  const titleH2 = document.getElementById("stats");
  if (e.target === openModal ) {
    titleH2.innerHTML = computeStats(data);
  }
});

closeModal.addEventListener("click", ()=> {
  statistics.close(); 
});

seeMoreModal.addEventListener("click", ()=> { //boton ver mas desde JS abre, solo falta mostrar la información
  console.log('hola');
  dialogModal.showModal();
  let containerModalSeeMore = document.getElementById("containerModalSeeMore");
  if (e.target === seeMoreModal) {
    containerModalSeeMore.innerHTML = "";
  }
});
seeMoreClose.addEventListener("click", ()=> {
  dialogModal.close();
})

order.addEventListener("change", (event) => {
  nav.textContent = "";
  filteredData = sortData(filteredData, "name", event.target.value);
  nav.textContent = "";
  filteredData = sortData(filteredData, "name", event.target.value);
  renderItems(filteredData);
});


filterPersonality.addEventListener("click", (e) => {
  if(!e.target.value) {
    return;
  }
  nav.innerHTML = "";
  filteredData = filterData(filteredData, "personality", e.target.value);
  renderItems(filteredData);
});


filterSpecie.addEventListener("click", (e) => {
  if(!e.target.value) {
    return;
  }
  nav.innerHTML = "";
  filteredData =  filterData(filteredData, "species", e.target.value);
  renderItems(filteredData);
});

filterGender.addEventListener("click", (e) => {
  if(!e.target.value) {
    return;
  }
  nav.innerHTML = "";
  
  filteredData =  filterData(filteredData, "gender", e.target.value);
 
  renderItems(filteredData);
});


const filterNames = () => { 
  nav.innerHTML = "";
  const dataNames = inputSearchAnimal.value.toLowerCase() 
  for (const items of data) { 
    const name = items.name.toLowerCase();
    if (name.indexOf(dataNames) !== -1) {
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
    }
  } 
  if (nav.innerHTML === "") {
    nav.innerHTML += `
    <li>Sin resultados</li>`
  }
};
inputSearchAnimal.addEventListener("keyup", filterNames); 
buttonClearName.addEventListener("click", function() {
  nav.innerHTML = "";
  renderItems(data);
});



//prueba para meter fondos al cargar la página carguen las tarjetas con los fondos correspondientes

