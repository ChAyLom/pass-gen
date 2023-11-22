import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const themeSelector = createSelector(
  (state: RootState) => state.settings.theme,
  (state: RootState) => state.app.systemTheme,
  (settingsTheme, systemTheme) => {
    return settingsTheme === 'system' ? systemTheme : settingsTheme;
  },
);
