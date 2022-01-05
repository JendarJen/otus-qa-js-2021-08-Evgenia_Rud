/*
Функция, которая считает сумму всех баллов группы
На вход функция принимает объект, в котором хранятся оценки за ДЗ нашей группы
 */

export const sumOfRate = (scores) => {
    let scoresSum = 0;
    for (let score in scores) {
        if (typeof scores[score] === "number" && scores[score] >= 0) {
            scoresSum += scores[score];
        }
    }
    return scoresSum;
}