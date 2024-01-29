export const renderItems = (data) => {
  const nav = document.querySelector("#root");
  const listUl = document.createElement("ul");
  data.forEach(element => {
    const listLi = document.createElement('li');
    listLi.setAttribute("class", "card");
    listLi.setAttribute("itemscope", "");
    listLi.setAttribute("itemtype", "http://schema.org/Person");
    listLi.innerHTML = `
      <dl>
      <img class="img" src=${element.imageUrl} alt=${element.name}/>
      <dt>Nombre:</dt><dd itemprop="name">${element.name}</dd>
      <div class="details">
      <dt>Especies:</dt><dd itemprop="species">${element.species}</dd>
      <dt>Genero:</dt><dd itemprop="gender" hidden>${element.gender}</dd>
      </div>
      <dt>Personalidad:</dt><dd itemprop="personality">${element.personality}</dd>
      <dt>Signo zodiacal:</dt><dd itemprop="zodiacSign" hidden>${element.facts.zodiacSign}</dd>
      <dt>Cumpleaños:</dt><dd itemprop="birthDate">${element.facts.birthDate}</dd>
      <dt>Descripción:</dt><dd itemprop="shortDescription" hidden>${element.shortDescription}</dd>
      <div>
        <button id="seeMoreModal"> Ver mas... </button>
        <dd class="descriptionSeeMore"> 
          <dialog id="dialogModal">
            <p id="containerModalSeeMore"> CONTENEDOR VER MAS</p>  
            <button id="seeMoreClose"> 
              <ion-icon name="close-circle-outline"></ion-icon>Cerrar
            </button> 
          </dialog> 
        </dd>
      </div>
      </dl>`
    listUl.appendChild(listLi);
  });
  nav.appendChild(listUl)
};
//AGREGAR CLASES A LAS LI


