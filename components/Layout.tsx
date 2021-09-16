import { ReactNode } from 'react';
import HeadData from './HeadData';
import Navbar from './navigation/Navbar';
import layoutStyles from '../styles/Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <HeadData />
      <Navbar />
      <div className={layoutStyles.mainWrapper}>{children}</div>
    </>
  );
};

export default Layout;
