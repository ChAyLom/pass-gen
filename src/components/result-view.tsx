import { Button, InputGroup } from '@blueprintjs/core';
import { useGenerator } from '../hooks/use-generator';
import { ResultCopy } from './result-copy';
import { writeText } from '@tauri-apps/plugin-clipboard-manager';
import { useEffect, useState } from 'react';
import { CopyState } from '../hooks/use-copy-state';

const getSelection = (element: HTMLInputElement) => {
  return element.value.slice(
    element.selectionStart ?? undefined,
    element.selectionEnd ?? undefined,
  );
};

export const ResultView = () => {
  const [copyState, setCopyState] = useState<CopyState>('idle');
  const { value, regenerate } = useGenerator();

  useEffect(() => setCopyState('idle'), [value]);

  return (
    <div className="flex gap-2">
      <InputGroup
        className="bp5-monospace-text flex-1"
        readOnly
        rightElement={<Button minimal icon="reset" onClick={regenerate} />}
        value={value}
        onCopy={e => {
          const selection = getSelection(e.currentTarget);
          if (selection === value) {
            setCopyState('success');
          } else if (selection === '') {
            writeText(value)
              .then(() => setCopyState('success'))
              .catch(() => setCopyState('error'));
          } else {
            setCopyState('idle');
          }
        }}
        onCut={e => {
          const selection = getSelection(e.currentTarget);
          if (selection === value || selection === '') {
            writeText(value)
              .then(() => setCopyState('success'))
              .catch(() => setCopyState('error'));
          } else {
            writeText(selection).then(() => setCopyState('idle'));
          }
        }}
      />
      <ResultCopy value={value} copyState={copyState} setCopyState={setCopyState} />
    </div>
  );
};
