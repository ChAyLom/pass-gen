import { useState } from 'react';

export type CopyState = 'idle' | 'error' | 'success';
export type CopyStateReturn = ReturnType<typeof useCopyState>;

export const useCopyState = () => {
  const [state, setState] = useState<CopyState>('idle');
  return { copyState: state, setCopyState: setState };
};
