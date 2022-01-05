/**
 * Это функция "Колобок" для ДЗ-4
 * @param {string} name
 * @returns {string}
 */

/**
 * В src/homework4.js напишите функцию "Колобок" и тесты к ней здесь.
 * Функция на вход принимает имя персонажа,
 * например, "дедушка", а в ответ возвращает, текстовую строку.
 * Значение текстовой строки - какой был результат взаимодействия Колобка с данным персонажем.
 * Например, "дедушка" - "Я от дедушки ушел".
 * В функции используйте конструкцию switch - https://learn.javascript.ru/switch
 */

export const Kolobok = (name) => {
    switch (name) {
        case 'Granddad':
            return 'I left my granddad';
            break;
        case 'Grandmam':
            return 'I left my grandmam';
            break;
        case 'Hare':
            return 'I left the hare';
            break;
        case 'Wolf':
            return 'I left the wolf';
            break;
        default:
            return 'I wont leave the fox';
    }
    return answer;
}

/**
 * В src/homework4.js напишите функцию "Новый год" и тесты к ней здесь.
 * Функция на вход принимает имя персонажа. Дед Мороз или Снегурочка.
 * Возвращает "Снегурочка! Снегурочка! Снегурочка!" или "Дед Мороз! Дед Мороз! Дед Мороз!
 * В функции используйте интерполяцию. https://learn.javascript.ru/es-string
 */

export const newYear = (name) => {
    if (name === "Дед Мороз" || name === "Снегурочка") {
        return `${name + "! " + name + "! " + name + "!"}`;
    }
    else {
        return "Другой персонаж";
    }
}