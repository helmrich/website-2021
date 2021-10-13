import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from 'styled-components';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { Theme } from '../types/Theme';
import { useEffect, useState } from 'react';

const defaultThemeValues = {
  borderRadius: '1rem',
  maxWidth: '1280px',
  navHeight: '60px',
  normalContinuousTextSize: 'clamp(0.75rem, 0.75rem + 1vw, 1.1rem)',
  normalContinuousTextLineHeight: 'clamp(1.2rem, 1.2rem + 1vw, 1.55rem)',

  shadows: {
    primary:
      '0.2px 0.3px 0.3px rgba(0, 0, 0, 0.017), 0.4px 0.8px 0.8px rgba(0, 0, 0, 0.024), 0.8px 1.5px 1.5px rgba(0, 0, 0, 0.03), 1.3px 2.7px 2.7px rgba(0, 0, 0, 0.036), 2.5px 5px 5px rgba(0, 0, 0, 0.043), 6px 12px 12px rgba(0, 0, 0, 0.06)',
    primaryHover:
      '0.3px 0.6px 0.6px rgba(0, 0, 0, 0.022), 0.7px 1.3px 1.3px rgba(0, 0, 0, 0.032), 1.3px 2.5px 2.5px rgba(0, 0, 0, 0.04), 2.2px 4.5px 4.5px rgba(0, 0, 0, 0.048), 4.2px 8.4px 8.4px rgba(0, 0, 0, 0.058), 10px 20px 20px rgba(0, 0, 0, 0.08)',
  },

  fonts: {
    primary: "'Rubik', sans-serif",
    monospace: "'IBM Plex Mono', monospace",
  },
};

export const lightTheme: DefaultTheme = {
  ...defaultThemeValues,

  colors: {
    primaryBg: '#ffffff',
    secondaryBg: '#fdf6fa',
    primaryFg: '#3f3038',
    secondaryFg: '#f361af',
  },
};

export const darkTheme: DefaultTheme = {
  ...defaultThemeValues,

  colors: {
    // TODO: Colors work in progress
    primaryBg: '#000000',
    secondaryBg: '#222222',
    primaryFg: '#ffffff',
    secondaryFg: '#f361af',
  },
};

export const GlobalStyle = createGlobalStyle`
  // @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@700&family=Rubik:wght@400;700&display=swap');

  html {
    --primary-bg-color: ${({ theme }) => theme.colors.primaryBg};
    --secondary-bg-color: ${({ theme }) => theme.colors.secondaryBg};
    --primary-fg-color: ${({ theme }) => theme.colors.primaryFg};
    --secondary-fg-color: ${({ theme }) => theme.colors.secondaryFg};
    --main-font: ${({ theme }) => theme.fonts.primary};
    --monospace-font: ${({ theme }) => theme.fonts.monospace};
    --border-radius: ${({ theme }) => theme.borderRadius};
    --max-width: ${({ theme }) => theme.maxWidth};
    --nav-height: ${({ theme }) => theme.navHeight};
    --normal-continuous-text-size: ${({ theme }) =>
      theme.normalContinuousTextSize};
    --normal-continuous-text-line-height: ${({ theme }) =>
      theme.normalContinuousTextLineHeight};
      --box-shadow: ${({ theme }) => theme.shadows.primary};
    --box-shadow-hover: ${({ theme }) => theme.shadows.primaryHover};
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    background-color: var(--primary-bg-color);
    color: var(--primary-fg-color);
    font-family: var(--main-font);
  }

  ul {
    list-style-type: none;
  }

  a {
    color: var(--primary-fg-color);
    text-decoration: none;
  }

  h1 {
    font-size: clamp(2.5rem, 2.5rem + 4vw, 5rem);
    text-transform: uppercase;
  }

  button {
    background-color: transparent;
    border: none;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    padding: 100px 25px 250px 25px;
  }

  section h2 {
    color: var(--secondary-fg-color);
    margin-bottom: 2rem;
    font-size: clamp(2.25rem, 2rem + 4vw, 4.5rem);
    text-transform: uppercase;
    text-align: left;
    width: 100%;
    max-width: 1280px;
  }

  section h3 {
    color: var(--secondary-fg-color);
    font-size: clamp(1.75rem, 1.75rem + 2vw, 3.5rem);
    text-transform: uppercase;
    text-align: left;
  }

  .highlighted {
    color: var(--secondary-fg-color);
  }

  ::selection {
    color: var(--primary-bg-color);
    background-color: var(--secondary-fg-color);
  }

  @media only screen and (min-width: 768px) {
    section {
      padding-left: 50px;
      padding-right: 50px;
    }
  }

  @media only screen and (min-width: 1280px) {
    section {
      align-items: center;
    }

    section h2 {
      margin-bottom: 3.5rem;
    }
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(Theme.Light);

  const toggleTheme = () => {
    theme === Theme.Light ? setTheme(Theme.Dark) : setTheme(Theme.Light);
  };

  useEffect(() => {
    // Check user's preferred color scheme (dark/light) and set theme accordingly
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(Theme.Dark);
    } else {
      setTheme(Theme.Light);
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme === Theme.Light ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Layout theme={theme} toggleTheme={toggleTheme}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
