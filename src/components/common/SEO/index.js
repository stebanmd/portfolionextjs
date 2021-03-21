import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

// eslint-disable-next-line react/prop-types
export default function SEO({ headTitle }) {
  const baseTitle = 'Portfólio - Steban Domingues';

  const title = headTitle
    ? (`${headTitle} | ${baseTitle}`)
    : baseTitle;
  const description = 'Portfólio criado como projeto do Bootcamp Alura JAMStack';
  const image = '/images/capa.jpeg';
  const url = 'https://portfolionextjs-stebanmd.vercel.app/';

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

SEO.defaultProps = {
  headTitle: '',
};

SEO.propTypes = {
  headTitle: PropTypes.string,
};
