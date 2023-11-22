import { ReactNode } from 'react';
import { useSelector } from '../store/hooks';
import { themeSelector } from '../store/selectors';
import { SystemTheme } from '../store/slices/app.slice';
import { Colors } from '@blueprintjs/core';

type AppBackgroundProps = {
  children: ReactNode;
};

const colors: Record<SystemTheme, string> = {
  dark: Colors.DARK_GRAY3,
  light: Colors.LIGHT_GRAY3,
};

export const AppBackground = ({ children }: AppBackgroundProps) => {
  const theme = useSelector(themeSelector);

  return (
    <div
      className={`flex flex-col w-screen h-screen ${theme === 'dark' ? 'bp5-dark' : ''}`}
      style={{ backgroundColor: colors[theme] }}
    >
      {children}
    </div>
  );
};
