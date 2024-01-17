export const renderItems = (data) => {
  //console.log(data[0].id)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const navRoot = document.getElementById("root");
  const listUl = document.createElement("ul");
  //const image = document.createElement("img")
  data.forEach(element => {
    const listLi = document.createElement("li");
    listLi.textContent =  `Nombre: ${element.name}
     imagen: ${element.imageUrl}`;
    listUl.appendChild(listLi);

  });
  console.log(navRoot.appendChild(listUl));
  return navRoot.appendChild(listUl);
};