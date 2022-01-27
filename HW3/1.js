/*
Задача 1

Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
forEach(arr, function(item, i, arr) {});
```
*/
const arr = [1,2,3];
function forEach(arr, cb) {
    if (!Array.isArray(arr)) throw new Error("First parameter must be an array");
    if (typeof cb !== "function") throw new Error("Second parameter must be a function");
    for(i in arr) {
        cb(arr[i], i, arr);
    }
};
//forEach(1, 1);
forEach(arr, function(item, i, arr) {
    console.log({item, i, arr});
});

