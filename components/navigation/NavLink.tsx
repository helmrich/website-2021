import styled from 'styled-components';
import Link from 'next/link';
import { MouseEventHandler } from 'react';

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
  setIsMobileMenuOpen?: (isMobileMenuOpen: boolean) => void;
}

const NavLink = ({ title, href, setIsMobileMenuOpen }: NavLinkProps) => {
  const innerLinkProps = {
    ...(setIsMobileMenuOpen && { onClick: () => setIsMobileMenuOpen(false) }),
  };

  return (
    <Link href={href} passHref>
      <InnerLink {...innerLinkProps}>{title}</InnerLink>
    </Link>
  );
};

export default NavLink;
