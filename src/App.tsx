import { TitleBar } from './components/title-bar';
import { Router } from './components/router';
import { useAppCoreHooks } from './hooks/use-app-core-hooks';

export const App = () => {
  useAppCoreHooks();

  return (
    <div className="min-h-[250px] flex flex-col">
      <TitleBar />
      <Router />
    </div>
  );
};
