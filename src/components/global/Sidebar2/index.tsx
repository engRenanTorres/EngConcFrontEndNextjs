import Box from '@mui/material/Box';
import Image from 'next/image';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
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
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { Typography } from '@mui/material';
import { StyledIcon } from '../Sidebar/styled';
import { GetTheme } from '@/utils/getTheme';
import { Container } from './styled';
import { useState } from 'react';
import { MItem } from './itens';

export default function Sidebar2() {
  const theme = GetTheme();
  const [selected, setSelected] = useState('Página inicial');

  return (
    <Container sidebar={true}>
      <Box
        sx={{
          width: 250,
        }}
        role='presentation'
        onClick={() => console.log()}
        onKeyDown={() => console.log()}
      >
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
          <StyledIcon
            onClick={() => {
              /*setIsCollapsed(!isCollapsed)*/
            }}
          >
            <MenuOutlinedIcon />
          </StyledIcon>
        </Box>

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

        <List>
          <MItem
            title='Página inicial'
            to='/'
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={'home'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={'Contatos'} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}
