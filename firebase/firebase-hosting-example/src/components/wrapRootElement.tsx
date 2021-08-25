import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { theme } from '../style/theme';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);
