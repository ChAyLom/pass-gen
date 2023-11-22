import { Colors } from '@blueprintjs/core';
import { TitleBar } from './components/title-bar';
import { ResultView } from './components/result-view';
import { GenOptions } from './components/gen-options';

export const App = () => {
  return (
    <div
      className="w-screen h-screen bp5-dark"
      style={{ backgroundColor: Colors.DARK_GRAY3 }}
    >
      <TitleBar />
      <div className="flex flex-col p-2 w-screen gap-2">
        <ResultView />
        <GenOptions />
      </div>
    </div>
  );
};
