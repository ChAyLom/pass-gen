import { createSlice } from '@reduxjs/toolkit';

export type AppState = {
  window: 'main' | 'settings';
};

const initialState: AppState = {
  window: 'main',
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
    }
  },
});

export const appActions = appSlice.actions;