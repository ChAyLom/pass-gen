import { Button } from '@blueprintjs/core';
import {
  BaseGenOptions,
  passgenSetupActions,
} from '../store/slices/passgen-setup/passgen-setup.slice';
import { useDispatch, useSelector } from '../store/hooks';
import { useLocalization } from '@localization/tools';

export const PassTypeSwitch = ({ passType }: Pick<BaseGenOptions, 'passType'>) => {
  const currentPassType = useSelector(state => state.passGenSetup.passType);
  const dispatch = useDispatch();
  const loc = useLocalization();

  return (
    <Button
      intent={passType === currentPassType ? 'primary' : 'none'}
      onClick={() => dispatch(passgenSetupActions.setPassType(passType))}
    >
      {loc.passwordType[passType]}
    </Button>
  );
};
