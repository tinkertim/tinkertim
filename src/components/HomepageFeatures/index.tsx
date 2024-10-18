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
    title: 'Divergency-Affirming Philosophy',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Traditional therapy often attempts to treat neurodivergent traits as part of,
        or &mdash; in unfortunately far too many cases &mdash; the cause or root of 
        the problem the person is seeking help in solving. The proposed "treatment" 
        goes beyond "<em>just be like everyone else</em>.", in fact in a therapy setting, 
        it's often prescribed that we should <em>just think</em> like everyone else.      
      </>
    ),
  },
  {
    title: 'Carving Out The Comfort You Deserve',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        I help clients learn how to describe boundaries they need to set in order to maximize 
        their benefit from Allistic bosses and therapists; I help people explain concepts like 
        masking and Alexithymia and how to advocate for their basic comfort. You'll also find me 
        very sympathetic to the burden of fitting in being almost always entirely on the shoulders of
        the Autistic person.
      </>
    ),
  },
  {
    title: 'Life Recovery After Brain Trauma',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        I beat Brain Cancer after undergoing two rounds of brain surgery, multiple rounds of chemo and dozens of rounds
        of debilitating radiation. At the time, I also wasn't in a position to stop work, and I was ill-prepared to return once 
        I finally could. 
        However your brain was traumatized, we share the same basic struggle; I'm here to help you communicate new
        boundaries, help with unempathetic caregivers and help you avoid a whole lot of painful pitfalls.
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
