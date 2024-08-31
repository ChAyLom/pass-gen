import { Button, Colors } from '@blueprintjs/core';
import { useDispatch, useSelector } from '../../store/hooks';
import { SystemTheme, appActions } from '../../store/slices/app.slice';
import { themeSelector } from '../../store/selectors';
import { ThemeSelect } from './theme-select';
import { useLocalization } from '@localization/tools';
import { LangSelect } from './lang-select';
import { AllowScreenCaptureSwitch } from './allow-screen-capture-switch';

const colors: Record<SystemTheme, string> = {
  dark: Colors.DARK_GRAY2,
  light: Colors.LIGHT_GRAY2,
};

export const Settings = () => {
  const theme = useSelector(themeSelector);
  const loc = useLocalization();
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="p-2 w-full flex-1 flex flex-col gap-2"
        style={{ backgroundColor: colors[theme] }}
      >
        <div className="flex">
          <div className="flex-auto">{loc.settings}</div>
          <Button
            icon="small-cross"
            minimal
            small
            onClick={() => dispatch(appActions.closeSettings())}
          />
        </div>
        <ThemeSelect />
        <LangSelect />
        <AllowScreenCaptureSwitch />
      </div>
    </>
  );
};
