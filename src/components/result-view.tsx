import { Button, InputGroup } from '@blueprintjs/core';
import { useGenerator } from '../hooks/use-generator';
import { ResultCopy } from './result-copy';

export const ResultView = () => {
  const { value, regenerate } = useGenerator();

  return (
    <div className="flex gap-2">
      <InputGroup
        className="w-full bp5-monospace-text"
        readOnly
        rightElement={<Button minimal icon="reset" onClick={regenerate} />}
        value={value}
      />
      <ResultCopy value={value} />
    </div>
  );
};
