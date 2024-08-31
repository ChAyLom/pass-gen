import { useEffect } from 'react';
import { useDispatch } from '../store/hooks';
import { appActions, SystemTheme } from '../store/slices/app.slice';
import { startStoreListening } from '../store/listener-middleware';
import { RootState } from '../store/store';
import { appWindow } from '@tauri-apps/api/window';
import { themeSelector } from '../store/selectors';
import { Colors } from '@blueprintjs/core';

export const useSettingsHandler = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    dispatch(appActions.setSystemTheme(media.matches ? 'dark' : 'light'));

    media.addEventListener('change', event => {
      dispatch(appActions.setSystemTheme(event.matches ? 'dark' : 'light'));
    });
  }, []);

  useEffect(() => {
    const selector = (state: RootState) => state.settings.allowCapture;

    const stopListening = startStoreListening({
      predicate: (_, currentState, previousState) =>
        selector(currentState) !== selector(previousState),
      effect: (_, api) => {
        const allowCapture = selector(api.getState());
        appWindow.setContentProtected(!allowCapture);
      },
    });

    return stopListening;
  }, []);

  useEffect(() => {
    const colors: Record<SystemTheme, string> = {
      dark: Colors.DARK_GRAY3,
      light: Colors.LIGHT_GRAY3,
    };
    const selector = themeSelector;

    const stopListening = startStoreListening({
      predicate: (_, currentState, previousState) =>
        selector(currentState) !== selector(previousState),
      effect: (_, api) => {
        const theme = selector(api.getState());
        window.document.body.style.setProperty('--app-background-color', colors[theme]);

        if (theme === 'dark') {
          window.document.body.classList.add('bp5-dark');
          console.log(theme);
        } else {
          window.document.body.classList.remove('bp5-dark');
        }
      },
    });

    return stopListening;
  }, []);
};
