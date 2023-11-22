import { Button, ButtonGroup, Colors, Divider } from '@blueprintjs/core';
import { appWindow } from '@tauri-apps/api/window';
import { useDispatch, useSelector } from '../store/hooks';
import { SystemTheme, appActions } from '../store/slices/app.slice';
import { themeSelector } from '../store/selectors';

const colors: Record<SystemTheme, string> = {
  dark: Colors.DARK_GRAY5,
  light: Colors.LIGHT_GRAY5,
}

export const TitleBar = () => {
  const window = useSelector(state => state.app.window);
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();

  return (
    <div
      className="w-screen flex p-0.5 select-none"
      style={{ backgroundColor: colors[theme] }}
    >
      <div data-tauri-drag-region="" className="flex-auto pl-1 font-semibold">
        Password generator
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
          <Button icon="minus" small minimal onClick={() => appWindow.minimize()} />
          <Button
            icon="cross"
            intent="danger"
            small
            minimal
            onClick={() => appWindow.close()}
          />
        </ButtonGroup>
      </div>
    </div>
  );
};
