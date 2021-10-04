---
id: variables
title: Переменные и типы
sidebar_label: Переменные и типы
sidebar_position: 5
---

Переменные используются для хранения данных и состоят из идентификатора (имени)
и области в памяти, где хранится их значение. Переменную можно представить как
коробку с названием, в которой что-то лежит (значение).

```bash
<ключевое_слово> <имя_переменной> = <значение>
```

## Имена переменных

**Идентификатор** - это имя переменной, функции или класса. Состоит из одного
или нескольких символов в следующем формате.

- Первым символом должна быть буква `a-z` или `A-Z`, символ подчеркивания `_`
  или знак доллара `$`.
- Другие символы могут быть буквами `a-z`, `A-Z`, цифрами `0-9`, подчеркиваниями
  `_` и знаками доллара `$`.
- Идентификаторы чувствительны к регистру. Это значит, что переменные `user`,
  `usEr` и `User` различны.

Имя переменной должно быть понятным.

```bash
# ❌ Плохо
chislo
korzina_tovarov
profil_polzovatelya
tekushiy_mesyaz

# ✅ Хорошо
number
cart
userProfile
currentMonth
```

Использование camelCase-нотации для идентификаторов это стандарт. Первое слово
пишется строчными буквами, а каждое последующее начинается с заглавной.
Например, `user`, `greetUser`, `getUserData`, `isActive`, `activeGuestCount`,
`totalWorkerSalary`.

- [Как называть переменные](https://bookflow.ru/kak-nazyvat-peremennye/)
- [Соглашения об именах переменных](https://medium.freecodecamp.org/javascript-naming-conventions-dos-and-don-ts-99c0e2fdd78a)

## Ключевые слова

Есть список зарезервированных ключевых слов, которые имеют специальное значение
и используются для определенных конструкций. Нельзя использовать ключевые слова
как идентификаторы.

|          |            |              |           |
| -------- | ---------- | ------------ | --------- |
| abstract | arguments  | await        | boolean   |
| break    | byte       | case         | catch     |
| char     | class      | const        | continue  |
| debugger | default    | delete       | do        |
| double   | else       | enum         | eval      |
| export   | extends    | false        | final     |
| finally  | float      | for          | function  |
| goto     | if         | implements   | import    |
| in       | instanceof | int          | interface |
| let      | long       | native       | new       |
| null     | package    | private      | protected |
| public   | return     | short        | static    |
| super    | switch     | synchronized | this      |
| throw    | throws     | transient    | true      |
| try      | typeof     | var          | void      |
| volatile | while      | with         | yield     |

## Объявление переменных

Объявление переменной начинается с ключевого слова `const`. Такая переменная
должна быть сразу инициализирована значением, после чего его нельзя
переопределить.

```js
// Переменные объявленные как const обязательно должны быть инициализированы
// значением во время объявления, иначе будет ошибка.
const yearOfBirth = 2006;
console.log(yearOfBirth); // 2006

// Если переменная объявлена как const, перезаписать ее значение нельзя.
// При попытке присвоить новое значение будешь ошибка выполнения скрипта.
yearOfBirth = 2020; // ❌ Неправильно, будет ошибка
```

Для того чтобы объявить переменную которой в будущем можно будет присвоить новое
значение, используется ключевое слово `let`.

```js
// Переменным объявленным через let не обязательно сразу присваивать значение.
let age;

// Если переменной объявленной как let изначально не присвоено значение,
// она инициализируется специальным значением undefined (не определено).
console.log(age); // undefined

// console.log() это метод для вывода данных в консоль браузера,
// более детально с ним познакомимся позже.

// Если переменная объявлена как let, её значение можно перезаписать.
age = 14;
console.log(age); // 14
```

:::note Интересно

Объявление переменной без ключевого слова `let` или `const` приведет к ошибке,
если скрипт выполняется в строгом режиме.

:::

## Когда использовать `const` и `let`

Единственное отличие `const` и `let` состоит в том, что `const` запрещает
повторное присваивание переменной какого-либо значения. Объявление `const`
делает код более читаемым, так как переменная всегда ссылается на одно и то же
значение. В случае с `let` такой уверенности нет.

Будет разумно использовать `let` и `const` так:

- Используйте `const` по умолчанию, большинство переменных будут объявлены
  именно так.
- Используйте `let`, если потребуется присвоить переменной другое значение во
  время выполнения скрипта.

## Обращение к переменной

Важно различать неопределенные и необъявленные переменные.

**Неопределенная (undefined)** - это переменная, которая была объявлена ключевым
слово `let`, но не инициализирована значением. По умолчанию ей присваивается
начальное значение `undefined`.

```js
let username;
console.log(username); // undefined
```

**Необъявленная (undeclared или not defined)** - это переменная, которая не была
объявлена в доступной области видимости. Попытка обратиться к пременной до её
объявления вызовет ошибку. Например, чтобы прочитать или изменить её значение.

```js
// ❌ Неправильно, будет ошибка
age = 15; // ReferenceError: Cannot access 'age' before initialization
console.log(age); // ReferenceError: age is not defined

// Объявление переменной age
let age = 20;

// ✅ Правильно, обращаемся после объявления
age = 25;
console.log(age); // 25
```

## Примитивные типы

В JavaScript переменная не ассоциируется с каким-либо типом данных, тип есть у
её значения. То есть переменная может хранить значения разных типов.

**Number** - целые числа и числа с плавающей запятой (точкой).

```js
const age = 20;
const points = 15.8;
```

**String** - строки, последовательность из нуля или более символов. Строка
начинается и заканчивается одиночной `'`, или двойными кавычками `"`.

```js
const username = 'Mango';
const description = 'JavaSript для начинающих';
```

**Boolean** - логический тип данных, флаги состояния. Всего два значения: `true`
и `false`. Например, на вопрос включен ли свет в комнате можно ответить да
(true) или нет (false).

- `true` — да, верно, истина, 1
- `false` — нет, неверно, ложь, 0

Обратите внимание на имена переменных содержащих буль. Они задают вопрос, и
ответ на его - да или нет.

```js
const isLoggedIn = true;
const canMerge = false;
const hasChildren = true;
const isModalOpen = false;
```

**null** - особое значение, которое по сути значит `ничто`. Используется в тех
ситуациях, когда необходимо явно указать пустоту. К примеру если пользователь
ещё ничего не выбрал, то можно сказать что значение `null`.

```js
let selectedProduct = null;
```

**undefined** - ещё одно специальное значение. По умолчанию, когда переменная
объявляется, но не инициализируется, ее значение не определено, ей присваивается
`undefined`.

```js
let username;
console.log(username); // undefined
```

## Оператор `typeof`

Используется для получения типа значения переменной. Возвращает на место своего
вызова тип значения переменной указанного после него - строку в которой указан
тип.

```js
let username;
console.log(typeof username); // "undefined"

let inputValue = null;
console.log(typeof inputValue); // "object"

const quantity = 17;
console.log(typeof quantity); // "number"

const message = 'JavaScript is awesome!';
console.log(typeof message); // "string"

const isSidebarOpen = false;
console.log(typeof isSidebarOpen); // "boolean"
```