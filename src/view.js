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