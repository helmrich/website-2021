import { ReactNode } from 'react';
import HeadData from './HeadData';
import Navbar from './navigation/Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <HeadData />
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
