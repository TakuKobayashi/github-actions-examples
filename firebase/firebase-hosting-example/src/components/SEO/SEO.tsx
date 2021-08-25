import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import Favicon from '../../assets/favicon.ico';

export interface SEOProps {
  location: Location;
  pageMetadata?: {
    title?: string;
    description?: string;
    keywords?: Array<string>;
    imageUrl?: string;
    language?: string;
    type?: string;
  };
}

export const SEO: FunctionComponent<SEOProps> = ({ location, pageMetadata }) => {
  const { title, description, keywords, siteUrl, imageUrl, language } = useSiteMetadata();

  return (
    <Helmet title={pageMetadata?.title} defaultTitle={title} titleTemplate={`${title} - %s`}>
      <html lang={pageMetadata?.language || language} />
      <link rel="icon" type="image/ico" href={Favicon} />
      <meta name="description" content={pageMetadata?.description || description} />
      <meta name="keywords" content={(pageMetadata?.keywords || keywords).join(', ')} />
      <meta property="og:title" content={pageMetadata?.title || title} />
      <meta property="og:url" content={`${siteUrl}${location.pathname}`} />
      <meta property="og:description" content={pageMetadata?.description || description} />
      <meta property="og:type" content={pageMetadata?.type || 'website'} />
      <meta property="og:image" content={pageMetadata?.imageUrl || `${siteUrl}${imageUrl}`} />
      <meta property="og:image:alt" content={pageMetadata?.title || title} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};
