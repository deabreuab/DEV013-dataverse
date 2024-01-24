// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
const sortData = (data, sortBy, sortOrder) => {
  //aquí debo llamar lo que debe realizar que es el sort
  data.sort((a, b) => {
    const valueA = a[sortBy];
    const valueB = b[sortBy];
    const compare = valueA.localeCompare(valueB);
    return sortOrder === "asc" ? compare : -compare; //operador ternario
  });
  return data;
};

export const filtrarVecinos = (
  vecinos,
  generoSeleccionado,
  especieSeleccionada,
  personalidadSeleccionada,
  sortSeleccionado,
  searchText
) => {
  console.log("generoSeleccionado = ", generoSeleccionado);
  console.log("Especie seleccionada = ", especieSeleccionada);
  console.log("personalidad seleccionada = ", personalidadSeleccionada);
  console.log("El orden seleccionado es = ", sortSeleccionado);
  console.log("El texto recibido es = ", searchText)
  
  let vecinosFiltrados = vecinos;
  if (generoSeleccionado !== "Cualquiera") {
    vecinosFiltrados = vecinosFiltrados.filter(
      (vecino) => vecino.gender === generoSeleccionado
    );
  }

  if (especieSeleccionada.length > 0) {
    vecinosFiltrados = vecinosFiltrados.filter((vecino) =>
      especieSeleccionada.includes(vecino.species)
    );
  }

  if (personalidadSeleccionada.length > 0) {
    vecinosFiltrados = vecinosFiltrados.filter((vecino) =>
      personalidadSeleccionada.includes(vecino.personality)
    );
  }

  if (searchText.length > 0) {
    let busqueda = searchText.toLowerCase();

    vecinosFiltrados = vecinosFiltrados.filter((vecino) => {
      let nombre_vecino = vecino.name.toLowerCase();
      if (nombre_vecino.includes(busqueda)) {
        return vecino;
      }
    });
  }

  if (sortSeleccionado === "az") {
    vecinosFiltrados = sortData(vecinosFiltrados, "name", "asc");
  } else if (sortSeleccionado === "za") {
    vecinosFiltrados = sortData(vecinosFiltrados, "name", "desc");
  }

  return vecinosFiltrados;
};
