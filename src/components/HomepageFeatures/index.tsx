import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
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
    title: '技术创新',
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

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
