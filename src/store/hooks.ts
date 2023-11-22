import {
	TypedUseSelectorHook,
	useSelector as native_useSelector,
	useDispatch as native_useDispatch,
	useStore as native_useStore,
} from 'react-redux';
import { AppStore, Dispatch, RootState } from './store';

export const useSelector: TypedUseSelectorHook<RootState> = native_useSelector;
export const useDispatch: () => Dispatch = native_useDispatch;
export const useStore: () => AppStore = native_useStore;
