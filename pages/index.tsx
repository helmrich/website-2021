import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Header from '../components/header/Header';
import AboutSection from '../components/main/AboutSection';
import WorkSection from '../components/main/WorkSection';

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <AboutSection />
        <WorkSection />
      </main>

      <footer className={styles.footer}></footer>
    </>
  );
};

export default Home;
