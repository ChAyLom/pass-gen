import { TitleBar } from './components/title-bar';
import { Router } from './components/router';
import { AppBackground } from './components/app-background';
import { useAppCoreHooks } from './hooks/use-app-core-hooks';

export const App = () => {
  useAppCoreHooks();

  return (
    <AppBackground>
      <TitleBar />
      <div className="w-screen flex-1">
        <Router />
      </div>
    </AppBackground>
  );
};
