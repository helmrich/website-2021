import styled from "styled-components";
import HeadData from "../../components/HeadData";
import Project from "../../types/Project";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Frontmatter from "../../types/Frontmatter";
import Footer from "../../components/footer/Footer";
import Wave from "../../components/Wave";
import { Color } from "../../types/Color";

const Header = styled.header`
  background-color: var(--secondary-bg-color);
  position: relative;
  width: 100%;
  height: 75vh;
  padding-top: var(--nav-height);
`;

const HeadingContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
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
  $colorHexcode?: string;
}

const Main = styled.main<MainProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  h3 {
    ${({ $colorHexcode }) => $colorHexcode && `color: #${$colorHexcode}`};
    width: 100%;
    text-align: left;
  }

  section {
    display: flex;
    padding-top: 50px;
    gap: 1rem;
  }

  p {
    font-size: var(--normal-continuous-text-size);
    line-height: var(--normal-continuous-text-line-height);
  }
`;

interface ProjectDetailsProps {
  $borderColor?: string;
  $hoverColor?: string;
}

const ProjectDetails = styled.section<ProjectDetailsProps>`
  padding-bottom: 0;
  width: 100%;
  max-width: var(--max-width);
  align-items: flex-start;

  a {
    transition: all 0.25s;
    border-bottom: 3px solid
      ${({ $borderColor }) =>
        $borderColor ? `#${$borderColor}` : "var(--secondary-fg-color)"};

    &:hover {
      color: ${({ $hoverColor }) =>
        $hoverColor ? `#${$hoverColor}` : "var(--primary-bg-color)"};
      background-color: ${({ $borderColor }) =>
        $borderColor ? `#${$borderColor}` : "var(--secondary-fg-color)"};
    }
  }
`;

interface TagProps {
  $backgroundColor?: string;
  $color?: string;
}

const Tags = styled.section<TagProps>`
  width: 100%;
  max-width: var(--max-width);
  padding-bottom: 0;

  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  li {
    display: inline;
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: ${({ $backgroundColor }) =>
      $backgroundColor ? `#${$backgroundColor}` : "var(--secondary-fg-color)"};
    color: ${({ $color }) =>
      $color ? `#${$color}` : "var(--primary-bg-color)"};
    border-radius: var(--border-radius);
  }
`;

const Links = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding-bottom: 150px;
  max-width: var(--max-width);

  @media only screen and (min-width: 360px) {
    flex-direction: row;
  }
`;

interface ButtonProps {
  $backgroundColor?: string;
  $color?: string;
}

const Button = styled.a<ButtonProps>`
  padding: 0.75rem 2rem;
  font-family: var(--main-font);
  font-weight: 700;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? `#${$backgroundColor}` : "var(--primary-bg-color)"};
  color: ${({ $color }) =>
    $color ? `#${$color}` : "var(--secondary-fg-color)"};
  border-radius: var(--border-radius);
  border: 4px solid
    ${({ $color }) => ($color ? `#${$color}` : "var(--secondary-fg-color)")};
  box-shadow: var(--box-shadow);
  transition: all 0.25s;

  &:hover {
    background-color: ${({ $color }) =>
      $color ? `#${$color}` : "var(--secondary-fg-color)"};
    color: ${({ $backgroundColor }) =>
      $backgroundColor ? `#${$backgroundColor}` : "var(--primary-bg-color)"};
    box-shadow: var(--box-shadow-hover);
  }

  &:focus {
    box-shadow: none;
  }
`;

interface ProjectPageProps {
  project: Project;
  content: string;
}

const ProjectPage = ({ project, content }: ProjectPageProps) => {
  const colorHexcode = project.frontmatter.colorHexcode
    ? `#${project.frontmatter.colorHexcode}`
    : "#f361af";

  return (
    <>
      <HeadData title={`${project.frontmatter.title} | Tobias Helmrich`} />
      <Header
        // 'bf' is the hexadecimal equivalent of 0.75 for the alpha channel (see https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4)
        style={{
          backgroundImage: `linear-gradient(${colorHexcode + "bf"}, ${
            colorHexcode + "bf"
          }), url(${project.frontmatter.imagePath})`,
          backgroundSize: "cover",
        }}
      >
        <HeadingContainer>
          <h1 style={{ color: "#ffffff" }}>{project.frontmatter.title}</h1>
          <p style={{ color: "#ffffff" }}>{project.frontmatter.description}</p>
        </HeadingContainer>
        <Wave width={175} height={70} fillColor={Color.PrimaryBg} />
      </Header>
      <Main $colorHexcode={project.frontmatter.colorHexcode}>
        <ProjectDetails
          dangerouslySetInnerHTML={{
            __html: marked(content),
          }}
          $borderColor={project.frontmatter.colorHexcode}
        ></ProjectDetails>
        <Tags $backgroundColor={project.frontmatter.colorHexcode}>
          <ul>
            {project.frontmatter.tags.map((tag, index) => {
              return <li key={index}>{tag}</li>;
            })}
          </ul>
        </Tags>
        <Links>
          {project.frontmatter.githubLinkUrl && (
            <Button
              href={project.frontmatter.githubLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              $color={project.frontmatter.colorHexcode}
            >
              GitHub
            </Button>
          )}
          {project.frontmatter.linkUrl && (
            <Button
              href={project.frontmatter.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              $color={project.frontmatter.colorHexcode}
            >
              See Project
            </Button>
          )}
        </Links>
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
  const files = fs.readdirSync(path.join("projects"));
  const paths = files.map((file) => {
    return {
      params: { slug: file.replace(".md", "") },
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
    path.join("projects", `${slug}.md`),
    "utf-8",
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
