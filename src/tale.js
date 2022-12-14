
// Задание №1

function kolobok(character) {
    switch (character) {
        case 'дедушка':
            console.log('Я от дедушки ушёл');
            break;
        case 'лиса':
            console.log('Меня съели');
            break;
        case 'заяц':
            console.log('Не хитро ушёл от зайца');
            break;
        default:
            console.log(`Персонажа "${character}" в сказке нет`);
            break;
    }
}

kolobok('заяц');
kolobok('лиса');
kolobok('дедушка');
kolobok('зять');

// Задание №2

function newYear(character) {
    if (character === 'Дед Мороз' || character === 'Снегурочка') {
        console.log(`${character}! ${character}! ${character}!`);
    } else {
        console.log(`Персонажа "${character}" в сказке нет`);
    }
}

newYear('Дед Мороз');
newYear('Снегурочка');
newYear('Карабас-Барабас');