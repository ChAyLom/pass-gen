import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { z } from 'zod';
import { SettingsSchema } from './settings-schema';

export type SettingsState = z.infer<typeof SettingsSchema>;

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: SettingsSchema.parse(undefined),
  reducers: {
    setTheme(state, { payload }: PayloadAction<SettingsState['theme']>) {
      state.theme = payload;
    },
  },
});

export const settingsActions = settingsSlice.actions;
