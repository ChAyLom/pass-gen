import { TitleBar } from './components/title-bar';
import { Router } from './components/router';
import { useAppCoreHooks } from './hooks/use-app-core-hooks';
import { IsolatedHook } from './components/isolated-hook';
import { useThemeApplyer } from './hooks/use-theme-applyer';

export const App = () => {
  return (
    <>
      <div className="min-h-[250px] flex flex-col">
        <TitleBar />
        <Router />
      </div>
      <IsolatedHook hook={useAppCoreHooks} />
      <IsolatedHook hook={useThemeApplyer} />
    </>
  );
};
