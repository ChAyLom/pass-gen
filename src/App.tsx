import { TitleBar } from './components/title-bar';
import { Router } from './components/router';
import { usePassgenSetupSaver } from './hooks/use-passgen-setup-saver';
import { useThemeHandler } from './hooks/use-theme-handler';
import { AppBackground } from './components/app-background';

export const App = () => {
  usePassgenSetupSaver();
  useThemeHandler();

  return (
    <AppBackground>
      <TitleBar />
      <div className="w-screen flex-1">
        <Router />
      </div>
    </AppBackground>
  );
};
