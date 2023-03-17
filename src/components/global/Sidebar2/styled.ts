import { ListItem } from '@mui/material';
import styled, { css } from 'styled-components';
//background-color: ${theme.palette.primary.light} !important;

interface Props {
  onPress?: any;
  sidebar: boolean;
}
interface PropsListItem {
  selected?: boolean;
}

/*
.pro-sidebar.collapsed {
    width: 80px;
    min-width: 80px;
}

.pro-sidebar {
    color: #adadad;
    height: 100%;
    width: 270px;
    min-width: 270px;
    text-align: left;
    transition: width, left, right, 0.3s;
    position: relative;
    z-index: 1009;
}

.pro-sidebar > .pro-sidebar-inner > .pro-sidebar-layout {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 101;
}

*/

export const Container = styled.div<Props>`
  ${({ theme }) => css`
    background-color: ${theme.palette.primary.light};
    color: ${theme.palette.neutral.light};
    height: 100vh;
    top: 0px;
    left: 0px;
    width: 300px;
    animation: showSidebar 0.4s;
  `};
  left: ${(props) => (props.sidebar ? '0' : '-80%')};

  .top-tab {
    margin: 1.5rem 1.5rem 1.75rem;
  }

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;

export const ContainerListItem = styled(ListItem)<PropsListItem>`
  ${({ theme, selected }) => css`
    background: ${
      selected ? theme.palette.background.default : theme.palette.primary.light
    };
    color: theme.palette.neutral.light;
    fontWeight: selected === title ? 600 : 0;
  `}
`;
