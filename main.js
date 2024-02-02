
import { computeStats, filterData, sortData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

renderItems(data);
let filteredData;
const navRoot = document.querySelector('#root'); 
const buttonClearFilter = document.querySelector("button[data-testid='button-clear']"); 
const inputSearchAnimal = document.getElementById("searchAnimal"); 
const buttonClearName = document.querySelector("button[data-testid='button-clearName']"); 
const order = document.querySelector("[data-testid='select-sort']");
const filterGender = document.querySelector("[data-testid='select-filterGender']");
const filterSpecie = document.querySelector("[data-testid='select-filter']");
const filterPersonality = document.querySelector("[data-testid='select-filterPersonality']");
filteredData = [...data];

buttonClearFilter.addEventListener("click", () => {
  navRoot.innerHTML = "";
  order.selectedIndex = 0;
  filteredData = [...data];
  const radioButton = document.querySelectorAll('input[type="radio"]');
  radioButton.forEach(item => item.checked = false);
  renderItems(data);
});

order.addEventListener("change", (event) => {
  navRoot.textContent = "";
  filteredData = sortData(filteredData, "name", event.target.value);
  renderItems(filteredData);
});

filterPersonality.addEventListener("click", (e) => {
  if(!e.target.value) {
    return;
  }
  navRoot.innerHTML = "";
  filteredData = filterData(filteredData, "personality", e.target.value);
  
  renderItems(filteredData);
});

filterSpecie.addEventListener("click", (e) => {
  if(!e.target.value) {
    return;
  }
  navRoot.innerHTML = "";
  filteredData =  filterData(filteredData, "species", e.target.value);
  renderItems(filteredData);
});

filterGender.addEventListener("click", (e) => {
  if(!e.target.value) {
    return;
  }
  navRoot.innerHTML = "";
  filteredData =  filterData(filteredData, "gender", e.target.value);
  renderItems(filteredData);
});

const filterSearchNames = () => { 
  navRoot.innerHTML = "";
  const dataNames = inputSearchAnimal.value.toLowerCase() 
  const filterNames = filteredData.filter(item => item.name.toLowerCase().includes(dataNames));
  renderItems(filterNames); 
}

inputSearchAnimal.addEventListener("keyup", filterSearchNames); 
buttonClearName.addEventListener("click", function(e) {
  e.target.value = inputSearchAnimal.value = "";
  navRoot.innerHTML = "";
  renderItems(filteredData);
});
  
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#close");
const openModal = document.querySelector("#openModal"); 

openModal.addEventListener("click", function(event) {  
  modal.style.display = "block";
  const pageText = document.getElementById("page");
  if (event.currentTarget === openModal) {
    pageText.innerText = computeStats(data);
  }
});

closeModal.addEventListener("click", ()=> {
  modal.style.display = "none";
});

openModal.addEventListener("click", function(event) {  
  modal.style.display = "block";
  const pageText = document.getElementById("page");
  if (event.currentTarget === openModal) {
    pageText.innerText = computeStats(data);
  }
});

closeModal.addEventListener("click", ()=> {
  modal.style.display = "none";
});


