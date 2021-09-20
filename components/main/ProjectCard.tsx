import { Project } from '../../types/Project';
import styles from '../../styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  console.log(project);

  return (
    <article className={styles.card}>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{project.title}</h3>
        <h4 className={styles.description}>{project.description}</h4>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={project.imagePath}
          alt={`${project.imagePath} screenshot in mockup`}
          className={styles.image}
        />
        <div className={styles.imageOverlay}></div>
      </div>
      <div>
        {project.tags.map((tag) => {
          <span>{tag}</span>;
        })}
      </div>
    </article>
  );
};

export default ProjectCard;
