import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type SystemTheme = 'light' | 'dark';

export type AppState = {
  window: 'main' | 'settings';
  systemTheme: SystemTheme;
};

const initialState: AppState = {
  window: 'main',
  systemTheme: 'dark',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    switchSettings(state) {
      state.window = state.window === 'main' ? 'settings' : 'main';
    },
    closeSettings(state) {
      state.window = 'main';
    },
    setSystemTheme(state, { payload }: PayloadAction<SystemTheme>) {
      state.systemTheme = payload;
    }
  },
});

export const appActions = appSlice.actions;
