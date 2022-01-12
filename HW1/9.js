/* 
Отсортировать массив по убыванию.

```javascript
var arr = [1,2,3,4,5,6];
// [6,5,4,3,2,1]
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.
*/

var arr = [1,2,3,4,5,6];
for ( i = 0; i < arr.length-1; i++) {
    for (j = 0; j < arr.length-1-i; j++) {
        if ( arr[j] < arr[j+1] ) {
            e = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = e;
            //console.log(arr);
        }
    }   
}
console.log(arr);
