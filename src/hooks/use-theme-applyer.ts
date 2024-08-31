import { useEffect } from 'react';
import { SystemTheme } from '../store/slices/app.slice';
import { Colors } from '@blueprintjs/core';
import { useSelector } from '../store/hooks';
import { themeSelector } from '../store/selectors';

const colors: Record<SystemTheme, string> = {
  dark: Colors.DARK_GRAY3,
  light: Colors.LIGHT_GRAY3,
};

export const useThemeApplyer = () => {
  const theme = useSelector(themeSelector);

  useEffect(() => {
    window.document.body.style.setProperty('--app-background-color', colors[theme]);

    if (theme === 'dark') {
      window.document.body.classList.add('bp5-dark');
    } else {
      window.document.body.classList.remove('bp5-dark');
    }
  }, [theme]);
};
