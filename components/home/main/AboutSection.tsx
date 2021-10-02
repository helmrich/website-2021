import styles from '../../../styles/AboutSection.module.css';
import { Color } from '../../../types/Color';
import Wave from '../../Wave';

const AboutSection = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>

      <div className={styles.contentWrapper}>
        <div className={styles.placeholderBox}></div>
        <article className={styles.informationText}>
          <p className={styles.basicInformationText}>
            Nice to meet you! I’m Tobias Helmrich, creative front-end developer
            and student currently in my second year of studies towards a
            bachelor’s degree in{' '}
            <a
              href="https://www.hdm-stuttgart.de/en/prospective_students/academic_programs/all_programs/steckbrief?sgang_ID=550033"
              target="_blank"
              rel="noopener noreferrer"
              className="highlightedLink"
            >
              Medieninformatik (Computer Science and Media)
            </a>{' '}
            <a
              href="https://www.hdm-stuttgart.de/en"
              target="_blank"
              rel="noopener noreferrer"
              className="highlightedLink"
            >
              @HdM Stuttgart
            </a>
            .
          </p>
          <p className={styles.furtherInformationText}>
            I love crafting beautiful web experiences using awesome
            technologies. Currently I’m focusing on learning and building
            websites in TypeScript using React with Next.js while always open to
            learning and exploring new languages, frameworks and tools to create
            even better products. Besides that I’m interested in 3D modeling
            using Blender and designing user interfaces in Figma.
          </p>
        </article>
      </div>
      <Wave width={150} height={100} fillColor={Color.SecondaryBg} />
    </section>
  );
};

export default AboutSection;
