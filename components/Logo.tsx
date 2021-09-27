import Link from 'next/link';
import styles from '../styles/Logo.module.css';

const Logo = () => {
  return (
    <Link href="/">
      <a className={styles.logo}>
        <span className={styles.logoBracket}>{'<'}</span>
        <span>tobi</span>
        <span className={styles.logoBracket}>{'/>'}</span>
      </a>
    </Link>
  );
};

export default Logo;
