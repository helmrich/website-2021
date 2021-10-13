import styled from 'styled-components';
import Logo from '../Logo';
import NavLink from './NavLink';
import { useState } from 'react';
import ThemeToggle from '../ThemeToggle';
import { Theme } from '../../types/Theme';

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--nav-height);
  padding: 0 25px;
  background-color: var(--primary-bg-color);
`;

interface LinkListProps {
  isHidden: boolean;
}

const LinkList = styled.ul<LinkListProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 25px 0 50px 0;
  gap: 50px;
  background-color: var(--primary-bg-color);
  font-size: 1.25rem;
  z-index: 10;

  @media only screen and (max-width: 767px) {
    ${({ isHidden }) =>
      isHidden &&
      `
      display: none;
    `}
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    position: relative;
    top: 0;
    flex-direction: row;
    gap: 50px;
    font-size: 1rem;
    justify-content: flex-end;
    padding: 0;
  }
`;

const Link = styled.a`
  opacity: 0.6;
  transition: all 0.25s;

  &:hover {
    opacity: 1;
  }
`;

const Icon = styled.li`
  height: 24px;
  width: 24px;

  @media only screen and (min-width: 768px) {
    height: 20px;
    width: 20px;
  }
`;

interface HamburgerIconProps {
  isOpen: boolean;
}

const HamburgerIcon = styled.div<HamburgerIconProps>`
  position: relative;
  width: 20px;
  height: 20px;
  opacity: 0.75;
  transition: all 0.25s;

  span {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: var(--primary-fg-color);
    transform-origin: center;
    transition: all 0.25s;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2) {
      top: 8px;
      right: 0;
      width: 80%;
    }

    &:nth-child(3) {
      top: 16px;
      right: 0;
      width: 60%;
    }
  }

  span:nth-child(1) {
    ${({ isOpen }) =>
      isOpen &&
      `
        top: 8px;
        transform: rotate(45deg);
    `}
  }

  span:nth-child(2) {
    ${({ isOpen }) =>
      isOpen &&
      `
        opacity: 0;
    `}
  }

  span:nth-child(3) {
    ${({ isOpen }) =>
      isOpen &&
      `
        top: 8px;
        width: 100%;
        transform: rotate(135deg);
    `}
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navigation>
      <Logo />
      <LinkList isHidden={!isMobileMenuOpen}>
        <li>
          <NavLink title="About" href="/#about" />
        </li>
        <li>
          <NavLink title="Work" href="/#work" />
        </li>
        <li>
          <NavLink title="Contact" href="/#contact" />
        </li>
        <Icon>
          <Link
            href="https://twitter.com/tobias_helmrich"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="var(--primary-fg-color)"
            >
              <title>Twitter</title>
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </Link>
        </Icon>
        <Icon>
          <Link
            href="https://github.com/helmrich"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="var(--primary-fg-color)"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </Link>
        </Icon>
        <li>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </li>
      </LinkList>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Open the menu"
      >
        <HamburgerIcon isOpen={isMobileMenuOpen} aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </HamburgerIcon>
      </button>
    </Navigation>
  );
};

export default Navbar;
