import styled, { css } from 'styled-components';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)`
  ${({ theme }) => css`
    background: ${theme.palette.primary.light};
    color: ${theme.palette.neutral.light};
    display: ${'flex'};
    justify-content: ${'space-between'};
    padding: ${theme.spacings.small};

    .icon-button {
      color: ${theme.palette.neutral.light};
    }

    .search-box {
      display: ${'flex'};
      background: ${'#fdfdfd'};
      border-radius: ${'3px'};
    }
  `}
`;
