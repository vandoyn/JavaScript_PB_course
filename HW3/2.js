/*
Задача 2

Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
filter(arr, function(item, i, arr) {});
*/
const arr = [1,2,0,3,4,5,-1];
function filter(arr, cb) {
    let arr1 = [];
    if (!Array.isArray(arr)) throw new Error("First parameter must be an array");
    if (typeof cb !== "function") throw new Error("Second parameter must be a function");
    for(i in arr) {
        if(cb(arr[i], i, arr)) arr1.push(arr[i]);
    }
    return arr1;
};
//forEach(1, 1);
arrFilter = filter(arr, function(item, i, arr) {
    return item > 3;
});

console.log(arrFilter);
