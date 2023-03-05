import { ReactNode } from 'react';
import { GetTheme } from '../getTheme';
import { ThemeProvider } from 'styled-components';
interface PageProviderProps {
  children: ReactNode;
}
const PageProvider = ({ children }: PageProviderProps) => {
  return <ThemeProvider theme={GetTheme()}>{children}</ThemeProvider>;
};
export default PageProvider;
