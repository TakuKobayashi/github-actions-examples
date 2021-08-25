import React, { FunctionComponent } from 'react';
import * as S from './Intro.styled';

export const Intro: FunctionComponent = () => (
  <S.Container>
    <S.StyledLogo />
    <S.Paragraph>Delete this file to start your project.</S.Paragraph>
    <S.Link href="https://github.com/msallent/gatsby-starter-skeleton">Gatsby Skeleton</S.Link>
  </S.Container>
);
