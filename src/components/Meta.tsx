import Head from 'next/head';

interface MetaProps {
  title: string;
  keywords: string;
  description: string;
}
function Meta({ title, keywords, description }: MetaProps) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: 'Anass Filali',
  keywords:
    'web development, programming, mobile development, React, NextJs, react native,',
  description: 'The latest web and mobile development',
};

export default Meta;
