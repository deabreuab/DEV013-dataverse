// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
export const sortData = (data, sortBy, sortOrder) => {
  //aquí debo llamar lo que debe realizar que es el sort
  data.sort((a, b) => {
    const valueA = a[sortBy];
    const valueB = b[sortBy];
    const compare = valueA.localeCompare(valueB);
    return sortOrder === "asc" ? compare : -compare; //operador ternario
  });
  return data;
};

export const filterData = (data, filterBy, value) => {
  console.log(data);
  const array = data.filter((items => items[filterBy] === value));
  const filterMap = array.map(item => {
    return {
      name: item.name,
      species: item.species,
      personality: item.personality,
      gender: item.gender,
      imageUrl: item.imageUrl,
      facts:{birthDate: item.facts.birthDate, zodiacSign: item.facts.zodiacSign},
    };
  });
  return filterMap;
};

export const computeStats = (data) => {
  const acumuladorMen = data.reduce((acumuladorMen, item) => {
    if (item.gender === "Masculino") {
      acumuladorMen++;
    }
    console.log(acumuladorMen);
    return acumuladorMen;
  }, 0);

  const acumuladorWomen = data.reduce((acumuladorWomen, item) => {
    if (item.gender === "Femenino") {
      acumuladorWomen++;
    }
    console.log(acumuladorWomen);
    return acumuladorWomen;
  }, 0);
  const totalMen = parseFloat((acumuladorMen / data.length) * 100).toFixed(2);
  const totalWomen = parseFloat((acumuladorWomen / data.length) * 100).toFixed(
    2
  );
  console.log(typeof totalMen, totalWomen);
  return `Porcentaje personajes masculinos: ${totalMen}% \nPorcentaje personajes femeninos: ${totalWomen}%`; // \n se usa para hacer un salto de linea en un texto
};
