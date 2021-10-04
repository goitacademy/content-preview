---
id: strings
title: Строки
sidebar_label: Строки
sidebar_position: 9
---

import Image from '@components/Image';

**Строка** - это индексированный набор из нуля или более символов, заключенных в
одинарные либо двойные кавычки.

```js
const username = 'Mango';
```

Важно помнить, что индексация элементов строки начинается с нуля. К примеру в
строке `"JavaScript"` буква `"J"` стоит на позиции с индексом `0`, а `"t"` идет
под индексом `9`.

<Image src="img/javascript/string-idx.png" alt="string indexing" maxWidth={640} />

Содержимое строки нельзя изменить, только прочитать. То есть нельзя взять
какой-то символ и заменить его, как только строка создана - она такая навсегда.
Можно лишь создать целиком новую строку и присвоить в переменную вместо старой.

## Конкатенация строк

Если применить оператор `+` к строке и любому другому типу данных, результатом
операции «сложения» будет строка. Эта операция называется конкатенация, или
сложение строк.

Во время конкатенации, любой тип данных приводится к строке и сшивается со
строкой, но есть особенность - последовательность записи операндов.

Последовательность операций имеет значение, преобразование типов происходит
только в момент операции сложения со строкой, до этого момента действуют
привычные правила математики.

```js
const message = 'Mango ' + 'is' + ' happy';
console.log(message); // Mango is happy
```

Посмотрим на разный порядок операндов.

```js
console.log(1 + '2'); // "12"
console.log(1 + '2' + 4); // "124"
console.log(1 + 2 + '4'); // "34"
```

В последнем примере произошла математическая операция сложения для первых двух
чисел `1` и `2`, после чего число `3` было преобразовано в строку `"3"` и сшито
со строкой `"4"`.

## Шаблонные строки

Шаблонные строки это альтернатива конкатенации с более удобным синтаксисом.
Шаблонная строка заключена в обратные (косые) кавычки вместо двойных или
одинарных и может содержать местозаполнители, которые обозначаются знаком
доллара и фигурными скобками - `${выражение}`.

```js
// Используя переменные необходимо составить строку с подставленными значениями
const guestName = 'Манго';
const roomNumber = 207;
const greeting =
  'Welcome ' + guestName + ', your room number is ' + roomNumber + '!';
console.log(greeting); // "Welcome Mango, your root number is 207!"
```

Составлять строки с подставляемыми значениями используя конкатенацию очень
неудобно. На помощь приходят шаблонные строки и интерполяция.

```js
const guestName = 'Манго';
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting); // "Welcome Mango, your root number is 207!"
```

## Свойства и методы строк

У каждой строки есть встроенные свойства и методы, рассмотрим некоторые из них.

### Свойство `length`

Для того чтобы узнать длину строки, то есть количество её символов, у всех строк
есть встроенное свойство `length`, значение которого можно получить обратившить
к нему через точку после имени переменной или строкового литерала.

```js
const message = 'Welcome to Bahamas!';
console.log(message.length); // 19
console.log('There is nothing impossible to him who will try'.length); // 47
```

### Методы `toLowerCase()` и `toUpperCase()`

Возвращают новую строку в соответствующем регистре, не изменяя оригинальную
строку.

```js
const message = 'Welcome to Bahamas!';
console.log(message.toLowerCase()); // "welcome to bahamas!"
console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
console.log(message); // "Welcome to Bahamas!"
```

Бывают ситуации когда все символы в строке необходимо преобразовать в один
регистр, верхний или нижний. Например, при поиске по ключевому слову, когда
пользователь вводит строку `'saMsUng'`, а сравнить её надо со строкой
`'samsung'` или `'SAMSUNG'`.

```js
console.log('saMsUng' === 'samsung'); // false
console.log('saMsUng' === 'SAMSUNG'); // false
```

Чтобы не требовать абсолютно точный ввод можно сделать «нормализацию» введённой
пользователем строки, то есть преобразовать все её символы в верхний или нижний
регистр. Методы строки `toLowerCase()` и `toUpperCase()` вернут новую строку в
соответствующем регистре, не изменяя оригинальную.

```js
const BRAND_NAME = 'SAMSUNG';
const userInput = 'saMsUng';
const normalizedToUpperCaseInput = userInput.toUpperCase();

console.log(userInput); // 'saMsUng'
console.log(userInput === BRAND_NAME); // false
console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
console.log(normalizedToUpperCaseInput === BRAND_NAME); // true
```

### Метод `indexOf()`

Возвращает позицию (индекс) на которой находится первое совпадение подстроки или
`-1`, если ничего не найдено.

```js
const message = 'Welcome to Bahamas!';
console.log(message.indexOf('to')); // 8
console.log(message.indexOf('hello')); // -1
```

### Метод `includes()`

Проверяет входит ли подстрока в строку, возвращает буль - `true` если входит и
`false` в противном случае. Регистр символов в строке и подстроке имеет
значение, так как например буква `"a"` не равна букве `"А"`.

```js
const productName = 'Ремонтный дроид';

console.log(productName.includes('н')); // true
console.log(productName.includes('Н')); // false
console.log(productName.includes('дроид')); // true
console.log(productName.includes('Дроид')); // false
console.log(productName.includes('Ремонтный')); // true
console.log(productName.includes('ремонтный')); // false
```

:::note Интересно

Все методы строк чувствительны к регистру.

:::

### Метод `endsWidth()`

Позволяет определить, заканчивается ли строка символами (подстрокой) указанными
в скобках, возвращая `true` или `false`.

```js
const jsFileName = 'script.js';
console.log(jsFileName.endsWith('.js')); // true

const cssFileName = 'styles.css';
console.log(cssFileName.endsWith('.js')); // false
```

### Методы `replace()` и `replaceAll()`

Возвращают новую строку, в которой первое (replace) или все совпадения
(replaceAll) подстроки заменены на указанное значение.

```js
const jsFileName = 'script.js';
const minifiedJsFileName = jsFileName.replace('.js', '.min.js');
console.log(minifiedJsFileName); // "script.min.js"

const cssFileNames = 'styles.css, about.css, portfolio.css';
const minifiedCssFileNames = cssFileNames.replaceAll('.css', '.min.css');
console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"
```

### Метод `slice()`

Метод строк `slice(startIndex, endIndex)` используется для создания копии части
или всей строки. Он делает копию элементов строки от `startIndex` и до, но не
включая `endIndex` и возвращает новую строку, не изменяя оригинал.

```js
const productName = 'Repair droid';
console.log(productName.slice(0, 4)); // "Repa"
console.log(productName.slice(3, 9)); // "air dr"
console.log(productName.slice(0, productName.length)); // "Repair droid"
console.log(productName.slice(7, productName.length)); // "droid"
```
