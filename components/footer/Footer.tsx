import styled from 'styled-components';
import Link from 'next/link';
import Logo from '../Logo';

const Main = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 50px;
  gap: 1rem;
  background-color: var(--secondary-bg-color);

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Information = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 0.25rem;
  padding: 0;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 0.75rem;
  margin: 0;
  opacity: 0.5;
`;

const Imprint = styled.a`
  font-size: 0.75rem;
  margin: 0;
  opacity: 0.5;
  transition: all 0.25s;

  &:hover {
    opacity: 1;
  }
`;

const Footer = () => {
  return (
    <Main>
      <Logo />
      <Information>
        <Link href="/impressum" passHref>
          <Imprint>Imprint</Imprint>
        </Link>
        <Copyright>&copy;{new Date().getFullYear()} Tobias Helmrich</Copyright>
      </Information>
    </Main>
  );
};

export default Footer;
