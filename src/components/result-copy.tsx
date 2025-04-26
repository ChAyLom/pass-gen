import { Button, Icon, Intent, Tooltip } from '@blueprintjs/core';
import { useLocalization } from '@localization/tools';
import { writeText } from '@tauri-apps/plugin-clipboard-manager';
import { useState } from 'react';
import { CopyState, CopyStateReturn } from '../hooks/use-copy-state';

export type ResultCopyProps = CopyStateReturn & {
  copyState: CopyState;
  value: string;
};

const buttonIntentMap: Record<CopyState, Intent> = {
  idle: 'none',
  error: 'danger',
  success: 'success',
};

export const ResultCopy = ({ value, copyState, setCopyState }: ResultCopyProps) => {
  const [isOpen, setIsOpen] = useState<boolean>();
  const loc = useLocalization();

  const forceTooltipUpdate = () => {
    setIsOpen(true);
    setTimeout(() => setIsOpen(undefined));
  };

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
          intent={buttonIntentMap[copyState]}
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
