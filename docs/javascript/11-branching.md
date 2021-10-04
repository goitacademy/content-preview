---
id: branching
title: Ветвления
sidebar_label: Ветвления
sidebar_position: 11
---

import Image from '@components/Image';

Ветвления используются для выполнения различного кода в зависимсти от условия.
Принцип работы простой - результат условия приводится к булю `true` или `false`,
после чего поток программы направляется в ту или иную ветку.

## Инструкция `if`

<Image src="img/javascript/if.svg" alt="Синтаксис if" />

```js
if (условие) {
  // тело if
}
```

Входные данные, которые приводятся к булю называются **условием**. Условие
помещают за оператором `if` в круглых скобках. Если условие приводится к `true`,
то выполняется код в фигурных скобках тела `if`.

```js
let cost = 0;
const subscription = 'pro';

if (subscription === 'pro') {
  cost = 100;
}

console.log(cost); // 100
```

Если условие приводится к `false`, код в фигурных скобках будет пропущен.

```js
let cost = 0;
const subscription = 'free';

if (subscription === 'pro') {
  cost = 100;
}

console.log(cost); // 0
```

## Инструкция `if...else`

<Image src="img/javascript/if-else.svg" alt="Синтаксис if...else" />

```js
if (условие) {
  // тело if
} else {
  // тело else
}
```

Расширяет синтаксис `if` тем, что в случае если условие приводится к `false`,
выполнится код в фигурных скобках после оператора `else`.

```js
let cost;
const subscription = 'free';

if (subscription === 'pro') {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 0
```

Если условие приводится к `true`, тело блока `else` игнорируется.

```js
let cost;
const subscription = 'pro';

if (subscription === 'pro') {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 100
```

## Инструкция `else...if`

<Image src="img/javascript/else-if.svg" alt="Синтаксис else...if" />

Конструкция `if...else` может проверить и среагировать на выполнение или
невыполнение только одного условия.

Блок `else...if` позволяет добавить после `else` еще один оператор `if` с
условием. В конце цепочки может быть классический блок `else`, который
выполнится только в случае, когда ни одно из условий не приведётся к `true`.

```js
let cost;
const subscription = 'premium';

if (subscription === 'free') {
  cost = 0;
} else if (subscription === 'pro') {
  cost = 100;
} else if (subscription === 'premium') {
  cost = 500;
} else {
  console.log('Invalid subscription type');
}

console.log(cost); // 500
```

При первом же `true` проверки прекратятся и выполнится только один сценарий,
соответствующий этому `true`. Поэтому подобную запись следует читать как: ищу
первое совпадение условия, игнорирую все остальное.
