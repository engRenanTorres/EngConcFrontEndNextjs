import { themeDark, themeDefault } from '@/styles/theme';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { DefaultTheme } from 'styled-components';

export function toggleTheme(changeToDark: boolean) {
  const theme = changeToDark ? 'Dark' : 'Default';
  localStorage.setItem('theme', JSON.stringify(theme));
  console.log(theme);
}

export const GetTheme = (): DefaultTheme => {
  const { resolvedTheme } = useTheme();
  const [fullTheme, setFullTheme] = useState(themeDefault);

  useEffect(() => {
    const rawStoregedData = localStorage.getItem('theme');
    if (rawStoregedData !== null) {
      resolvedTheme === 'light'
        ? setFullTheme(themeDefault)
        : setFullTheme(themeDark);
    } else setFullTheme(themeDefault);
  }, [fullTheme, resolvedTheme]);
  return fullTheme;
};
export const CheckTheme = (): boolean => {
  const { theme } = useTheme();
  return theme === 'dark' ? true : false;
};
