import { Box, IconButton } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { StyledBox } from './styles';
import useAuth from '@/utils/hooks/useAuth';
import Link from 'next/link';
import { useEffect } from 'react';

const Topbar = () => {
  const { currentUser, loading, signin, signout } = useAuth();
  return (
    <StyledBox>
      {/* SEARCH BAR */}
      <Box className='search-box'>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
        <IconButton className='icon-button' type='button' sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display='flex'>
        <ThemeSwitcher />
        <IconButton className='icon-button'>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton className='icon-button'>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton className='icon-button'>
          {currentUser && <PersonOutlinedIcon />}
          {currentUser && <span>{currentUser.name}</span>}
          {!currentUser && <Link href={'/login'}>Entre</Link>}
        </IconButton>
      </Box>
    </StyledBox>
  );
};

export default Topbar;
