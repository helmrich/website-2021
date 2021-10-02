import styles from '../../../styles/Header.module.css';
import { Color } from '../../../types/Color';
import Wave from '../../Wave';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.textWrapper}>
        <div className={styles.text}>
          <p className={styles.smallText}>
            Hi! I’m <span className="highlighted">Tobias Helmrich</span>,
            creative developer.
          </p>
          <p className={styles.largeText}>
            I love crafting beautiful and enjoyable web experiences.
          </p>
        </div>
      </div>
      <Wave height={125} width={150} fillColor={Color.PrimaryBg} />
    </header>
  );
};

export default Header;
