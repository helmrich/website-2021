import styles from '../../styles/WorkSection.module.css';
import { Project } from '../../types/Project';
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
          console.log(project);

          return (
            <ProjectCard
              key={`${project.title}-${project.year}`}
              project={project}
            />
          );
        })}
      </section>

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
    </section>
  );
};

export default WorkSection;
