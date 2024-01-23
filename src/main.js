import { renderItems } from "./view.js";
import { filtrarVecinos } from "./dataFunctions.js";

import data from "./data/dataset.js";
let selectedGender = "Cualquiera";
let selectedSpecies = [];
let selectedPersonalities = [];
let selectedSort = "";

const selectGender = document.querySelector("#gender");
const selectPersonality = document.querySelectorAll(
  'input[name="personality"]'
);
const selectSpecie = document.querySelectorAll('input[name="species"]');

// const selectSort = document.querySelector("#sort"); aquí estaba probando como funcionaría desde el DOM todo junto 

// selectSort.addEventListener("change", () => {
//   selectedSort = selectSort.value;
//   const dataFiltrada = filtrarVecinos(
//     data,
//     selectedGender,
//     selectedSpecies,
//     selectedPersonalities,
//     selectedSort
//   );
//   renderItems(dataFiltrada);
// });

selectGender.addEventListener("change", () => {
  selectedGender = selectGender.value;
  const dataFiltrada = filtrarVecinos(
    data,
    selectedGender,
    selectedSpecies,
    selectedPersonalities,
    selectedSort
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
    selectedSort
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
    selectedSort
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
