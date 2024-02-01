import { computeStats, filterData, sortData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

const testData = [fakeData[1], fakeData[3], fakeData[2], fakeData[0]];
const expectDataAsc = [fakeData[0], fakeData[1], fakeData[3], fakeData[2]];
const expectDataDesc = [fakeData[2], fakeData[3], fakeData[1], fakeData[0]];
const testDataFilterFe = [fakeData[0], fakeData[2]];
const filterSpecies = [fakeData[0], fakeData[1]];
const filterPersonality = [fakeData[1], fakeData[3]];
const statsText = "Porcentaje personajes masculinos: 50.00% " + "\nPorcentaje personajes femeninos: 50.00%";

describe('Ordenar la data "asc"', () => {
  it('Debería ordenarse de forma ascendente y descendente', () => {
    expect(sortData(testData, "name", "asc")).toEqual(expectDataAsc);
    expect(sortData(testData, "name", "desc")).toEqual(expectDataDesc);
  });  
});

describe("Filtrar la data por especie, por género y por personalidad", () => {
  it("Debería filtrar los animales por género", () => {
    expect(filterData(fakeData, "gender", "Femenino")).toEqual(testDataFilterFe);   
  })
  it("Debería filtrar los animales por especie", () => {
    expect(filterData(fakeData, "species", "Perro")).toEqual(filterSpecies);   
  })
  it("Debería filtrar los animales por personalidad", () => {
    expect(filterData(fakeData, "personality", "Perezoso")).toEqual(filterPersonality);   
  })
})

describe("Estadística númerica por género de los personajes", () => {
  it("Debería darnos el porcentaje de personajes femeninos", () => {
    expect(computeStats(fakeData)).toBe(statsText);
  })
})