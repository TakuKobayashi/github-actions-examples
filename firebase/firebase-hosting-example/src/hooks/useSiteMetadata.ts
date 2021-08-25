import { graphql, useStaticQuery } from 'gatsby';

interface SiteMetadataQuery {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: Array<string>;
      siteUrl: string;
      imageUrl: string;
      language: string;
    };
  };
}

export const useSiteMetadata = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<SiteMetadataQuery>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            siteUrl
            imageUrl
            language
          }
        }
      }
    `
  );

  return siteMetadata;
};
