import Link from 'next/link';
import Logo from '../Logo';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <section className={styles.information}>
        <Link href="/impressum">
          <a className={`${styles.link} ${styles.imprint}`}>Imprint</a>
        </Link>
        <p className={styles.copyright}>
          &copy;{new Date().getFullYear()} Tobias Helmrich
        </p>
      </section>
    </footer>
  );
};

export default Footer;
