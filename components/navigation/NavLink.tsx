import styled from 'styled-components';
import Link from 'next/link';

const InnerLink = styled.a`
  opacity: 0.75;
  transition: all 0.25s;

  &:hover {
    opacity: 1;
  }
`;

interface NavLinkProps {
  title: string;
  href: string;
}

const NavLink = ({ title, href }: NavLinkProps) => {
  return (
    <Link href={href} passHref>
      <InnerLink>{title}</InnerLink>
    </Link>
  );
};

export default NavLink;
