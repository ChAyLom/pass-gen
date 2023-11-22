import { Button, ButtonGroup } from '@blueprintjs/core';
import { passgenSetupActions } from '../store/slices/passgen-setup';
import { useDispatch, useSelector } from '../store/hooks';

export const PassTypeSwitch = () => {
  const passType = useSelector(state => state.passGenSetup.passType);
  const dispatch = useDispatch();

  return (
    <ButtonGroup>
      <Button
        intent={passType === 'simple' ? 'primary' : 'none'}
        onClick={() => dispatch(passgenSetupActions.setPassType('simple'))}
      >
        Simple
      </Button>
      <Button
        intent={passType === 'groups' ? 'primary' : 'none'}
        onClick={() => dispatch(passgenSetupActions.setPassType('groups'))}
      >
        With groups
      </Button>
    </ButtonGroup>
  );
};
