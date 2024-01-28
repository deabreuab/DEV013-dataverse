import { sortData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

console.log(fakeData);
const testData = [fakeData[1], fakeData[2], fakeData[3], fakeData[0]];
const expectDataAsc = [fakeData[0], fakeData[1], fakeData[2], fakeData[3]];
const expectDataDesc = [fakeData[3], fakeData[2], fakeData[1], fakeData[0]];

describe('Ordenar la data "asc"', () => {
  it('Dería ordenarse de forma ascendente`', () => {
    // const expectData = [{name:"Bea"}, {name:"Biskit"}, {name:"Bones"}, {name:"Goose"}];
    // const  testData= [{name:"Goose"}, {name:"Bones"}, {name:"Biskit"}, {name:"Bea"}];
    expect(sortData(testData, "name", "asc")).toEqual(expectDataAsc);
    expect(sortData(testData, "name", "desc")).toEqual(expectDataDesc);
  });
});