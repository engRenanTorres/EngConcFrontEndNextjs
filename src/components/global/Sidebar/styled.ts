import styled, { css } from 'styled-components';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';

export const StyledIcon = styled(IconButton)`
  color: ${({ theme }) => theme.palette.neutral.light};
`;

export const StyledNavBox = styled(Box)`
  ${({ theme }) => css`
      display:${'flex'};
      justify-content:${'center'};
      align-items=${'center'};


  `}
`;
