import styles from '../../../styles/WorkSection.module.css';
import { Color } from '../../../types/Color';
import Project from '../../../types/Project';
import Wave from '../../Wave';
import ProjectCard from './ProjectCard';

interface WorkSectionProps {
  projects: Project[];
}

const WorkSection = ({ projects }: WorkSectionProps) => {
  return (
    <section id="work" className={styles.work}>
      <h2>Work</h2>

      <section className={styles.projects}>
        {projects.map((project) => {
          return (
            <ProjectCard
              key={`${project.frontmatter.title}-${project.frontmatter.year}`}
              project={project}
            />
          );
        })}
      </section>
      <Wave
        width={150}
        height={80}
        fillColor={Color.PrimaryBg}
        inverted={true}
      />
    </section>
  );
};

export default WorkSection;
