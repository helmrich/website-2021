import Link from 'next/link';
import Image from 'next/image';
import Project from '../../../types/Project';
import styles from '../../../styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link href={`/project/${project.slug}`} passHref={true}>
      <article className={styles.card}>
        <div className={styles.textContainer}>
          <h3
            className={styles.title}
            style={{
              color: project.frontmatter.colorHexcode
                ? `#${project.frontmatter.colorHexcode}`
                : 'var(--secondary-fg-color)',
            }}
          >
            {project.frontmatter.title}
          </h3>
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
          <div
            className={styles.imageOverlay}
            style={{
              backgroundColor: project.frontmatter.colorHexcode
                ? `#${project.frontmatter.colorHexcode}`
                : 'var(--secondary-fg-color)',
            }}
          ></div>
        </div>
        <div>
          {project.frontmatter.tags.map((tag) => {
            <span>{tag}</span>;
          })}
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
