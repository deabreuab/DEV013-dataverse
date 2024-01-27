import { computeStats, filterData, sortData } from '../src/dataFunctions.js';//IMPORTAR LAS FUNCIONES
import { data as fakeData } from './data.js';//fakedata para trabar pocos elementos y nos los 24 en data.js

const testData = [fakeData[1], fakeData[3], fakeData[2], fakeData[0]];
const testDataFilterFe = [fakeData[0][3], fakeData[2][3]];
//const testDataFilterMas = [fakeData[0].gender, fakeData[2].gender];
const expectDataAsc = [fakeData[0], fakeData[1], fakeData[3], fakeData[2]];
//const expectDataDesc = [fakeData[3], fakeData[2], fakeData[1], fakeData[0]];
//const expectDataGender = [fakeData[1]];
//const expectDataFemale = expectDataGender.gender;
//const prueba = [fakeData[0][4]];
//const stats = //total 4 mujer 2/4*100
const pruebatext = "El porcentaje de personajes femeninos es: 33.33% y el porcentaje de personajes masculinos: 66.67%"

describe('Ordenar la data "asc"', () => {//crear una colección de test filter data
  it('Debería ordenarse de forma ascendente y descendente', () => {//inician con it o test, descripción de que estamos configurando, empezar con debería quehace(ordenar en forma ascendente los nombres de la data) //ESO QUE VA HACER MI TEST DEBE HACER... SE PUEDEN AGREGAR DOS O MAS IT
    //const expectData = [{name:"Bea"}, {name:"Biskit"}, {name:"Bones"}, {name:"Goose"}];
    //const  testData= [{name:"Goose"}, {name:"Bones"}, {name:"Biskit"}, {name:"Bea"}];
    expect(sortData(testData, "name", "asc")).toEqual(expectDataAsc);//tobe exminar los parametros de mi función//TO EQUAL COMPARA OBJETOS Y ARRAY expect(sortData(testData, "name", "desc")).toEqual(expectDataDesc);  //(TOBE: DATOS PRIMITIVOS) EL ARREGLO FILTRADO
    expect(sortData(testData, "name", "desc")).not.toEqual(expectDataAsc);
  });
  //it('Debería ordenarse de forma descendente', () => {
  //expect(sortData(testData, "name", "desc")).toEqual(expectDataDesc);
  //});
});

describe("Filtrar la data por especie, por género y por personalidad", () => {
  it("Debería filtrar los animales por género", () => {
    expect(filterData(testDataFilterFe, "gender", "Femenino")).no.toEqual("Femenino")    
  })
})

describe("Estadística númerica por género de los personajes", () => {
  it("Debería darnos el porcentaje de personajes femeninos", () => {
    expect(computeStats(fakeData)).toBe(pruebatext)
  })
})

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
