import { Button, ButtonGroup } from '@blueprintjs/core';
import { useAtom } from 'jotai';
import { passgenSetupAtom } from '../store/passgen-setup';

export const PassTypeSwitch = () => {
  const [genOptions, setGenOptions] = useAtom(passgenSetupAtom);

  return (
    <ButtonGroup>
      <Button
        intent={genOptions.passType === 'simple' ? 'primary' : 'none'}
        onClick={() => setGenOptions(v => void (v.passType = 'simple'))}
      >
        Simple
      </Button>
      <Button
        intent={genOptions.passType === 'groups' ? 'primary' : 'none'}
        onClick={() => setGenOptions(v => void (v.passType = 'groups'))}
      >
        With groups
      </Button>
    </ButtonGroup>
  );
};
