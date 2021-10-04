import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import css from './HomepageFeatures.module.css';

const featureList = [
  {
    title: 'HTML и CSS',
    Svg: require('../../static/img/html_css.svg').default,
    description: (
      <>
        HTML - это то, что должно быть на сайте, контент, своего рода
        строительный материал для веб-страниц. CSS отвечает за оформление - то,
        как контент должен выглядеть. Именно благодаря CSS можно сделать
        различные эффекты, анимации и прочие вкусности.
      </>
    ),
    links: [
      { href: '/docs/html-css/intro', text: 'Материалы первого занятия' },
      { href: 'https://youtu.be/RrsUC7loFMQ', text: 'Запись лекции' },
      { href: '', text: 'Домашнее задание' },
    ],
  },
  {
    title: 'JavaScript',
    Svg: require('../../static/img/js.svg').default,
    description: (
      <>
        Язык программирования, который позволяет взаимодействовать с
        HTML-страницей, создавать динамически обновляемый контент, управлять
        мультимедиа, анимировать, делает всё, что угодно. Окей, не все, что
        угодно, но тем не менее, это удивительно, что можно достичь с помощью
        нескольких строк JavaScript кода.
      </>
    ),
    links: [
      { href: '/docs/html-css/intro', text: 'Материалы первого занятия' },
      { href: 'https://youtu.be/RrsUC7loFMQ', text: 'Запись лекции' },
      { href: '', text: 'Домашнее задание' },
    ],
  },
  {
    title: 'React',
    Svg: require('../../static/img/react.svg').default,
    description: (
      <>
        React это JavaScript библиотека, которая ставит своей целью упрощение
        разработки интерфейсов веб-приложений. Разработанный в Facebook и
        увидевший свет в 2013 году, React быстро стал лидером индустрии, и
        используется на таких гигантах как Facebook и Instagram, а также многих
        других.
      </>
    ),
    links: [
      { href: '/docs/html-css/intro', text: 'Материалы первого занятия' },
      { href: 'https://youtu.be/RrsUC7loFMQ', text: 'Запись лекции' },
      { href: '', text: 'Домашнее задание' },
    ],
  },
];

function Feature({ Svg, title, description, links }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={css.featureSvg} alt={title} />
      </div>
      <div className={`padding-horiz--md ${css.content}`}>
        <h3 className={css.title}>{title}</h3>
        <p>{description}</p>
        <ul className={css.linkList}>
          {links.map(link => (
            <li>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={css.features}>
      <div className="container">
        <div className="row">
          {featureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
