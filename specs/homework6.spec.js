import { sumOfRate } from "../src/homework6";

describe('Тесты для функции sumOfRate()', () => {
    test('Проверяем, что сумма равна 16', () => {
        const scores = {
            Anna: 10,
            Olga: 1,
            Ivan: 5,
        }
        expect(sumOfRate(scores)).toEqual(16);
    });
    test('Проверяем, что сумма равна 11 при некорректном значении', () => {
        const scores = {
            Anna: 10,
            Olga: 1,
            Ivan: 'test',
        }
        expect(sumOfRate(scores)).toEqual(11);
    });
    test('Проверяем, что сумма равна 0 при пустом массиве', () => {
        const scores = {}
        expect(sumOfRate(scores)).toEqual(0);
    });
    test('Проверяем, что сумма равна 0 при отрицательном значении', () => {
        const scores = {
            Ivan: -10,
        }
        expect(sumOfRate(scores)).toEqual(0);
    });
})