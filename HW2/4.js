/*
Задача 4

Сделайте функцию `f`, которая принимает параметром число от 1 до 7, а затем возвращает день недели на русском языке. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только числа от 1 до 7.

```js
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number
```
*/

function f(x) {
    if (typeof x  !== 'number' ) {
        throw new Error('parameter type is not a Number');
    } else if ( !(x >=1 && x <=7) ) {
        throw new Error('parameter should be in the range of 1 to 7');
    } else {
        switch(x){
            case 1:
                return 'Воскресенье';
            case 2:
                return 'Понедельник';
            case 3:
                return 'Вторник';
            case 4:
                return 'Среда';
            case 5:
                return 'Четверг';
            case 6:
                return 'Пятница';
            case 7:
                return 'Суббота';
        }
    }
};

console.log(f(1));
console.log(f(2));
f('1');