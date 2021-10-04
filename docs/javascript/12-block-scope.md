---
id: block-scope
title: Область видимости
sidebar_label: Область видимости
sidebar_position: 12
---

import Image from '@components/Image';

**Область видимости переменных (variable scope)** - доступность переменных в
определённом месте кода.

Глобальная область видимости используется по умолчанию. Все и вся имеют доступ к
переменным объявленным в ней. Например, переменная `value` объявлена в
глобальной области видимости, то есть вне какого-то блока, и доступна в любом
месте после объявления.

```js
const value = 5;

if (true) {
  console.log('Block scope: ', value); // 5
}

console.log('Global scope: ', value); // 5
```

Любая конструкция использующая фигурные скобки `{}` (условия, циклы, функции и
т. п.) создает новую локальную область видимости, и переменные, объявленные в
этой области видимости, используя `let` или `const`, не доступны вне этого
блока.

```js
if (true) {
  const value = 5;
  console.log('Block scope: ', value); // 5
}

console.log('Global scope: ', value); // ReferenceError: value is not defined
```

Глубина вложенности областей видимости не ограничена, и все они буду работать по
одному принципу - область видимости имеет доступ ко всем переменным объявленным
выше по иерархии вложенности, но не может получить доступ к переменным
объявленным во вложенных областях видимости.

Создадим несколько областей видимости и дадим им имена для наглядности.

<Image src="img/javascript/scopes.png" alt="Области видимости" />

- Глобальная есть по умолчанию, создадим в ней переменную `global`
- Далее используя оператор `if` создадим блочную область видимости `block A`
- Внутри области видимости `block A` поставим еще один оператор `if`, который
  создаст вложенную область видимости `block B`
- На одном уровне с `block A`, создадим область видимости `block C` все так же
  используя оператор `if`

```js
const global = 'global';

if (true) {
  const blockA = 'block A';

  // Видим глобальную + локальную A
  console.log(global); // 'global'
  console.log(blockA); // block A

  // Переменные blockB и blockC не найдены в доступных областях видимости.
  // Будет ошибка обращения к переменной.
  console.log(blockB); // ReferenceError: blockB is not defined
  console.log(blockC); // ReferenceError: blockC is not defined

  if (true) {
    const blockB = 'block B';

    // Видим глобальную + внешнюю A + локальную B
    console.log(global); // global
    console.log(blockA); // block A
    console.log(blockB); // block B

    // Переменная blockC не найдена в доступных областях видимости.
    // Будет ошибка обращения к переменной.
    console.log(blockC); // ReferenceError: blockC is not defined
  }
}

if (true) {
  const blockC = 'block C';

  // Видим глобальную + локальную C
  console.log(global); // global
  console.log(blockC); // block C

  // Переменные blockA и blockB не найдены в доступных областях видимости.
  // Будет ошибка обращения к переменной.
  console.log(blockA); // ReferenceError: blockA is not defined
  console.log(blockB); // ReferenceError: blockB is not defined
}

// Видим только глобальную
console.log(global); // global

// Переменные blockA, blockB и blockC не найдены в доступных областях видимости.
// Будет ошибка обращения к переменной.
console.log(blockA); // ReferenceError: blockA is not defined
console.log(blockB); // ReferenceError: blockB is not defined
console.log(blockC); // ReferenceError: blockC is not defined
```

:::note Интересно

Будьте внимательны при использовании блочных областей видимости и переменных
объявленных в них. Именно эта ошибка, вместе с невнимательностью, часто
становится головной болью новичка.

:::
