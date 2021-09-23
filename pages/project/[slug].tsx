import HeadData from '../../components/HeadData';
import Project from '../../types/Project';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';

interface ProjectPageProps {
  project: Project;
  content: string;
}

const ProjectPage = ({ project, content }: ProjectPageProps) => {
  return (
    <>
      <HeadData title={`Tobias Helmrich | ${project.frontmatter.title}`} />
      <header>
        <img
          src={project.frontmatter.imagePath}
          alt={`Screenshot of ${project.frontmatter.title}`}
        />
        <h1>{project.frontmatter.title}</h1>
      </header>
      <main>
        <section
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></section>
      </main>
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

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('projects', `${slug}.md`),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      project: { slug, frontmatter },
      content,
    },
  };
}

export default ProjectPage;
