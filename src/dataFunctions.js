// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
export const filtrarVecinos = (
  vecinos,
  generoSeleccionado,
  especieSeleccionada,
  personalidadSeleccionada,
  sortSeleccionado
) => {
  console.log("generoSeleccionado = ", generoSeleccionado);
  console.log("Especie seleccionada = ", especieSeleccionada);
  console.log("personalidad seleccionada = ", personalidadSeleccionada);
  console.log("El orden seleccionado es = ", sortSeleccionado);
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

  return vecinosFiltrados;
};
