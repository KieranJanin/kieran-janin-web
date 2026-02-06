import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, name = 'Kieran Janin', type = 'website', image = '/favicon.png' }) => {
  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title} | {name}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Social Media */}
      <meta property="og:title" content={`${title} | ${name}`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Kieran Janin Portfolio" />
    </Helmet>
  );
};

export default SEO;
