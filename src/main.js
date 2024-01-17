import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(example, renderItems(data), data);

/*
const buttonClear = document.querySelector("button[data-testid='button-clear']");
const buttonClearName = document.querySelector("button[data-testid='button-clearName']");

//let inputSearch = document.querySelector("input").innerHTML;
//inputSearch.addEventListener("input", deleteText)
buttonClear.addEventListener("click", deleteText);
buttonClearName.addEventListener("click", deleteName)
/*nada mas son ejemplos para llamar los dos botones/
function deleteText() {
  console.log("botón")
}
function deleteName() {
  console.log("name");
    
}*/
