import { Icon, Switch, Tooltip } from '@blueprintjs/core';
import { useDispatch, useSelector } from '../../store/hooks';
import { useLocalization } from '@localization/tools';
import { passgenSetupActions } from '../../store/slices/passgen-setup/passgen-setup.slice';

export const CapitalizeSwitch = () => {
  const loc = useLocalization();
  const value = useSelector(state => state.passGenSetup.capitalize);
  const dispatch = useDispatch();

  return (
    <Switch
      checked={value}
      onChange={v => dispatch(passgenSetupActions.setCapitalize(v.currentTarget.checked))}
    >
      {loc.capitalize}{' '}
      <Tooltip content={loc.capitalizeDescription}>
        <Icon intent="primary" icon="small-info-sign" />
      </Tooltip>
    </Switch>
  );
};
