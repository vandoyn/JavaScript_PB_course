/*
Написать код который посчитает сумму всех четных элементов в массиве, в суммировании уча́ствуют только элементы больше 3.

```js
var arr = [1,2,3,4];
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.
*/

var arr = [1,2,3,4];
var i, sum = 0;
for ( i of arr) {
    if (i%2 == 0 && i > 3) {
        sum += i;
    }
}
console.log(sum);