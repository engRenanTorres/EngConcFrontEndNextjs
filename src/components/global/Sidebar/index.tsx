import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, Typography } from '@mui/material';
import 'react-pro-sidebar/dist/css/styles.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { GetTheme } from '@/utils/getTheme';
import Image from 'next/image';
import { StyledIcon } from './styled';
import { Item, ItemsTile } from './itens';

const Sidebar = () => {
  const theme = GetTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  return (
    <Box
      sx={{
        '& .pro-sidebar-inner': {
          background: `${theme.palette.primary.light} !important`,
          height: '100vh',
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important',
        },
        '& .pro-menu-item.active': {
          color: '#6870fa !important',
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape='square'>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: theme.palette.neutral.light,
            }}
          >
            {!isCollapsed && (
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                ml='15px'
              >
                <Typography
                  variant='h3'
                  color={theme.palette.neutral.light}
                  fontSize={theme.typography.h3.fontSize}
                >
                  ADMINIS
                </Typography>
                <StyledIcon onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </StyledIcon>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb='25px'>
              <Box display='flex' justifyContent='center' alignItems='center'>
                {/*<img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/`}
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                />*/}
                <Image
                  src='/images/favicon.svg'
                  width={100}
                  height={100}
                  alt='Logo do site Engenharia de concursos'
                />
              </Box>
              <Box textAlign='center'>
                <Typography
                  variant='h2'
                  color={theme.palette.neutral.light}
                  fontWeight='bold'
                  fontSize={theme.typography.h2.fontSize}
                  sx={{ m: '10px 0 0 0' }}
                >
                  Engenharia <br />
                  de Concursos
                </Typography>
                <Typography variant='h5' color={theme.palette.secondary.main}>
                  Simulador de provas
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Item
              title='Página inicial'
              to='/'
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <ItemsTile>Dados</ItemsTile>
            <Item
              title='Lista de Questões'
              to='/questions-lists'
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Inserir Questões'
              to='/add-questions'
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Buscar Questions'
              to='/find-questions'
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <ItemsTile>Simulador</ItemsTile>
            <Item
              title='Simular Novo Concurso'
              to='/simulator'
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Histórico'
              to='/history'
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='FAQ Page'
              to='/faq'
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <ItemsTile>Sobre</ItemsTile>
            <Item
              title='Bar Chart'
              to='/about'
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Entre em contato'
              to='/contact'
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Line Chart'
              to='/line'
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Geography Chart'
              to='/geography'
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
