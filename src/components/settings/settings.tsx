import { Button, Colors } from '@blueprintjs/core';
import { useDispatch, useSelector } from '../../store/hooks';
import { SystemTheme, appActions } from '../../store/slices/app.slice';
import { themeSelector } from '../../store/selectors';
import { ThemeSelect } from './theme-select';

const colors: Record<SystemTheme, string> = {
  dark: Colors.DARK_GRAY2,
  light: Colors.LIGHT_GRAY2,
};

export const Settings = () => {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();

  return (
    <>
      <div className="p-2 w-full h-full" style={{ backgroundColor: colors[theme] }}>
        <div className="flex">
          <div className="flex-auto">Settings</div>
          <Button
            icon="small-cross"
            minimal
            small
            onClick={() => dispatch(appActions.closeSettings())}
          />
        </div>
        <ThemeSelect />
      </div>
    </>
  );
};
