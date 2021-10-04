import styled from 'styled-components';
import Link from 'next/link';
import styles from '../styles/Logo.module.css';

const Bracket = styled.span`
  &:first-child {
    margin-right: 0.5rem;
  }

  &:last-child {
    padding-left: 0.25rem;
    margin-left: 0.5rem;
  }
`;

const Main = styled.a`
  color: var(--secondary-fg-color);
  font-family: var(--monospace-font);
  font-weight: 700;
  width: 100px;
  display: flex;
  justify-content: center;
  opacity: 0.75;

  > * {
    transition: 0.25s;
  }

  &:hover {
    opacity: 1;
  }

  &:hover ${Bracket}:first-child {
    margin-right: 0;
  }

  &:hover ${Bracket}:last-child {
    margin-left: 0;
  }
`;

const Logo = () => {
  return (
    <Link href="/" passHref>
      <Main>
        <Bracket>{'<'}</Bracket>
        <span>tobi</span>
        <Bracket>{'/>'}</Bracket>
      </Main>
    </Link>
  );
};

export default Logo;
