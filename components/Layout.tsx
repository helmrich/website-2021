import { Dispatch, ReactNode } from "react";
import { Theme } from "../types/Theme";
import HeadData from "./HeadData";
import Navbar from "./navigation/Navbar";

interface LayoutProps {
  children: ReactNode;
  theme: Theme;
  toggleTheme: () => void;
}

const Layout = ({ children, theme, toggleTheme }: LayoutProps) => {
  return (
    <>
      <HeadData />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div>{children}</div>
    </>
  );
};

export default Layout;
