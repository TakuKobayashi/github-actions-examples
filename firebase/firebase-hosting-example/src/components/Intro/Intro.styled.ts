import styled, { keyframes } from 'styled-components';
import { ReactComponent as Logo } from '../../assets/svg/gatsby.svg';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(1rem + 2vmin);
  font-family: sans-serif;
  color: white;
`;

export const logoAnimation = keyframes`
  0% {
    transform: scale(1.05);
  }

  50% {
    transform: scale(0.95);
  }

  100% {
    transform: scale(1.05);
  }
`;

export const StyledLogo = styled(Logo)`
  width: auto;
  height: 35vmin;
  animation: ${logoAnimation} 5s linear infinite;
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  margin: 2.5rem 0;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: underline;
`;
