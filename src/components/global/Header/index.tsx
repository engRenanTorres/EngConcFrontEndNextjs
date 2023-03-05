import { HeaderStyled } from './styled';
import { Box, Typography } from '@mui/material';
import { colors } from '@/styles/theme';

type Props = {
  title: string;
  subtitle: string;
};

export const Header: React.FC<Props> = ({ title, subtitle }: Props) => {
  return (
    <HeaderStyled>
      <Box mb='30px'>
        <Typography
          className='typography'
          variant='h2'
          color={colors[0].grey[100]}
          fontWeight='bold'
          sx={{ m: '0 0 5px 0' }}
        >
          {title}
        </Typography>
        <Typography variant='h5' color={colors[0].greenAccent[400]}>
          {subtitle}
        </Typography>
      </Box>
      {/*<Link href="/">home</Link>*/}
    </HeaderStyled>
  );
};
