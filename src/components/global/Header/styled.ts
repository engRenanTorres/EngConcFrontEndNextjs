import styled from 'styled-components';

export const HeaderStyled = styled.header`
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  padding: ${({ theme }) => theme.spacings.small};
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: ${({ theme }) => theme.palette.neutral.light};
  }
`;
