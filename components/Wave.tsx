import styles from '../styles/Wave.module.css';
import { Color } from '../types/Color';
// import useIsScrolling from '../hooks/useIsScrolling';

interface WaveProps {
  height: number;
  width: number;
  fillColor: Color;
  inverted?: boolean;
}

const Wave = ({ height, width, fillColor, inverted = false }: WaveProps) => {
  // const isScrolling = useIsScrolling();

  return (
    <div className={`${styles.wave} ${inverted && styles.inverted}`}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ height: `${height}px`, width: `${width}%` }}
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          style={{
            fill:
              fillColor === Color.SecondaryBg
                ? 'var(--secondary-bg-color)'
                : fillColor === Color.PrimaryFg
                ? 'var(--primary-fg-color)'
                : fillColor === Color.SecondaryFg
                ? 'var(--secondary-fg-color)'
                : 'var(--primary-bg-color)',
          }}
        ></path>
      </svg>
    </div>
  );
};

export default Wave;
