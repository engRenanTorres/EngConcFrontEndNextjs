import { SwitchThemeStyled } from './styled';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { CheckTheme, toggleTheme } from '@/utils/getTheme';
import { ChangeEvent } from 'react';
import { useTheme } from 'next-themes';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export const ThemeSwitcher: React.FC = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const handleChangeTheme = (event: ChangeEvent<HTMLInputElement>) => {
    toggleTheme(event.target.checked);
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    //router.reload();
  };
  const checked = CheckTheme();
  return (
    <SwitchThemeStyled>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChangeTheme} />}
          label={theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
        />
      </FormGroup>
    </SwitchThemeStyled>
  );
};
