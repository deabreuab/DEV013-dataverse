export const sortData = (data, sortBy, sortOrder ) => {//aquí debo llamar lo que debe realizar que es el sort
  data.sort( (a, b) => {
    const valueA = a[sortBy];  
    const valueB = b[sortBy]; 
    const compare = valueA.localeCompare(valueB);
    return (sortOrder === "asc" ? compare : -compare);//operador ternario
  })
  return data;
};

export const filterData = (data, filterBy, value) => {
  let arraySpecies = 0; 
    const array = data.filter((item) => {
    if (item[filterBy] === value) {
      console.log(arraySpecies++);
      return arraySpecies;
    }
  })
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
    console.log(typeof women);
    console.log(typeof parseFloat(women.toFixed(2)), typeof parseFloat(men.toFixed(2)));
    //return sum;// no lo ocupe
    return `El porcentaje de personajes femeninos es: ${parseFloat(women.toFixed(2))}% y el porcentaje de personajes masculinos: ${parseFloat(men.toFixed(2))}%`;
  })
};