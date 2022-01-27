/*
Задача 9

Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только число, строку, объект, массив
- Второй параметр обязателен и может принимать только число

```javascript
arrayFill('x',5); // [x,x,x,x,x]
```
*/

function arrayFill(item, number){
    var arr = [];
    if (!Array.isArray(item) && typeof item !== 'number' && typeof item !== 'string' && typeof item !== 'object') throw new Error("First parameter must be a number, string, object, array");
    if (typeof number !== 'number') throw new Error("Second parameter must be a number");
    for (i = 0; i < number; i++) {
        arr.push(item);
    }
    return arr;
}

console.log(arrayFill(['t'], 5));