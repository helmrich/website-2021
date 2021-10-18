import styled, { keyframes, css } from 'styled-components';
import { Color } from '../types/Color';

interface MainProps {
  inverted: boolean;
  animated: boolean;
}

const moveToRight = keyframes`
  from {
    left: -50%;
  }
  to {
    left: 0%;
  }
`;

const Main = styled.div<MainProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  // Using translateY() here to "fix" problems with
  // subpixel rendering (see https://stackoverflow.com/questions/63724661/html-css-gap-between-header-and-shape-divider)
  transform: translateY(2px) rotate(180deg);

  svg {
    position: relative;
    display: block;

    ${({ animated }) =>
      animated &&
      css`
        animation-name: ${moveToRight};
        animation-duration: 4s;
        animation-delay: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-direction: alternate-reverse;
      `}
  }

  ${({ inverted }) =>
    inverted &&
    `
    transform: scaleY(-1);
  `}
`;

interface WaveProps {
  height: number;
  width: number;
  fillColor: Color;
  inverted?: boolean;
}

const Wave = ({ height, width, fillColor, inverted = false }: WaveProps) => {
  return (
    // TODO: Implement animation logic, for the time being
    // just setting this to false
    <Main inverted={inverted} animated={false}>
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
    </Main>
  );
};

export default Wave;
