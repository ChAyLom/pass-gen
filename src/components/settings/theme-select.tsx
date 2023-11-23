import { Button, ButtonGroup, Colors, Icon } from '@blueprintjs/core';
import { useDispatch, useSelector } from '../../store/hooks';
import { settingsActions } from '../../store/slices/settings/settings.slice';
import { useLocalization } from '@localization/tools';

export const ThemeSelect = () => {
  const settingsTheme = useSelector(state => state.settings.theme);
  const dispatch = useDispatch();
  const loc = useLocalization();

  return (
    <div className="flex items-center gap-4">
      <div>{loc.theme}:</div>
      <ButtonGroup>
        <Button
          intent={settingsTheme === 'system' ? 'primary' : 'none'}
          onClick={() => dispatch(settingsActions.setTheme('system'))}
          icon="contrast"
        >
          {loc.themeValues.system}
        </Button>
        <Button
          intent={settingsTheme === 'dark' ? 'primary' : 'none'}
          onClick={() => dispatch(settingsActions.setTheme('dark'))}
          icon={<Icon style={{ color: Colors.DARK_GRAY1 }} icon="full-circle" />}
        >
          {loc.themeValues.dark}
        </Button>
        <Button
          intent={settingsTheme === 'light' ? 'primary' : 'none'}
          onClick={() => dispatch(settingsActions.setTheme('light'))}
          icon={<Icon style={{ color: Colors.LIGHT_GRAY5 }} icon="full-circle" />}
        >
        {loc.themeValues.light}
        </Button>
      </ButtonGroup>
    </div>
  );
};
