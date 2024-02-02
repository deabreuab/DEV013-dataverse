export const sortData = (data, sortBy, sortOrder) => {
  data.sort((a, b) => {
    const valueA = a[sortBy];
    const valueB = b[sortBy];
    const compare = valueA.localeCompare(valueB);
    return sortOrder === "asc" ? compare : -compare; 
  });
  return data;
};

export const filterData = (data, filterBy, value) => {
  const array = data.filter((items => items[filterBy] === value));
  return array;
};

export const computeStats = (data) => {
  const acumuladorMen = data.reduce((acumuladorMen, item) => {
    if (item.gender === "Masculino") {
      acumuladorMen++;
    }
    return acumuladorMen;
  }, 0);

  const acumuladorWomen = data.reduce((acumuladorWomen, item) => {
    if (item.gender === "Femenino") {
      acumuladorWomen++;
    }
    return acumuladorWomen;
  }, 0);
  const totalMen = parseFloat((acumuladorMen / data.length) * 100).toFixed(2);
  const totalWomen = parseFloat((acumuladorWomen / data.length) * 100).toFixed(2);
  return `Porcentaje personajes masculinos: ${totalMen}% \nPorcentaje personajes femeninos: ${totalWomen}%`;
};
