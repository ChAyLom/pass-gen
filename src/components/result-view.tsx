import { Button, InputGroup } from '@blueprintjs/core';
import { useGenerator } from '../hooks/use-generator';
import { ResultCopy } from './result-copy';

export const ResultView = () => {
  const { value, regenerate } = useGenerator();

  return (
    <div className="flex gap-2">
      <InputGroup
        className="bp5-monospace-text flex-1"
        readOnly
        rightElement={<Button minimal icon="reset" onClick={regenerate} />}
        value={value}
      />
      <ResultCopy value={value} />
    </div>
  );
};
