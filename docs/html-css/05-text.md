---
id: text
title: Разметка текста
sidebar_label: Разметка текста
sidebar_position: 5
---

import CodepenEmbed from '@components/CodepenEmbed';

import Image from '@components/Image';

## Абзац

[Тег `<p>`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element) -
универсальный контейнер для группировки мелких фразовых элементов, отделения их
друг от друга, и дальнейшей стилизации. По умолчанию абзац это блочный элемент,
то есть он начинается с новой строки и имеет вертикальные отступы, которые можно
будет изменить в CSS.

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque eligendi, a
  eaque, esse itaque porro non exercitationem odio earum quos perferendis!
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, totam velit
  asperiores non temporibus ut nisi minima?
</p>
```

Часто необходимо заполнить тег текстом-болванкой, когда самого текста, который
будет размещаться на сайте, ещё нет. Для этого используют специальный
заполнитель (текст-рыба).

:::note Полезно

В редакторе VSCode, в HTML-документе можно набрать код `lorem10`, после чего
нажать клавишу `Tab`. Это создаст массив текста из 10 слов. Вместо 10 можно
поставить любое число.

:::

## Заголовки

[Группа тегов `<h1>...<h6>`](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements) -
определяет текстовые заголовки смысловых разделов разного уровня, которые
указывают важность секции контента расположенного после них. Это инструмент
структурирования текстового контента.

<CodepenEmbed
  title="lesson-01-headings"
  src="https://codepen.io/goit-academy/embed/mdVZepj?height=265&theme-id=default&default-tab=result"
/>

Тег `<h1>` чаще всего используется только один раз, как основной заголовок
страницы. Остальные заголовки могут использоваться сколько угодно раз, но их
всегда следует применять правильно, придерживаясь иерархии.

:::note Полезно

Поисковые системы обращают особое внимание на заголовки, поэтому корректное
использование этой группы тегов крайне важно. Не определяйте уровень заголовка
по размеру текста на макете. Не весь большой текст - заголовки. Заголовок это
то, что по смыслу оглавляет секцию контента.

:::

## Списки

Списки позволяют упорядочить коллекции и представить их в наглядном и удобном
для пользователя виде. Список это контейнер, детьми которого могут быть только
элементы списка, теги `<li>`.

[Тег `<ol>`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element) -
создаёт нумерованный (упорядоченный) список, то есть каждый элемент списка
пронумерован. Браузер нумерует элементы по порядку автоматически и если удалить
один или несколько элементов такого списка, остальные номера будут автоматически
пересчитаны. Нумерацией элементов можно управлять при помощи специальных
атрибутов списка.

Используется для перечисления действий в определенном порядке, например рецепт.

```html
<h1>Как заварить чай</h1>
<p>Пошаговая инструкция для чайников, просто повтори и у тебя всё получится!</p>

<ol>
  <li>Закипятить воду</li>
  <li>Засыпать чай в чашку</li>
  <li>Налить в чашку кипяток</li>
  <li>Ждать 10 минут, после чего можно пить</li>
</ol>
```

[Тег `<ul>`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element) -
создаёт маркированный (неупорядоченный) список, каждый элемент которого
начинается с небольшого символа (маркера). При помощи CSS маркер можно будет
убрать или заменить.

Используется для перечисления набора в произвольном порядке, например список
курортов.

```html
<h1>Самые горячие курорты</h1>
<p>В этом году эксперты рекомендуют посетить следующие локации.</p>

<ul>
  <li>Тунис</li>
  <li>Турция</li>
  <li>Греция</li>
  <li>Египет</li>
</ul>
```

:::tip Внимание

По спецификации в теги `<ul>` и `<ol>` можно вкладывать только элементы спика -
теги `<li>`. При этом, внутри тегов `<li>`, могут быть вложены другие
произвольные теги.

:::

### Вложенные списки

Сделать многоуровневый список просто - вкладываем в элемент списка еще один
список. Это часто применяется для создания многоуровневых меню.

```html
<ul>
  <li>
    Компьютеры и комплектующие
    <ul>
      <li>Процессоры</li>
      <li>Мониторы</li>
      <li>Видеокарты</li>
    </ul>
  </li>
  <li>
    Бытовая техника
    <ul>
      <li>Холодильники</li>
      <li>Телевизоры</li>
      <li>Стиральные машины</li>
    </ul>
  </li>
  <li>
    Товары для дома
    <ul>
      <li>Кресла</li>
      <li>Матрасы</li>
      <li>Электрокамины</li>
    </ul>
  </li>
</ul>
```

## Ссылка

[Тег `<a>`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element) -
предназначен для создания ссылок, текста, при клике по которому переходим на
другую страницу, скачиваем файл и т. п. Текст ссылки отображается в браузере с
подчёркиванием, цвет шрифта синий, при наведении на ссылку курсор мыши меняет
вид.

Адрес ссылки задается в обязательном атрибуте `href="адрес"`. Адрес это
[URL](https://semantica.in/blog/chto-takoe-url.html), который может указывать на
страницу, файл, любой ресурс.

```html
<a href="https://google.com">Ссылка на главную страницу Google</a>
```

### Атрибуты `target` и `rel`

По умолчанию ссылка открывается в текущей вкладке браузера. Атрибут
`target="значение"` определяет то, в какой вкладке должен открываться документ к
которому ведёт ссылка. При значении `_blank` страница открывается в новой
вкладке браузера.

Атрибут `rel` дополняет атрибут `href` информацией об отношении между текущим и
связанным документом и используется в паре с `target="_blank"`.

```html
<!-- Ссылка на внешний ресурс, откроется в текущей вкладке -->
<a href="https://www.facebook.com/">Facebook</a>

<!-- Ссылка на внешний ресурс, откроется в новой вкладке -->
<a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener">
  Facebook
</a>
```

### Атрибут `download`

Если в `href` ссылки указан путь к файлу, браузер попытается его открыть в
текущем окне, если умеет обрабатывать файлы этого типа. Обычно так происходит с
изображениями и PDF-файлами.

Атрибут `download="имя файла"` сообщает браузеру, что указанный ресурс должен
быть не открыт, а загружен в момент, когда пользователь кликнет по ссылке.
Значение атрибута задаёт имя загружаемого файла, то есть можно изменить имя во
время загрузки. Атирбут можно использовать без указания значения, тогда будет
использовано имя оригинального файла.

```html
<!-- Ссылка на скачивание файла -->
<a href="/путь/к/cv.pdf" download>Скачать резюме</a>
```

### Специальные значения `href`

У ссылок есть возможность не только переходить на другие страницы и скачивать
файлы, но и совершать звонки на телефоны, отправлять сообщения или звонить по
скайпу.

```html
<!-- Ссылка на телефонный номер -->
<a href="tel:+14251234563">+1 (425) 123-45-63</a>

<!-- Ссылка на адрес электронной почты  -->
<a href="mailto:example@mail.ru">example@mail.ru</a>
```

### Ссылка-якорь

Ссылка с якорем используется для создания навигации по текущей странице.
Например, для быстрого перехода к какой-то секции (как в этих материалах). При
клике по такой ссылке, браузер проскролит страницу до якоря, без её
перезагрузки.

Для содания якоря необходимо добавить тегу, до которого мы хотим проскролить
страницу, атрибут `id` - уникальный идентификатор. А атрибуту `href` у ссылки
задать значение начинающееся с символа `#`, после которого указан идентификатор
элемента.

<CodepenEmbed
  title="lesson-01-anchor-links"
  src="https://codepen.io/goit-academy/embed/WNrqQzV?height=265&theme-id=default&default-tab=result"
/>

## Кнопка

Интерактивный элемент, который оживляется при помощи JavaScript. Например,
кнопка открытия и закрытия всплывающего окна, переключения мобильного меню или
отправки формы. Необходимо явно указывать атрибут `type`. Его значение по
умолчанию - `submit`, но чаще всего нужно значение `button`. Да, кнопка типа
«кнопка», такая особенность.

```html
<button type="button">Открыть модальное окно</button>
```

:::note Полезно

Важно не путать ссылку и кнопку. Если при клике в элемент интерфейса происходит
переход по какому-то адресу, то есть есть `href`, то это ссылка. Если же при
клике происходит что-то без перезагрузки или перенаправления страницы, то это
гарантированно кнопка.

:::

## Тег `<span>`

Универсальный контейнер для мелкого текстового контента, например отдельных
слов, частей слов или целых фраз внутри текстового массива. Аналогично тегу
`<div>`, не имеет никакого семантического значения и используется для
дополнительной стилизации.

```html
<p>
  Тег <span class="accent">span</span> это универсальный контейнер для мелкого
  текстового контента.
</p>
```

:::note Интересно

Спану с атрибутом `class="accent"` при помощи CSS можно будет добавить стили,
например другой цвет текста, его размер и т. п.

:::

## Тег `<time>`

Дату и время можно написать просто текстом, но лучше использовать специальный
тег `<time>`. Дата для человека это текст внутри тега, а для машины - значение
атрибута `datetime` в формате
[ISO 8601](https://ru.wikipedia.org/wiki/ISO_8601).

```html
<p>
  Последние новости на <time datetime="2019-12-14">14 декабря 2019 года</time>.
</p>

<p>
  Заседание состоялось в <time datetime="2018-07-14T11:30">11:30 утра</time>.
</p>
```

Браузер отобразит только текст внутри тега. Человек увидит понятный текст, а
асистивная технология прочитает атрибут `datetime` и получит точное значение в
нужном формате.

## Тег `<address>`

Предназначен для хранения контактной информации об авторе статьи, блока
информации или веб-страницы в целом. Контактная информация может быть в любой
подходящей форме, например физический адрес, адрес электронной почты, ссылка на
сайт, номер телефона, тег соцсети.

```html
<address>
  г. Киев, <br />
  Бульвар Леси Украинки, д. 26, <br />
  4й этаж офис 427
</address>

<address>
  <a href="mailto:mango@mail.pig">mango@mail.pig</a>
  <a href="tel:+1112223344">(111) 222-33-44</a>
</address>
```

Обратите внимание на тег `<br>`, он используется для разметки массива текста с
принудительными переносами строк для визуального форматирования. Например
разметка одной строки адреса в несколько строк.

:::warning Внимание

Тег `<br/>` (сокращение от line break) не используется для того чтобы
принудительно добавить разрывы строки между тегами или разбить массив текста на
абазцы.

:::

## Атрибут `lang`

Если на странице есть текст на разных языках, для того чтобы сделать её более
доступной для ассистивных технологий, можно задавать атрибут `lang` не только
всему документу, но и отдельным тегам.

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta name="description" content="Инструкция по эксплуатации пирожков" />
    <title>Пирожки это внусно!</title>
  </head>
  <body>
    <p>Инструкция по эксплуатации</p>
    <p lang="en">Operating instructions</p>
    <p lang="fr">Manuel d'utilisation</p>
  </body>
</html>
```

:::tip Внимание

Это возможность, рекомендация, а не обязательное требование. Вёрстка с учётом
поддержки ассистивных технологий выполняется только по требованию заказчика.

:::
