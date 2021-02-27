import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to Play- Anytime',
    imageUrl: 'img/play-anywhere.svg',
    description: (
      <>
        Arima was built with intention to make games easy and quick to set up.
        Just join a voice channel and type a command!
      </>
    ),
  },
  {
    title: 'Get Music From Anywhere',
    imageUrl: 'img/music-sources.svg',
    description: (
      <>
        We support links from spotify, soundcloud, youtube, and more to come.
        Heck, you can create your own playlist <em>through</em> Arima!
      </>
    ),
  },
  {
    title: 'Rich Leveling System',
    imageUrl: 'img/leveling.svg',
    description: (
      <>
        Earn XP and rise through the ranks every game! You can battle against
        your friends with the guild and global leaderboard!
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="Arima Documentation"
      description="Arima the Discord Bot's Documentation"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/start')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
