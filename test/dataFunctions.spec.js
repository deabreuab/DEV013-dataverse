import { sortData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

console.log(fakeData);

describe('Ordenar la data "asc"', () => {
  it('Dería ordenarse de forma ascendente`', () => {
    // const testData = [fakeData[1].name, fakeData[2].name, fakeData[3].name, fakeData[0].name];
    // const expectData = [fakeData[0].name, fakeData[1].name, fakeData[2].name, fakeData[3].name];

    // const expectData = [{name:"Bea"}, {name:"Biskit"}, {name:"Bones"}, {name:"Goose"}];
    // const  testData= [{name:"Goose"}, {name:"Bones"}, {name:"Biskit"}, {name:"Bea"}];
    expect(sortData(testData, "name", "asc")).toEqual(expectData);
    
  });
});