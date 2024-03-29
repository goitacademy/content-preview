---
id: semantics
title: Семантика
sidebar_label: Семантика
sidebar_position: 4
---

import Image from '@components/Image';

Разметка будущей веб-страницы должна иметь смысл, как страница газеты или
журнала. На странице есть секции, заголовки, списки, изображения, абзацы текста
и т. п. Для описания всего этого богатства типов контента есть соответствующие
теги. То есть семантика изначально является частью HTML, но она бесполезна, если
реализована неправильно.

**Семантическая разметка** - подход к созданию HTML-разметки основанный на
использовании тегов в соответствии с их предназначением согласно спецификации и
подходящими под тип размечаемого контента.

<Image alt="Семантическая разметка" src="img/html-css/semantics.jpg" maxWidth={640} />

В большинстве случаев, семантическая разметка это просто использование здравого
смысла. При разметке абзаца текста мы используем тег `<p>`, для разметки ссылки
есть тег `<a>`, контентное изображение представлено тегом `<img>` и т. д.

То есть семантическая разметка означает, что теги **не выбираются** на основе
того, как они отображаются в браузере - они выбираются на основе типа и
структуры размечаемого контента.
