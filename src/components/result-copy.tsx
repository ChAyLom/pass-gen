import { Button, Icon, Tooltip } from '@blueprintjs/core';
import { useLocalization } from '@localization/tools';
import { writeText } from '@tauri-apps/api/clipboard';
import { useEffect, useState } from 'react';

export type ResultCopyProps = {
  value: string;
};

export const ResultCopy = ({ value }: ResultCopyProps) => {
  const [copyState, setCopyState] = useState<'idle' | 'error' | 'success'>('idle');
  const [isOpen, setIsOpen] = useState<boolean>();
  const loc = useLocalization();

  const forceTooltipUpdate = () => {
    setIsOpen(true);
    setTimeout(() => setIsOpen(undefined));
  };

  useEffect(() => setCopyState('idle'), [value]);

  return (
    <Tooltip
      intent={copyState === 'error' ? 'danger' : 'success'}
      isOpen={isOpen}
      content={
        <div>
          {copyState === 'success' && (
            <>
              <Icon icon="tick" /> {loc.copied}
            </>
          )}
          {copyState === 'error' && (
            <>
              <Icon icon="cross" /> {loc.error}
            </>
          )}
        </div>
      }
      disabled={copyState === 'idle'}
      position="bottom-left"
      renderTarget={({ isOpen, ...props }) => (
        <Button
          {...props}
          icon="clipboard"
          onClick={() => {
            writeText(value)
              .then(() => setCopyState('success'))
              .catch(() => setCopyState('error'))
              .finally(() => forceTooltipUpdate());
          }}
        >
          {loc.copy}
        </Button>
      )}
    />
  );
};
