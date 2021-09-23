import { Project } from '../../types/Project';
import styles from '../../styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  console.log(project.frontmatter.imagePath);

  return (
    <article className={styles.card}>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{project.frontmatter.title}</h3>
        <h4 className={styles.description}>
          {project.frontmatter.description}
        </h4>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={project.frontmatter.imagePath}
          alt={`${project.frontmatter.imagePath} screenshot in mockup`}
          className={styles.image}
        />
        <div className={styles.imageOverlay}></div>
      </div>
      <div>
        {project.frontmatter.tags.map((tag) => {
          <span>{tag}</span>;
        })}
      </div>
    </article>
  );
};

export default ProjectCard;
