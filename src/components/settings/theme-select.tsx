import { Button, ButtonGroup, Colors, Icon } from '@blueprintjs/core';
import { useDispatch, useSelector } from '../../store/hooks';
import { settingsActions } from '../../store/slices/settings/settings.slice';

export const ThemeSelect = () => {
  const settingsTheme = useSelector(state => state.settings.theme);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-4">
      <div>Theme:</div>
      <ButtonGroup>
        <Button
          intent={settingsTheme === 'system' ? 'primary' : 'none'}
          onClick={() => dispatch(settingsActions.setTheme('system'))}
          icon="contrast"
        >
          System
        </Button>
        <Button
          intent={settingsTheme === 'dark' ? 'primary' : 'none'}
          onClick={() => dispatch(settingsActions.setTheme('dark'))}
          icon={<Icon style={{ color: Colors.DARK_GRAY1 }} icon="full-circle" />}
        >
          Dark
        </Button>
        <Button
          intent={settingsTheme === 'light' ? 'primary' : 'none'}
          onClick={() => dispatch(settingsActions.setTheme('light'))}
          icon={<Icon style={{ color: Colors.LIGHT_GRAY5 }} icon="full-circle" />}
        >
          Light
        </Button>
      </ButtonGroup>
    </div>
  );
};
