import styled from 'styled-components';
import { Color } from '../../../types/Color';
import Project from '../../../types/Project';
import Wave from '../../Wave';
import ProjectCard from './ProjectCard';

const MainSection = styled.section`
  background-color: var(--secondary-bg-color);
`;

const ProjectsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: 2rem;
  width: 100%;
  max-width: var(--max-width);
  padding: 0;

  @media only screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr;
  }
`;

interface WorkSectionProps {
  projects: Project[];
}

const WorkSection = ({ projects }: WorkSectionProps) => {
  return (
    <MainSection id="work">
      <h2>Work</h2>

      <ProjectsSection>
        {projects.map((project) => {
          return (
            <ProjectCard
              key={`${project.frontmatter.title}-${project.frontmatter.year}`}
              project={project}
            />
          );
        })}
      </ProjectsSection>
      <Wave
        width={150}
        height={80}
        fillColor={Color.PrimaryBg}
        inverted={true}
      />
    </MainSection>
  );
};

export default WorkSection;
