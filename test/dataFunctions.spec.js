import { computeStats, filterData, sortData } from '../src/dataFunctions.js';//IMPORTAR LAS FUNCIONES
import { data as fakeData } from './data.js';//fakedata para trabar pocos elementos y nos los 24 en data.js

//const expectData = [{name:"Bea"}, {name:"Biskit"}, {name:"Bones"}, {name:"Goose"}];
//const  testData= [{name:"Goose"}, {name:"Bones"}, {name:"Biskit"}, {name:"Bea"}];
const testData = [fakeData[1], fakeData[3], fakeData[2], fakeData[0]];
const expectDataAsc = [fakeData[0], fakeData[1], fakeData[3], fakeData[2]];
const expectDataDesc = [fakeData[2], fakeData[3], fakeData[1], fakeData[0]];
const testDataFilterFe = [fakeData[0], fakeData[2]];//nos trae los un array con los dos objetos, completos
const filterSpecies = [fakeData[0], fakeData[1]];
const filterPersonality = [fakeData[1], fakeData[3]];
//tipo number
const statsText = "Porcentaje personajes Masculinos 50.00% porcentaje personajes femeninos 50.00%";
//const prueba  =  [{"facts": {"birthDate": "15 de octubre", "zodiacSign": "Leo"}, "gender": "Femenino", "imageUrl": "https://dodo.ac/np/images/thumb/c/c2/Bea_NH.png/150px-Bea_NH.png", "name": "Bea", "personality": "Dulce", "shortDescription": "Perro deportista y enérgico, amante del ejercicio y las competiciones.", "species": "Perro"}, {"facts": {"birthDate": "31/10", "zodiacSign": "Libra"}, "gender": "Femenino", "imageUrl": "https://dodo.ac/np/images/2/26/Shino_amiibo.png", "name": "Yuki", "personality": "Vivaracha", "shortDescription": "Yuki es una aldeana ciervo animada en la serie Animal Crossing", "species": "Ciervo"}] 

describe('Ordenar la data "asc"', () => {//crear una colección de test filter data
  it('Debería ordenarse de forma ascendente y descendente', () => {//inician con it o test, descripción de que estamos configurando, empezar con debería quehace(ordenar en forma ascendente los nombres de la data) //ESO QUE VA HACER MI TEST DEBE HACER... SE PUEDEN AGREGAR DOS O MAS IT
    expect(sortData(testData, "name", "asc")).toEqual(expectDataAsc);//tobe exminar los parametros de mi función//TO EQUAL COMPARA OBJETOS Y ARRAY expect(sortData(testData, "name", "desc")).toEqual(expectDataDesc);  //(TOBE: DATOS PRIMITIVOS) EL ARREGLO FILTRADO
    expect(sortData(testData, "name", "desc")).toEqual(expectDataDesc);
  });
  //it('Debería ordenarse de forma descendente', () => {
  //expect(sortData(testData, "name", "desc")).toEqual(expectDataDesc);
  //});
});

describe("Filtrar la data por especie, por género y por personalidad", () => {
  it("Debería filtrar los animales por género", () => {
    expect(filterData(fakeData, "gender", "Femenino")).toEqual(testDataFilterFe);   
  });
  it("Debería filtrar los animales por especie", () => {
    expect(filterData(fakeData, "species", "Perro")).toEqual(filterSpecies);   
  });
  it("Debería filtrar los animales por personalidad", () => {
    expect(filterData(fakeData, "personality", "Perezoso")).toEqual(filterPersonality);   
  });
});

describe("Estadística númerica por género de los personajes", () => {
  it("Debería darnos el porcentaje de personajes femeninos", () => {
    expect(computeStats(fakeData)).toBe(statsText);
  });
});

// describe('anotherExample', () => {

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });


/*
const TEST_TEXT_NO_NUMBERS = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

describe('analyzer', () => {
  describe('analyzer.getWordCount', () => {
    it('should return 19 for "' + TEST_TEXT_NO_NUMBERS + '"', () => {
      expect(analyzer.getWordCount(TEST_TEXT_NO_NUMBERS)).toBe(19);
    });
  });*/

//DESCRIBE va el nombre la const lo que voy , como analizer sortData entre las comillas
//EXPECT(esperar) ahí voy a valorar las cosas, es el valor que produce EL código (se llama con una función matcher) ToBe
//TOBE FUNCIÓN DE COMPARACIÓN(comparar texto)
//.NOT permite probar su contrario. not.toBe
//.toBeCloseTo números flotantes

/*que espero que me tome
función filtrado
que el parametro que reciba tenga un valor

*/
/*
Función estadistica, el resultado de la data mostrada debe ser de tipo número

 */


/*SE PUEDEN HACER TEST SIN JEST, ya esta instalado
COMO SE AGREGA EN JSON O SE AGREGA LA PAQUETERIA DE JEST SOLA DE TENERLA, COMO LA CARPETA NPM */



/*
const perceFeme = "El porcentaje de personajes femeninos es: 33.33%";
const perceMas =  "El porcentaje de personajes masculinos: 66.67%";
expect(computeStats(perceFeme)).toBe(33.33);
expect(computeStats(perceMas)).toBe(66.67);

*/