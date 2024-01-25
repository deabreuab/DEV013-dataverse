export const sortData = (data, sortBy, sortOrder ) => {//aquí debo llamar lo que debe realizar que es el sort
  data.sort( (a, b) => {
    const valueA = a[sortBy];  
    const valueB = b[sortBy]; 
    const compare = valueA.localeCompare(valueB);
    return (sortOrder === "asc" ? compare : -compare);//operador ternario
  })
  return data;
};
//orderAnimal("asc", "desc");
//data nos entrega los datos
//sortby a cual de los campos de la data se quiere ordenar(name, id)
//sortOrder indica si se quiere ordenar ascendente o descendente(asc, desc)


/* FUNCIÓN DE FILTRADO SIN MAP
export const filterData = (data, filterBy, value) => {
  let arraySpecies = 0; 
  //let arrayPersonality = 0;
  //let arrayGender = 0;
  
  const array = data.filter((item) => {
    if (item[filterBy] === value) {
      console.log(arraySpecies++);
      return arraySpecies;
    }
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







export const filterData = (data, filterBy, value) => {
  let arraySpecies = 0; 
  //let array; 
  const array = data.map(items => items[filterBy]).filter((item) => {
    if (item[filterBy] === value) {
      console.log(arraySpecies++);
      return arraySpecies;
    }
  })
  console.log(array);
  return array;
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
    console.log(typeof parseFloat(women.toFixed(2)), typeof parseFloat(men.toFixed(2)));
    //return sum;// no lo ocupe
    return `El porcentaje de personajes femeninos es: ${parseFloat(women.toFixed(2))}% y el porcentaje de personajes masculinos: ${parseFloat(men.toFixed(2))}%`;
  })

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