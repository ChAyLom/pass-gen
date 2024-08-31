import { useEffect } from 'react';
import { useDispatch } from '../store/hooks';
import { appActions } from '../store/slices/app.slice';
import { startStoreListening } from '../store/listener-middleware';
import { RootState } from '../store/store';
import { appWindow } from '@tauri-apps/api/window';

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
};
