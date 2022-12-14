
// Задание №1

function kolobok(character) {
    let result;

    switch (character) {
        case 'дедушка':
            result = 'Я от дедушки ушёл';
            break;
        case 'лиса':
            result = 'Меня съели';
            break;
        case 'заяц':
            result = 'Не хитро ушёл от зайца';
            break;
        default:
            result = `Персонажа "${character}" в сказке нет`;
            break;
    }

    return result;
}

console.log(kolobok('заяц'));
console.log(kolobok('лиса'));
console.log(kolobok('дедушка'));
console.log(kolobok('зять'));

// Задание №2

function newYear(character) {
    let result;

    if (character === 'Дед Мороз' || character === 'Снегурочка') {
        result = `${character}! ${character}! ${character}!`;
    } else {
        result = `Персонаж "${character}" не найден`;
    }

    return result;
}

console.log(newYear('Дед Мороз'));
console.log(newYear('Снегурочка'));
console.log(newYear('Карабас-Барабас'));