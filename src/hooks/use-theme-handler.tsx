import { useEffect } from 'react';
import { useDispatch } from '../store/hooks';
import { appActions } from '../store/slices/app.slice';

export const useThemeHandler = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    dispatch(appActions.setSystemTheme(media.matches ? 'dark' : 'light'));

    media.addEventListener('change', event => {
      dispatch(appActions.setSystemTheme(event.matches ? 'dark' : 'light'));
    });
  }, []);
};
