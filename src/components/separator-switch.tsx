import { useAtom } from 'jotai';
import { passgenSetupAtom } from '../store/passgen-setup';
import { Separator } from '../libs/consts';
import { SegmentedControl } from '@blueprintjs/core';

export const SeparatorSwitch = () => {
  const [genOptions, setGenOptions] = useAtom(passgenSetupAtom);

  return (
    <div className="flex gap-4 items-center">
      <div>Separator:</div>
      <SegmentedControl
        intent="primary"
        value={genOptions.separator}
        onValueChange={v =>
          setGenOptions(state => void (state.separator = v as Separator))
        }
        options={[
          { value: '-', label: '-' },
          { value: '_', label: '_' },
          { value: '.', label: '.' },
        ]}
      />
    </div>
  );
};
