/*
Создать имплементацию функции `every`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
every(arr, function(item, i, arr) {});
*/
const arr = [1,2,3];
function every(arr, cb) {
    if (!Array.isArray(arr)) throw new Error("First parameter must be an array");
    if (typeof cb !== "function") throw new Error("Second parameter must be a function");
    for(i in arr) {
        if(!cb(arr[i], i, arr)) return false;
    }
    return true;
};

result = every(arr, function(item, i, arr) {
    return item < 4;
});

console.log(result);
