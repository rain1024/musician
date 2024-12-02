import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Tutorials',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    link: './docs/roadmap',
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Showcase',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    link: './showcase/', 
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Labs',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    link: './labs/', 
    description: (
      <>
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link} className={styles.featureLink}>
        {/* Wrap content with <a> for linking */}
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </a>
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