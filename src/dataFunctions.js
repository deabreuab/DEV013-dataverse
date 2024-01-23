export const sortData = (data, sortBy, sortOrder ) => {//aquí debo llamar lo que debe realizar que es el sort
  data.sort( (a, b) => {
    const valueA = a[sortBy];  
    const valueB = b[sortBy]; 
    const compare = valueA.localeCompare(valueB);
    return (sortOrder === "asc" ? compare : -compare);//operador ternario
  })
  console.log("funtion", data);
  return data;
};
//orderAnimal("all", "asc", "desc");
//data nos entrega los datos
//sortby a cual de los campos de la data se quiere ordenar(name, id)
//sortOrder indica si se quiere ordenar ascendente o descendente(asc, desc)
