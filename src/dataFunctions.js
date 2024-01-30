export const sortData = (data, sortBy, sortOrder ) => {
  data.sort( (a, b) => {
    const valueA = a[sortBy];  
    const valueB = b[sortBy]; 
    const compare = valueA.localeCompare(valueB);
    return (sortOrder === "asc" ? compare : -compare);
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
    return acumuladorMen;
  }, 0);
  
  const acumuladorWomen = data.reduce((acumuladorWomen, item) => {
    if (item.gender === "Femenino") {
      acumuladorWomen++;
    }
     return acumuladorWomen;
  }, 0);
  const totalMen = parseFloat((acumuladorMen/data.length)*100).toFixed(2); 
  const totalWomen = parseFloat((acumuladorWomen/data.length)*100).toFixed(2); 
  console.log(typeof totalMen, totalWomen);
  return `Porcentaje personajes Masculinos ${totalMen}% porcentaje personajes femeninos ${totalWomen}%`
};