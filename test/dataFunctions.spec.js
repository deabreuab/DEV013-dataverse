import { sortData } from '../src/dataFunctions.js';//IMPORTAR LAS FUNCIONES
import { data as fakeData } from './data.js';//fakedata para trabar pocos elementos y nos los 24 en data.js

console.log(fakeData);//esto no lo entiendo bien 
//const ordenamiento = [{fakeData: name}];//como llamar la constante

describe('Ordenar la data "asc"', () => {//crear una colección de test filter data

  it('Dería ordenarse de forma ascendente`', () => {//inician con it o test, descripción de que estamos configurando, empezar con debería quehace(ordenar en forma ascendente los nombres de la data) //ESO QUE VA HACER MI TEST DEBE HACER... SE PUEDEN AGREGAR DOS O MAS IT
    const 
    //const expectData = [{name:"Bea"}, {name:"Biskit"}, {name:"Bones"}, {name:"Goose"}];
    //const  testData= [{name:"Goose"}, {name:"Bones"}, {name:"Biskit"}, {name:"Bea"}];

    expect(sortData(testData, "name", "asc")).toEqual(expectData);//tobe exminar los parametros de mi función//TO EQUAL COMPARA OBJETOS Y ARRAY 
    //(TOBE: DATOS PRIMITIVOS) EL ARREGLO FILTRADO
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
