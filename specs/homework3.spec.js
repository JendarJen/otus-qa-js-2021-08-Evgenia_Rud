import { fullTrim, nameIsValid } from '../src/homework3.js';
//import React from 'react'

describe.only('Тесты для функции, которая удаляет пробелы и табуляторы в начале и конце строки', () => {
  it('imported without error', function () {
    expect(fullTrim).toBeDefined();
  });

  it('it function', function () {
    expect(typeof fullTrim).toBe('function');
  });

  test('Проверяем тримминг для пробела в начале слова', () => {
    expect(fullTrim(' Homework')).toEqual('Homework');
  });

  test('Проверяем тримминг для пробела в конце слова', () => {
    expect(fullTrim('Homework ')).toEqual('Homework');
  });

  test('Проверяем тримминг для двух пробелов в начале слова', () => {
    expect(fullTrim('  Homework')).toEqual('Homework');
  });

  test('Проверяем тримминг для двух пробелов в начале слова и в конце', () => {
    expect(fullTrim('  Homework  ')).toEqual('Homework');
  });

  test('Проверяем тримминг для двух пробела в конце слова', () => {
    expect(fullTrim('Homework  ')).toEqual('Homework');
  });

  test('Проверяем тримминг для двух пробела в начале слова', () => {
    expect(fullTrim('  Homework')).toEqual('Homework');
  });

  describe('Проверка валидности кличек котиков', () => {
    //  expect(nameIsValid('name')).toEqual(true);
    test.each`
  name             |  expected
  ${'Tom'}         | ${true}
  ${'    '}        | ${false}
  ${'To m'}        | ${false}
  ${'T'}           | ${false}
  ${'Jery'}        | ${true}
  ${' Tom'}        | ${false}
  ${'012'}         | ${true}
  ${' Tom'}        | ${false}
`('returns $expected when typing $name', ({ name, expected }) => {
      expect(nameIsValid(name))
        .toBe((expected));
    });
  });
});