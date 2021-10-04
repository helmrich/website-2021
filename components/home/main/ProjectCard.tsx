import styled from 'styled-components';
import Link from 'next/link';
import Project from '../../../types/Project';

const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: var(--primary-bg-color);
  border-radius: var(--border-radius);
  height: 100%;

  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 25px 50px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

const Title = styled.h3`
  text-transform: uppercase;
  font-size: clamp(1rem, 1rem + 1vw, 2rem);
`;

const Description = styled.h4`
  font-weight: 400;
  opacity: 0.5;
  font-size: clamp(0.75rem, 0.75rem + 1vw, 1rem);
`;

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  border-radius: 0.25rem 0 var(--border-radius) 0;
  overflow: hidden;
  width: 85%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  transform: scale(1.004);
  object-fit: cover;
`;

const ImageOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.7;
`;

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link href={`/project/${project.slug}`} passHref={true}>
      <Card>
        <Text>
          <Title
            style={{
              color: project.frontmatter.colorHexcode
                ? `#${project.frontmatter.colorHexcode}`
                : 'var(--secondary-fg-color)',
            }}
          >
            {project.frontmatter.title}
          </Title>
          <Description>{project.frontmatter.description}</Description>
        </Text>
        <ImageContainer>
          <Image
            src={project.frontmatter.imagePath}
            alt={`${project.frontmatter.imagePath} screenshot in mockup`}
          />
          <ImageOverlay
            style={{
              backgroundColor: project.frontmatter.colorHexcode
                ? `#${project.frontmatter.colorHexcode}`
                : 'var(--secondary-fg-color)',
            }}
          ></ImageOverlay>
        </ImageContainer>
        {/* TODO */}
        {/* <div>
          {project.frontmatter.tags.map((tag) => {
            <span>{tag}</span>;
          })}
        </div> */}
      </Card>
    </Link>
  );
};

export default ProjectCard;
