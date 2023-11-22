import { useEffect } from 'react';
import { startStoreListening } from '../store/listener-middleware';
import { passgenSetupActions } from '../store/slices/passgen-setup/passgen-setup.slice';
import { PassgenSetupSchema } from '../store/slices/passgen-setup/passgen-setup-schema';
import { useDispatch, useStore } from '../store/hooks';
import debounce from 'debounce';

const LOCALSTORAGE_KEY = 'password-generator-options';

export const usePassgenSetupSaver = () => {
  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {
    let v = localStorage.getItem(LOCALSTORAGE_KEY);

    if (v === null) return;

    let data: unknown;
    try {
      data = JSON.parse(v);
    } catch {
      return;
    }

    const parseResult = PassgenSetupSchema.safeParse(data);

    if (!parseResult.success) return;

    dispatch(passgenSetupActions.set(parseResult.data));
  }, []);

  useEffect(() => {
    const effect = () => {
      const { passGenSetup } = store.getState();
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(passGenSetup));
    };

    const stopListening = startStoreListening({
      predicate: (_, currentState, previousState) =>
        currentState.passGenSetup !== previousState.passGenSetup,
      effect: debounce(effect, 1000),
    });

    window.addEventListener('beforeunload', effect);

    return () => {
      stopListening();
      window.removeEventListener('beforeunload', effect);
    };
  }, []);
};
