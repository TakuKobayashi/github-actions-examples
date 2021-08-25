/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

import { GatsbyConfig } from 'gatsby';
import { resolve } from 'path';
import dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    title: 'Gatsby Skeleton',
    description: 'Gatsby starter featuring TypeScript, ESLint, Prettier and more...',
    keywords: ['gatsby', 'starter', 'typescript', 'eslint', 'prettier', 'layout', 'seo'],
    siteUrl: 'https://gatsby-starter-skeleton.netlify.app',
    imageUrl: '/social.jpg',
    language: 'en',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    'gatsby-plugin-svgr',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: resolve(__dirname, './assets'),
        name: 'assets',
      },
    },
    'gatsby-transformer-sharp',
  ],
};

export default gatsbyConfig;
