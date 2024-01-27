export const renderItems = (data) => {
  const nav = document.getElementById("root");
  const listUl = document.createElement("ul");
  data.forEach(element => {
    const listLi = document.createElement('li');
    listLi.setAttribute("itemscope", "")
    listLi.setAttribute("itemtype", "http://schema.org/Person")
    listLi.innerHTML = `
    <dl>
    <img src=${element.imageUrl} alt=${element.name}/>
    <dt>Nombre:</dt><dd itemprop="name">${element.name}</dd>
    <dt>Especies:</dt><dd itemprop="species">${element.species}</dd>
    <dt>Genero:</dt><dd itemprop="gender">${element.gender}</dd>
    <dt>Personalidad:</dt><dd itemprop="personality">${element.personality}</dd>
    <dt>Signo zodiacal:</dt><dd itemprop="zodiacSign">${element.facts.zodiacSign}</dd>
    <dt>Cumpleaños:</dt><dd itemprop="birthDate">${element.facts.birthDate}</dd>
    <dt>Descripción:</dt><dd itemprop="shortDescription">${element.shortDescription}</dd>
    </dl>`
    listUl.appendChild(listLi);
  });
  nav.appendChild(listUl)
};


/*
  const navRoot = document.getElementById("root");// id del nav donde van los elemento ul y li 
  const listUl = document.createElement("ul");// creación de etiqueta ul
  data.forEach(element => {
    const listLi = document.createElement("li");// creación de etiqueta li
    const listLiSpan = document.createElement("span");// creación de etiqueta span que va dentro del li para el contenido
    const image = document.createElement("img");// creación de etiqueta img
    image.src = element.imageUrl;// con esto se agrego el enlace a la imagen y el alt
    image.alt = element.name;
    listLi.setAttribute('itemscope', "");//con esto se le agrega el atributo a la etiqueta
    listLi.setAttribute("itemtype", "http://schema.org/Person'");
    listLiSpan.setAttribute('itemprop', "");//falta generar el nombre del itemprop
    //listLiSpan.setAttribute('itemprop', "species");//falta generar el nombre del itemprop
    listLiSpan.innerHTML = `
    Nombre: ${element.name} <br>
    Especie: ${element.species} <br>
    Personalidad: ${element.personality} <br>
    Genero: ${element.gender} <br>
    Signo zodiacal: ${element.facts.zodiacSign} <br>
    Cumpleaños: ${element.facts.birthDate} <br>
    Descripción: ${element.shortDescription} <br> `//aquí va todo el contenido que se va a incluir en el li con la etiqueta span
    /*listLi.textContent =  `
    Nombre: ${element.name}
    Especie: ${element.species}
    `;*
    //listLi.appendChild(image);
    listLi.appendChild(listLiSpan);
    listLiSpan.appendChild(image);
    listUl.appendChild(listLi);
    console.log(listUl);

  });
  return navRoot.appendChild(listUl);

};*/
