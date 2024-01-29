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
  const array = data.filter((items => items[filterBy] === value));
  const filterMap = array.map(item => {
    return {
      name: item.name,
      species: item.species,
      personality: item.personality,
      gender: item.gender,
      shortDescription: item.shortDescription,
      imageUrl: item.imageUrl,
      facts:{birthDate: item.facts.birthDate, zodiacSign: item.facts.zodiacSign},
    };
  });
  return filterMap;
};

export const computeStats = (data) => {
  let acumuladorWomen = 0;
  let acumuladorMen = 0;
  return data.reduce((sum, item) => {
    if (item.gender === "Femenino") {
      acumuladorWomen++;
    }
    if (item.gender === "Masculino") {
      acumuladorMen++;
    }
    const totalPeople = acumuladorWomen + acumuladorMen;
    const women =  (acumuladorWomen / totalPeople) * 100;
    const men =  (acumuladorMen / totalPeople) * 100;
    return `El porcentaje de personajes femeninos es: ${parseFloat(women.toFixed(2))}% y el porcentaje de personajes masculinos: ${parseFloat(men.toFixed(2))}%`;
  });
  console.log(acumuladorMen);
};