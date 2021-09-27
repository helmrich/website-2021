import styles from '../../styles/ProjectPage.module.css';
import HeadData from '../../components/HeadData';
import Project from '../../types/Project';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import Frontmatter from '../../types/Frontmatter';
import FooterWave from '../../components/footer/FooterWave';
import Footer from '../../components/footer/Footer';

interface ProjectPageProps {
  project: Project;
  content: string;
}

const ProjectPage = ({ project, content }: ProjectPageProps) => {
  return (
    <>
      <HeadData title={`Tobias Helmrich | ${project.frontmatter.title}`} />
      <header
        style={{
          background: `linear-gradient(rgba(243, 97, 175, 0.75), rgba(243, 97, 175, 0.75)), url(${project.frontmatter.imagePath})`,
        }}
        className={styles.header}
      >
        <div className={styles.headingContainer}>
          <h1>{project.frontmatter.title}</h1>
          <p>{project.frontmatter.description}</p>
        </div>
        <div className={styles.wave}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className={styles.shapeFill}
            ></path>
          </svg>
        </div>
      </header>
      <main className={styles.main}>
        <section
          dangerouslySetInnerHTML={{
            __html: marked(content),
          }}
        ></section>
        <FooterWave />
      </main>
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('projects'));
  const paths = files.map((file) => {
    return {
      params: { slug: file.replace('.md', '') },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

interface StaticProps {
  params: {
    slug: string;
  };
}

export async function getStaticProps({ params: { slug } }: StaticProps) {
  const markdownWithMeta = fs.readFileSync(
    path.join('projects', `${slug}.md`),
    'utf-8'
  );

  const { data, content } = matter(markdownWithMeta);

  return {
    props: {
      project: { slug: slug as string, frontmatter: data as Frontmatter },
      content,
    },
  };
}

export default ProjectPage;
