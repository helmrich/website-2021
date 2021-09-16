import Head from 'next/head';

interface HeadDataProps {
  title?: string;
  keywords?: string;
  description?: string;
}

const HeadData = ({
  title = 'Tobias Helmrich | Creative Developer',
  keywords = 'portfolio, front-end, javascript, front-end developer, front-end engineer, developer, react',
  description = 'Creative front-end developer and computer science student living in the Stuttgart region.',
}: HeadDataProps) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#FFFFFF" />
      <meta name="apple-mobile-web-app-status-bar" content="#FFFFFF" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content=""/> */}
      <meta property="og:url" content="https://tobiashelmrich.com" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content="" /> */}
      {/* <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json"></link> */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@700&family=Rubik:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <title>{title}</title>
    </Head>
  );
};

export default HeadData;
