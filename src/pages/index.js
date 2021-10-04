import React from 'react';
import Layout from '@theme/Layout';
// import Link from "@docusaurus/Link";
import css from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

export default function Home() {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Демо материалов" description="Демо материалов курса">
      <main className={css.main}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
