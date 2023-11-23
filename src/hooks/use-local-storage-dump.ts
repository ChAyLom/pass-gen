import { useEffect } from 'react';
import { startStoreListening } from '../store/listener-middleware';
import { useDispatch, useStore } from '../store/hooks';
import debounce from 'debounce';
import { z } from 'zod';
import { Dispatch, RootState } from '../store/store';

type UseLocalStorageDumpParams<T> = {
  lsKey: string;
  schema: z.ZodType<T, z.ZodTypeDef, unknown>;
  selector: (state: RootState) => T;
  actionCreator: (v: T) => Parameters<Dispatch>[0];
  debounceTime?: number;
};

export const useLocalStorageDump = <T>({
  lsKey,
  schema,
  selector,
  actionCreator,
  debounceTime = 1000,
}: UseLocalStorageDumpParams<T>) => {
  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {
    let v = localStorage.getItem(lsKey);

    if (v === null) return;

    let data: unknown;
    try {
      data = JSON.parse(v);
    } catch {
      return;
    }

    const parseResult = schema.safeParse(data);

    if (!parseResult.success) return;

    dispatch(actionCreator(parseResult.data));
  }, []);

  useEffect(() => {
    const effect = () => {
      const value = selector(store.getState());
      localStorage.setItem(lsKey, JSON.stringify(value));
    };

    const stopListening = startStoreListening({
      predicate: (_, currentState, previousState) =>
        selector(currentState) !== selector(previousState),
      effect: debounce(effect, debounceTime),
    });

    window.addEventListener('beforeunload', effect);

    return () => {
      stopListening();
      window.removeEventListener('beforeunload', effect);
    };
  }, []);
};
