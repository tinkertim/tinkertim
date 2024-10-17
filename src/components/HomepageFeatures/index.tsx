import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Autism-affirming Philosophy',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        ABA isn't for everyone, and fits people differently when it is for them. As someone 
        with Autism who doesn't respond well to ABA, I affirm and normalize autistic traits
        while providing insight and experience to help you solve problems.  
      </>
    ),
  },
  {
    title: 'A New Normal After Brain Trauma',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Recovering from any kind of brain trauma is incredibly hard; recovering from 
        brain trauma when you also have Autism feels beyond cruel for many adults. Those with Autism
        who survive cancer, accidents, violence and disasters recover better with empathetic
        advocates and supporters, especially when returning to work.
      </>
    ),
  },
  {
    title: 'Being Authentic AND Autistic In Tech',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        As someone with Alexithemiya, I'm all too familiar with how difficult it can 
        be to navigate workplace stress as a trauma survivor.  
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

export default function HomepageFeatures(): JSX.Element {
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
