import styles from '../../../styles/ContactSection.module.css';
import { Color } from '../../../types/Color';
import Wave from '../../Wave';

const ContactSection = () => {
  return (
    <section id="contact">
      <h3 className={styles.largeText}>Want to work with me?</h3>
      <h4 className={styles.smallText}>
        Get in touch with me on{' '}
        <a
          href="https://twitter.com/tobias_helmrich"
          target="_blank"
          rel="noopener noreferrer"
          className="highlightedLink"
        >
          Twitter
        </a>{' '}
        or send me a{' '}
        <a
          href="mailto:tobias.g.helmrich@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="highlightedLink"
        >
          mail
        </a>
        .
      </h4>
      <Wave width={125} height={115} fillColor={Color.SecondaryBg} />
    </section>
  );
};

export default ContactSection;
