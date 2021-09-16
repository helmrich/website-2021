import Link from 'next/link';
import styles from '../../styles/NavLink.module.css';

interface NavLinkProps {
  title: string;
  href: string;
}

const NavLink = ({ title, href }: NavLinkProps) => {
  return (
    <Link href={href}>
      <a className={styles.link}>{title}</a>
    </Link>
  );
};

export default NavLink;
