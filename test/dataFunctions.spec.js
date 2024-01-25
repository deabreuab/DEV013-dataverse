import { example, anotherExample } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

console.log(fakeData);

describe('example', () => {//AQUÍ HACEMOS LAS FUNCIONES PARA REVISARLAS

  it('returns `example`', () => {
    expect(example()).toBe('example');//describo que espero 
  });
});

describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
