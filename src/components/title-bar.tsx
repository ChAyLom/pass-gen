import { Button, ButtonGroup, Colors, Divider } from '@blueprintjs/core';
import { getCurrentWebviewWindow } from '@tauri-apps/api/webviewWindow';
import { invoke } from '@tauri-apps/api/core';
import { useDispatch, useSelector } from '../store/hooks';
import { SystemTheme, appActions } from '../store/slices/app.slice';
import { themeSelector } from '../store/selectors';
import { useLocalization } from '@localization/tools';

const colors: Record<SystemTheme, string> = {
  dark: Colors.DARK_GRAY5,
  light: Colors.LIGHT_GRAY5,
};

export const TitleBar = () => {
  const window = useSelector(state => state.app.window);
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();
  const loc = useLocalization();

  return (
    <div
      className="w-screen flex p-0.5 select-none"
      style={{ backgroundColor: colors[theme] }}
    >
      <div data-tauri-drag-region="" className="flex-auto pl-1 font-semibold">
        {loc.title}
      </div>
      <div>
        <ButtonGroup>
          <Button
            icon="cog"
            small
            minimal
            active={window === 'settings'}
            intent={window === 'settings' ? 'primary' : 'none'}
            onClick={() => dispatch(appActions.switchSettings())}
          />
          <Divider />
          <Button
            icon="minus"
            small
            minimal
            onClick={() => getCurrentWebviewWindow().minimize()}
          />
          <Button
            icon="cross"
            intent="danger"
            small
            minimal
            onClick={() => invoke('close_app')}
          />
        </ButtonGroup>
      </div>
    </div>
  );
};
