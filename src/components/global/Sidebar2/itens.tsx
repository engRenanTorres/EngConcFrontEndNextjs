import { GetTheme } from '@/utils/getTheme';
import { ListItem, ListItemButton, Typography } from '@mui/material';
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

export const MItem: React.FC<PropsItem> = ({
  title,
  to,
  icon,
  selected,
  setSelected,
}: PropsItem) => {
  const theme = GetTheme();
  return (
    <ListItem
      style={{
        background:
          selected === title
            ? theme.palette.background.default
            : theme.palette.primary.light,
        color: theme.palette.neutral.light,
        fontWeight: selected === title ? 600 : 0,
      }}
      onClick={() => setSelected(title)}
    >
      <ListItemButton>
        {icon}
        <Typography style={{ fontSize: theme.typography.fontSize.medium }}>
          {title}
        </Typography>
        <Link href={to} />
      </ListItemButton>
    </ListItem>
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
