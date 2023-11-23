import { Button, ButtonGroup } from '@blueprintjs/core';
import { passgenSetupActions } from '../store/slices/passgen-setup/passgen-setup.slice';
import { useDispatch, useSelector } from '../store/hooks';
import { useLocalization } from '@localization/tools';

export const PassTypeSwitch = () => {
  const passType = useSelector(state => state.passGenSetup.passType);
  const dispatch = useDispatch();
  const loc = useLocalization();

  return (
    <ButtonGroup>
      <Button
        intent={passType === 'simple' ? 'primary' : 'none'}
        onClick={() => dispatch(passgenSetupActions.setPassType('simple'))}
      >
        {loc.passwordType.simple}
      </Button>
      <Button
        intent={passType === 'groups' ? 'primary' : 'none'}
        onClick={() => dispatch(passgenSetupActions.setPassType('groups'))}
      >
        {loc.passwordType.group}
      </Button>
    </ButtonGroup>
  );
};
