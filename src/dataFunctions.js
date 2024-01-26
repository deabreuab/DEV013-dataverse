/*El método sort es mutable y consiste en ordenar un array a partir de los valores Unicode de los caracteres y este retorna un array con la misma referencia en memoria que el original 
RECIBE 2 PARAMETROS A COMPARAR A Y B*/
/*De manera ascendente (a, b) => a - b   De manera descendente (a, b) => b - a */
export const sortData = (data, sortBy, sortOrder ) => {//aquí debo llamar lo que debe realizar que es el sort
  data.sort( (a, b) => {
    const valueA = a[sortBy];  
    const valueB = b[sortBy]; 
    const compare = valueA.localeCompare(valueB);//El método localeCompare(), PARA COMPARARLO EN ORDEN ALFABÉTICO es fundamental para tener una ordenación correcta
    return (sortOrder === "asc" ? compare : -compare);//operador ternario si el 1ro es true se cumple el asc si es false se hace lo contrario desc
  })
  return data;
};
//orderAnimal("asc", "desc");
//data nos entrega los datos
//sortby a cual de los campos de la data se quiere ordenar(name, id)
//sortOrder indica si se quiere ordenar ascendente o descendente(asc, desc)


/* FUNCIÓN DE FILTRADO SIN MAP*
export const filterData = (data, filterBy, value) => {
  let arraySpecies = 0; 
  //let arrayPersonality = 0;
  //let arrayGender = 0;
  
  const array = data.filter((item) => {
    if (item[filterBy] === value) {
      console.log(arraySpecies++);
      return arraySpecies;
    }
  })
  return array;

}

*/

/*if (item[filterBy] === value) {
  console.log(arrayPersonality++);
  return arrayPersonality;
  }
  if (item[filterBy] === value) {
    console.log(arrayGender++);
    return arrayGender;
    }*
    })
    console.log(array);
  return array;
/*
  let arrayAll = 0; //este código ya esta bien, filtra por género
  let arrayFemale = 0;
  let arrayMale = 0;
  let array;
  array = data.filter((item) => {
    if (item[filterBy] === value) {
      console.log(arrayFemale++); 
      return arrayFemale;
    }
    if (item[filterBy] === value) {
      console.log(arrayMale++);
      return arrayMale
    }
    if (item[filterBy] === value) {
      console.log(arrayAll++);
      return arrayAll;
    }
  })
  console.log(array);
  return array;*
}
*/



/* FILTRO TRATANDO DE USAR MAP*/
export const filterData = (data, filterBy, value) => {
  const array = data.filter((items => items[filterBy] === value));
  //el map usarlo para modificar el array solo regresar  los datos que estoy ocupando de la data
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
  })
  return filterMap;

  /*
  array = data.filter((items => items[filterBy] == value));
  array.map(item => {
    if (item[filterBy] == value);
    console.log(array);
    return array;
})*/

  //let arraySpecies = 0; 
  /*
  const array = data.filter((items => items[filterBy] == value));
    console.log(array);
    return array;*/

  //items[filterBy] === value;
  /*if ((items[filterBy] === value) === true) {
      items
      console.log(arraySpecies);
      return arraySpecies++;
    }
  console.log(array);//undefined
  console.log(arraySpecies);
  return arraySpecies;*/

  /*
  const array = data.map(items => items[filterBy] === value)
  console.log(array);//returna true y false
  return array
}*/

  //let array; 
  /*const array = data.map(items => items[filterBy]).filter((item) => {
    if (item[filterBy] === value) {
      console.log(arraySpecies++);
      return arraySpecies;
    }
  })con esto no sale error pero sale un array vacio
  console.log(array);
  console.log(arraySpecies);
  return array;*/
}


//USAR EL MAP PARA FILTRAR ELEMENTOS Y FILTRARLOS CON FILTER
//data nos entrega los datos (todos los datos)
//filterBy cual campo de la data se va a filtrar (genero)
//value valor de campo que queremos filtrar (femenino, todos me los regresa igual)

//usar map, reduce, filter, parseint
//AGREGAR UN BOTÓN EN HTML QUE DIGA LA ESTADISTICA

//fine para buscar

export const computeStats = (data) => {
  /*
 let acumuladorWomen = 0;
 let acumuladorMen = 1;
 data.reduce((sum, item) => {
  let totalPeople = acumuladorWomen + acumuladorMen;
  let women = (sum.acumuladorWomen / totalPeople) * 100;
  let men = (sum.acumuladorMen / totalPeople) * 100;
  if (item.gender === "Femenino") {
    console.log(sum = acumuladorWomen++); 
  }
  if (item.gender === "Masculino") {
    sum = acumuladorMen++;
  }
  console.log("suma", sum);
  console.log("women",women);
  return sum;
 })*/
  let acumuladorWomen = 0;
  let acumuladorMen = 0;
  return data.reduce((sum, item) => {
    if (item.gender === "Femenino") {
      //console.log(sum = acumuladorWomen++); 
      acumuladorWomen++;
    }
    if (item.gender === "Masculino") {
      acumuladorMen++;
    }
    const totalPeople = acumuladorWomen + acumuladorMen;
    const women =  (acumuladorWomen / totalPeople) * 100;
    const men =  (acumuladorMen / totalPeople) * 100;
    console.log(typeof women);
    //return sum;// no lo ocupe
    return `El porcentaje de personajes femeninos es: ${parseFloat(women.toFixed(2))}% y el porcentaje de personajes masculinos: ${parseFloat(men.toFixed(2))}%`;
  })
  /*
  let array;
  array = data.reduce((sum, item) => {
      if (item === "Femenino") {
        return sum++;
  }
  if(item === "masculino"){
    return sum++;
  }
 })
 array.map(item => {
  return {
    ...item,
    percentage: 100,
  }
  console.log(sum);
 })
*/



  //primero sumo totoal de personas=  data.gender + data.gender m+h
  //mujeres /totalpersonas * 100
  //hombres /totalpersonas * 100

  /*
 let acumuladorWomen = 0;
 let acumuladorMen = 0;
 data.reduce((sum, item) => {
  if (item.gender === "Femenino") {
    sum.acumuladorWomen++;
    //acumulador = sum.gender++; 
  }
  if (item.gender === "Masculino") {
    sum.acumuladorMen++;
    //return acumulador = sum.gender++;
    return sum;
  }
  const totalPeople = sum.acumuladorWomen + sum.acumuladorMen;
  let Women = (sum.acumuladorWomen / totalPeople) * 100;
  let men = (sum.acumuladorMen / totalPeople) * 100;
 } )
 console.log(acumuladorWomen);*/
}



/*
  inputName.addEventListener("keyup", (e) => {
    if (e.target.matches(data)) {
      console.log(e.target.value);
    }
  inputName.querySelectorAll(selector).forEach(element => {
    element.textContent.toLowerCase().includes(e.target.value)
  })
})
}*/
//}
/*
filterpasar el arreglo, filtrar el visualViewport, el llamdo en los parametros
hacerlo fijo
*/