import styled from 'styled-components';
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

const Header = styled.header`
  background-color: var(--secondary-bg-color);
  position: relative;
  width: 100%;
  height: 100vh;
  padding-top: var(--nav-height);
`;

const HeadingContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: var(--max-width);
  padding: 0 25px 100px 25px;
  color: var(--primary-bg-color);

  h1 {
    font-size: clamp(2rem, 2rem + 2vw, 5rem);
    text-align: left;
  }

  p {
    margin: 0;
  }

  @media only screen and (min-width: 768px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

interface MainProps {
  colorHexcode?: string;
}

const Main = styled.main<MainProps>`
  display: flex;
  position: relative;

  h3 {
    ${({ colorHexcode }) => colorHexcode && `color: #${colorHexcode}`};
    width: 100%;
    text-align: left;
  }

  section {
    display: flex;
    padding-top: 50px;
    padding-bottom: 150px;
    gap: 1rem;
  }

  p {
    font-size: var(--normal-continuous-text-size);
    line-height: var(--normal-continuous-text-line-height);
  }

  @media only screen and (min-width: 1280px) {
    justify-content: center;
  }
`;

const ProjectDetails = styled.section`
  max-width: var(--max-width);
`;

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
      <HeadData title={`${project.frontmatter.title} | Tobias Helmrich`} />
      <Header
        // 'bf' is the hexadecimal equivalent of 0.75 for the alpha channel (see https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4)
        style={{
          backgroundImage: `linear-gradient(${colorHexcode + 'bf'}, ${
            colorHexcode + 'bf'
          }), url(${project.frontmatter.imagePath})`,
          backgroundSize: 'cover',
        }}
      >
        <HeadingContainer>
          <h1 style={{ color: '#ffffff' }}>{project.frontmatter.title}</h1>
          <p style={{ color: '#ffffff' }}>{project.frontmatter.description}</p>
        </HeadingContainer>
        <Wave width={175} height={70} fillColor={Color.PrimaryBg} />
      </Header>
      <Main colorHexcode={project.frontmatter.colorHexcode}>
        <ProjectDetails
          dangerouslySetInnerHTML={{
            __html: marked(content),
          }}
        ></ProjectDetails>
        <Wave
          width={150}
          height={100}
          fillColor={Color.SecondaryBg}
          inverted={true}
        />
      </Main>
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
