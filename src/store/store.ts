import { configureStore } from "@reduxjs/toolkit";
import { passgenSetupSlice } from "./slices/passgen-setup.slice";
import { appSlice } from "./slices/app.slice";

export const store = configureStore({
  reducer: {
    [passgenSetupSlice.name]: passgenSetupSlice.reducer,
    [appSlice.name]: appSlice.reducer,
  }
});

export type AppStore = typeof store;
export type Dispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;
