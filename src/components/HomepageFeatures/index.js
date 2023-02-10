import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '简单,易用',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
       浅显易懂，让你快速部署.
      </>
    ),
  },
  {
    title: '服务上云',
    Svg: require('@site/static/img/yun.svg').default,
    description: (
      <>
        关注最新技术，紧跟时代前沿.
      </>
    ),
  },
  {
    title: '技术支持',
    Svg: require('@site/static/img/support.svg').default,
    description: (
      <>
        为您提供技术支持.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
