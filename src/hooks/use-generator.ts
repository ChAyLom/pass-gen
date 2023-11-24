import { useEffect, useState, useCallback } from 'react';
import { startStoreListening } from '../store/listener-middleware';
import { generatePassword } from '../libs/generator';
import { useStore } from '../store/hooks';

export const useGenerator = () => {
  const [generated, setGenerated] = useState('');
  const store = useStore();

  const regenerate = useCallback(() => {
    const { passGenSetup } = store.getState();
    setGenerated(generatePassword(passGenSetup));
  }, []);

  useEffect(() => {
    regenerate();
    const stopListening = startStoreListening({
      predicate: (_, currentState, previousState) =>
        currentState.passGenSetup !== previousState.passGenSetup,
      effect: regenerate,
    });
    return () => {
      stopListening();
    };
  }, []);

  return {
    value: generated,
    regenerate,
  };
};
