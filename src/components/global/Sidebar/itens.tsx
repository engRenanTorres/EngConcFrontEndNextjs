import { GetTheme } from '@/utils/getTheme';
import { Typography } from '@mui/material';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { MenuItem } from 'react-pro-sidebar';

type PropsItem = {
  title: string;
  to: string;
  icon: any;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

export const Item: React.FC<PropsItem> = ({
  title,
  to,
  icon,
  selected,
  setSelected,
}: PropsItem) => {
  const theme = GetTheme();
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: theme.palette.neutral.light,
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography style={{ fontSize: theme.typography.fontSize.medium }}>
        {title}
      </Typography>
      <Link href={to} />
    </MenuItem>
  );
};
type Props = {
  children: string;
};
export const ItemsTile: React.FC<Props> = ({ children }: Props) => {
  const theme = GetTheme();
  return (
    <Typography
      variant='h6'
      className='x'
      color={theme.palette.secondary.light}
      sx={{ m: '15px 0 5px 20px' }}
    >
      {children}
    </Typography>
  );
};
