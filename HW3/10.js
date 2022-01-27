/*
Задача 10

Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, а возвращает массив только в обратном порядке.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если был передан пустой массив

```javascript
const arr = [3,2,1];
reverse(arr); // [1,2,3]
```
*/

const arr = [3,2,1];

function reverse(arr) {
    let revArr = [];
    if (!Array.isArray(arr)) throw new Error("Parameter must be an array");
    if (arr.length === 0) throw new Error("Parameter is empty array");
    for(i = arr.length-1; i >= 0; i-- ) {
        revArr.push(arr[i]);
    }
    return revArr;
};

console.log(reverse(arr));
