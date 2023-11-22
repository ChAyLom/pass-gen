import { configureStore } from "@reduxjs/toolkit";
import { passgenSetupSlice } from "./slices/passgen-setup.slice";

export const store = configureStore({
  reducer: {
    [passgenSetupSlice.name]: passgenSetupSlice.reducer,
  }
});

export type AppStore = typeof store;
export type Dispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;
