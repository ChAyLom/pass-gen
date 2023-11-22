import { configureStore } from '@reduxjs/toolkit';
import { passgenSetupSlice } from './slices/passgen-setup.slice';
import { appSlice } from './slices/app.slice';
import { listenerMiddleware } from './listener-middleware';

export const store = configureStore({
  reducer: {
    [passgenSetupSlice.name]: passgenSetupSlice.reducer,
    [appSlice.name]: appSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type AppStore = typeof store;
export type Dispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;
