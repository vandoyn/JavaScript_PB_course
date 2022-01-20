/*
Задача 2

Напишите функцию `f` которая возвращает сумму всех параметров. Количество параметров может быть любым. Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.

```js
f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number
```
*/

function f() {
    var sum = 0;
    for (item of arguments) {
        if (typeof item  === 'number') {
            sum+=item;
        } else {
            throw new Error('all parameters type should be a Number');
        }
    }
    return sum;
};
console.log(f(1,2,3)); 
console.log(f(1,1,1,1,1,1,1,1));
f(1,2,'s',4);