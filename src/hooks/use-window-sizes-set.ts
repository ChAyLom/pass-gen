import { invoke } from '@tauri-apps/api/core';
import { useEffect, useRef } from 'react';

export const useWindowSizesSet = () => {
  const screenHeightRef = useRef(window.document.body.scrollHeight);

  useEffect(() => {
    const obs = new ResizeObserver(() => {
      const { scrollHeight } = window.document.body;
      const height = scrollHeight > 250 ? scrollHeight : 250;

      if (screenHeightRef.current !== height) {
        screenHeightRef.current = height;
        invoke('resize_window', { height, width: 0 });
      }
    });

    obs.observe(window.document.body);

    return () => {
      obs.disconnect();
    };
  }, []);
};
