/*
Задача 6

Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

```javascript
const arr = [1,2,3];
const acc = 0;
reduceRight(arr, function(acc, item, i, arr) {}, acc);
```
*/
const arr = [1,2,3];
const acc = 0;
function reduceRight(arr, cb, acc) {
    if (!Array.isArray(arr)) throw new Error("First parameter must be an array");
    if (typeof cb !== "function") throw new Error("Second parameter must be a function");
    if (typeof acc !== "number" && typeof acc !== "string") throw new Error("Third parameter must be a number or string");
    for(i = arr.length-1; i >= 0; i-- ) {
        acc = cb(acc, arr[i], i, arr);
    }
    return acc;
};

result = reduceRight(arr, function(acc, item, i) {
    return acc + item;
}, acc);

console.log(result);
