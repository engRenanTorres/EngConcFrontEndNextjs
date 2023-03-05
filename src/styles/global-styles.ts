import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  html,
  body,
  #root,
  .app,
  .content {
    height: 100%;
    width: 100%;
    font-family: "Source Sans Pro", sans-serif;
    margin: 0;

  }

  html {
    font-size: 62.5%;
  }

  a {
    color: ${({ theme }) => theme.palette.secondary.main};
    text-decoration: none;
    transition: opacity 300ms ease-in-out;
    $:hover {
      opacity: .6;
    }
  }

  body {
    font-size: ${({ theme }) => theme.typography.fontSize.medium};
    background: white;
  }
  [data-theme="dark"] {
    body {
      background: blue;

    }
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.h1.fontSize};
    font-family: ${({ theme }) => theme.typography.h1.fontFamily};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.h2.fontSize};
    font-family: ${({ theme }) => theme.typography.h2.fontFamily};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.h3.fontSize};
    font-family: ${({ theme }) => theme.typography.h3.fontFamily};
  }

  h4 {
    font-size: ${({ theme }) => theme.typography.h4.fontSize};
    font-family: ${({ theme }) => theme.typography.h4.fontFamily};
  }

  h5 {
    font-size: ${({ theme }) => theme.typography.h5.fontSize};
    font-family: ${({ theme }) => theme.typography.h5.fontFamily};
  }

  h6 {
    font-size: ${({ theme }) => theme.typography.h6.fontSize};
    font-family: ${({ theme }) => theme.typography.h6.fontFamily};
  }


  .app {
    display: flex;
    position: relative;
  }

  .content-page {
    width: 100%;
    height: 100%;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #e0e0e0;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
