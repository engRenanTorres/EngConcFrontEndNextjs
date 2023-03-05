import { themeDefault } from './theme';

type theme = typeof themeDefault;

declare module 'styled-components' {
  //interface vazia para merge com interface já existente
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends theme {}
}
