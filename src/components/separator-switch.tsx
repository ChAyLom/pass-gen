import { passgenSetupActions } from '../store/slices/passgen-setup.slice';
import { Separator } from '../libs/consts';
import { SegmentedControl } from '@blueprintjs/core';
import { useDispatch, useSelector } from '../store/hooks';

export const SeparatorSwitch = () => {
  const value = useSelector(state => state.passGenSetup.separator);
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4 items-center">
      <div>Separator:</div>
      <SegmentedControl
        intent="primary"
        value={value}
        onValueChange={v => dispatch(passgenSetupActions.setSeparator(v as Separator))}
        options={[
          { value: '-', label: '-' },
          { value: '_', label: '_' },
          { value: '.', label: '.' },
        ]}
      />
    </div>
  );
};
