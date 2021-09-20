import type { GetStaticProps, NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Header from '../components/header/Header';
import AboutSection from '../components/main/AboutSection';
import WorkSection from '../components/main/WorkSection';
import { Project } from '../types/Project';
import ContactSection from '../components/main/ContactSection';

interface HomeProps {
  projects: Project[];
}

const Home = ({ projects }: HomeProps) => {
  console.log(projects);

  return (
    <>
      <Header />

      <main className={styles.main}>
        <AboutSection />
        <WorkSection projects={projects} />
        <ContactSection />
      </main>

      <footer className={styles.footer}></footer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      projects: [
        {
          title: 'consumat.io',
          description: 'Movie and Series Tracker Web App',
          tags: [
            'TypeScript',
            'React',
            'Tailwind CSS',
            'Next.js',
            'Apollo GraphQL',
          ],
          year: 2021,
          imagePath: '/images/projects/consumat-io.png',
          detailImagePaths: [
            '/images/projects/consumat-io-1.png',
            '/images/projects/consumat-io-2.png',
          ],
        },
        {
          title: 'Etch-a-Sketch',
          description: 'Sketch Web App',
          tags: [
            'TypeScript',
            'React',
            'Tailwind CSS',
            'Next.js',
            'Apollo GraphQL',
          ],
          year: 2021,
          imagePath: '/images/projects/consumat-io.png',
          detailImagePaths: [
            '/images/projects/consumat-io-1.png',
            '/images/projects/consumat-io-2.png',
          ],
        },
        {
          title: 'Kisetsu',
          description: 'Anime Tracking App',
          tags: [
            'TypeScript',
            'React',
            'Tailwind CSS',
            'Next.js',
            'Apollo GraphQL',
          ],
          year: 2021,
          imagePath: '/images/projects/consumat-io.png',
          detailImagePaths: [
            '/images/projects/consumat-io-1.png',
            '/images/projects/consumat-io-2.png',
          ],
        },
      ],
    },
  };
};

export default Home;
