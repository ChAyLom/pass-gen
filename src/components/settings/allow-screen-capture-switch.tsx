import { Icon, Switch, Tooltip } from '@blueprintjs/core';
import { useDispatch, useSelector } from '../../store/hooks';
import { useLocalization } from '@localization/tools';
import { settingsActions } from '../../store/slices/settings/settings.slice';

export const AllowScreenCaptureSwitch = () => {
  const value = useSelector(state => state.settings.allowCapture);
  const loc = useLocalization();
  const dispatch = useDispatch();

  return (
    <label className="flex items-center gap-1 select-none">
      <div>{loc.allowCapture}:</div>
      <Switch
        className="m-0"
        large
        alignIndicator="right"
        checked={value}
        onChange={e => dispatch(settingsActions.setAllowCapture(e.currentTarget.checked))}
      ></Switch>
      <Tooltip
        renderTarget={({ isOpen, ...props }) => (
          <Icon {...props} className="ml-1" icon="small-info-sign" />
        )}
        content={<>{loc.allowCaptureDesc}</>}
      />
    </label>
  );
};
