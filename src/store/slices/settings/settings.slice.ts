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
    setLang(state, { payload }: PayloadAction<SettingsState['lang']>) {
      state.lang = payload;
    },
    setAllowCapture(state, { payload }: PayloadAction<SettingsState['allowCapture']>) {
      state.allowCapture = payload;
    },
    set(_, { payload }: PayloadAction<SettingsState>) {
      return payload;
    },
  },
});

export const settingsActions = settingsSlice.actions;
