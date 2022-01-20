/*
Задача 1

Напишите функцию `f`, которая возвращает куб числа. Число передается параметром. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.

```js
f(2); // 8
f('Content'); // Error: parameter type is not a Number
```
*/

function f(x) {
    if (typeof x  === 'number') {
        return x**3;
    } else {
        throw new Error('parameter type is not a Number');
    }
};

console.log(f(2));
f('Content');