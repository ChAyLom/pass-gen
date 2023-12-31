import { TypedStartListening, createListenerMiddleware } from '@reduxjs/toolkit';
import { Dispatch, RootState } from './store';

export const listenerMiddleware = createListenerMiddleware();

export const startStoreListening =
  listenerMiddleware.startListening as TypedStartListening<RootState, Dispatch>;

export type StoreListenerEffect = Parameters<typeof startStoreListening>['0']['effect'];
