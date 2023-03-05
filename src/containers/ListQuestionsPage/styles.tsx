import styled from 'styled-components';

export const Container = styled.section`
  background: ${({ theme }) => theme.palette.background.default};
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  color: ${({ theme }) => theme.palette.neutral.light};
`;
