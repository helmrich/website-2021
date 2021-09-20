import styles from '../../styles/AboutSection.module.css';

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
              className="highlightedLink"
              target="_blank"
            >
              Medieninformatik (Computer Science and Media)
            </a>{' '}
            <a
              href="https://www.hdm-stuttgart.de/en"
              target="_blank"
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

export default AboutSection;
