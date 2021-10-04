---
id: devtools
title: Инструменты разработчика
sidebar_label: Инструменты разработчика
sidebar_position: 9
---

import Image from '@components/Image';

Для эффективной разработки нужны инструменты, в том числе и при написании
HTML-кода. Поэтому необходимо научиться работать с инструментами разработчика.
Они присутствуют во всех современных браузерах и не требуют дополнительной
установки.

**Инструменты разработчика** - встроенный функционал браузера, который позволяет
получать информацию о исходном коде страницы, стилях, сетевых запросах и многое
другое.

Инструменты разработчика можно вызвать следующими методами.

- Нажав клавишу `F12`
- Комбинацией клавиш `Ctrl+Shift+I` для Windows
- Комбинацией клавиш `Cmd+Opt+I` для MacOS
- На веб-странице нажать правой клавишей мыши и выбрать пункт меню «Просмотреть
  код»

По-умолчанию в инструментах разработчика открывается вкладка `Elements`. В ней
представлена внутренняя HTML-структура документа. При этом, при наведении
курсора мыши на определенный элемент - он будет подсвечен в окне браузера
(viewport).

<Image alt="Инструменты разработчика" src='img/html-css/devtools.png' fullWidth />

Кроме инспектирования элементов, инструменты разработчика позволяют провести
изменения в HTML и CSS-коде. Такие изменения сразу будут отображены на
веб-странице, но в исходном коде сохраняться не будут. Эта функция удобна для
экспериментов с разметкой и стилями.

[Обзор всех возможностей DevTools](https://developer.chrome.com/devtools)