import styled, { css, keyframes } from 'styled-components';
import Link from 'next/link';
import Project from '../../../types/Project';
import { useInView } from 'react-intersection-observer';

interface CardProps {
  popUp: boolean;
}

const popUpAnimation = keyframes`
  0% {
    transform: scale(1.0);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1.0);
    opacity: 1;
  }
`;

const Card = styled.article<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: var(--primary-bg-color);
  border-radius: var(--border-radius);
  height: 100%;
  transition: box-shadow 0.25s, transform 0.25s, opacity 0.25s;
  opacity: ${({ popUp }) => (popUp ? 1 : 0)};

  box-shadow: var(--box-shadow);

  &:hover {
    cursor: pointer;
    box-shadow: var(--box-shadow-hover);
    transform: translateY(-10px);
    transform: translateX(-5px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0px);
    transform: translateX(0px);
  }

  ${({ popUp }) =>
    popUp &&
    css`
      animation-name: ${popUpAnimation};
      animation-duration: 0.25s;
      /* animation-fill-mode: forwards; */
    `}
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <Link href={`/project/${project.slug}`} passHref={true}>
      <Card ref={ref} popUp={inView}>
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
