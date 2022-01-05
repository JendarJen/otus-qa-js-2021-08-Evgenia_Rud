import { Kolobok, newYear } from '../src/homework4';


describe('Homework4Part1', () => {

  test('Kolobok function', () => {
    expect(Kolobok).toBeDefined();
    expect(typeof Kolobok).toBe('function');
  });
  test('Granddad', () => {
    expect(Kolobok('Granddad')).toEqual('I left my granddad');
  });
  test('Grandmam', () => {
    expect(Kolobok('Grandmam')).toEqual('I left my grandmam');
  });
  test('Hare', () => {
    expect(Kolobok('Hare')).toEqual('I left the hare');
  });
  test('Wolf', () => {
    expect(Kolobok('Wolf')).toEqual('I left the wolf');
  });
  test('Fox', () => {
    expect(Kolobok(234)).toEqual('I wont leave the fox');
  });
});
test.each`
    name          | expected
    ${'Granddad'} | ${'I left my granddad'}
    ${'Grandmam'} | ${'I left my grandmam'}
    ${'Hare'}     | ${'I left the hare'}
    ${'Wolf'}     | ${'I left the wolf'}
    ${'Fox'}      | ${'I wont leave the fox'}
    I left the wolf
    `(`if $name is passed $expected is returned`, ({ name, expected }) => {
  expect(Kolobok(name)).toBe(expected);
});

test.each`
name | expected
${"Дед Мороз"} | ${"Дед Мороз! Дед Мороз! Дед Мороз!"}
${"Снегурочка"} | ${"Снегурочка! Снегурочка! Снегурочка!"}
${"Колобок"} | ${"Другой персонаж"}
`(`зовем $name на новый год`, ({ name, expected }) => {
  expect(newYear(name)).toBe(expected);
});



/**
 * В src/homework4.js напишите функцию "Новый год" и тесты к ней здесь.
 * Функция на вход принимает имя персонажа. Дед Мороз или Снегурочка.
 * Возвращает "Снегурочка! Снегурочка! Снегурочка!" или "Дед Мороз! Дед Мороз! Дед Мороз!
 * В функции используйте интерполяцию. https://learn.javascript.ru/es-string
 */

