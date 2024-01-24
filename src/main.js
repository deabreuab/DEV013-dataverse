import { renderItems } from "./view.js";
import { filtrarVecinos } from "./dataFunctions.js";

import data from "./data/dataset.js";
let selectedGender = "Cualquiera";
let selectedSpecies = [];
let selectedPersonalities = [];
let selectedSort = "";
let searchText = "";

const selectGender = document.querySelector("#gender");
const selectPersonality = document.querySelectorAll(
  'input[name="personality"]'
);
const selectSpecie = document.querySelectorAll('input[name="species"]');
const selectSort = document.querySelector("#sort");
const searchBar = document.querySelector('#search')

searchBar.addEventListener("keyup", () => {
  searchText = searchBar.value
  const dataFiltrada = filtrarVecinos(
    data,
    selectedGender,
    selectedSpecies,
    selectedPersonalities,
    selectedSort,
    searchText
  )
  renderItems(dataFiltrada);
})


selectSort.addEventListener("change", () => {
  selectedSort = selectSort.value;
  const dataFiltrada = filtrarVecinos(
    data,
    selectedGender,
    selectedSpecies,
    selectedPersonalities,
    selectedSort,
    searchText
  );
  renderItems(dataFiltrada);
});

selectGender.addEventListener("change", () => {
  selectedGender = selectGender.value;
  const dataFiltrada = filtrarVecinos(
    data,
    selectedGender,
    selectedSpecies,
    selectedPersonalities,
    selectedSort,
    searchText
  );
  // const dataFiltrada = filterBy(data, "gender", selectedGender)
  renderItems(dataFiltrada);
});

const checkboxPersonality = () => {
  const valoresEnArray = Array.from(selectPersonality);
  const valoresFiltrados = valoresEnArray.filter(
    (checkbox) => checkbox.checked
  );
  selectedPersonalities = valoresFiltrados.map((checkbox) => checkbox.value);
  const dataFiltrada = filtrarVecinos(
    data,
    selectedGender,
    selectedSpecies,
    selectedPersonalities,
    selectedSort,
    searchText
  );
  renderItems(dataFiltrada);
};

const checkboxSpecie = () => {
  const valoresEnArray = Array.from(selectSpecie);
  const valoresFiltrados = valoresEnArray.filter(
    (checkbox) => checkbox.checked
  );
  selectedSpecies = valoresFiltrados.map((checkbox) => checkbox.value);
  const dataFiltrada = filtrarVecinos(
    data,
    selectedGender,
    selectedSpecies,
    selectedPersonalities,
    selectedSort,
    searchText
  );
  renderItems(dataFiltrada);
};

selectPersonality.forEach((checkbox) => {
  checkbox.addEventListener("change", checkboxPersonality);
});

selectSpecie.forEach((checkbox) => {
  checkbox.addEventListener("change", checkboxSpecie);
});

renderItems(data);
