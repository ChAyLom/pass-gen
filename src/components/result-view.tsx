import { Button, Icon, InputGroup, Tooltip } from '@blueprintjs/core';
import { useGenerator } from '../hooks/use-generator';

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
      <Tooltip
        intent="success"
        content={
          <div>
            <Icon icon="tick" /> Copied
          </div>
        }
        // disabled
        position="bottom-left"
        renderTarget={({ isOpen, ...props }) => (
          <Button {...props} icon="clipboard">
            Copy
          </Button>
        )}
      />
    </div>
  );
};
