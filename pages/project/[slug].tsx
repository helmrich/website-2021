import styles from '../../styles/ProjectPage.module.css';
import HeadData from '../../components/HeadData';
import Project from '../../types/Project';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import Frontmatter from '../../types/Frontmatter';
import Footer from '../../components/footer/Footer';
import Wave from '../../components/Wave';
import { Color } from '../../types/Color';

interface ProjectPageProps {
  project: Project;
  content: string;
}

const ProjectPage = ({ project, content }: ProjectPageProps) => {
  const colorHexcode = project.frontmatter.colorHexcode
    ? `#${project.frontmatter.colorHexcode}`
    : '#f361af';

  return (
    <>
      <HeadData title={`Tobias Helmrich | ${project.frontmatter.title}`} />
      <header
        // 'bf' is the hexadecimal equivalent of 0.75 for the alpha channel (see https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4)
        style={{
          backgroundImage: `linear-gradient(${colorHexcode + 'bf'}, ${
            colorHexcode + 'bf'
          }), url(${project.frontmatter.imagePath})`,
          backgroundSize: 'cover',
        }}
        className={styles.header}
      >
        <div className={styles.headingContainer}>
          <h1>{project.frontmatter.title}</h1>
          <p>{project.frontmatter.description}</p>
        </div>
        <Wave width={175} height={70} fillColor={Color.PrimaryBg} />
      </header>
      <main className={styles.main}>
        <section
          dangerouslySetInnerHTML={{
            __html: marked(content),
          }}
        ></section>
        <Wave width={125} height={115} fillColor={Color.SecondaryBg} />
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
