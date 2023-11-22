import { Colors } from '@blueprintjs/core';
import { TitleBar } from './components/title-bar';
import { Router } from './components/router';

export const App = () => {
  return (
    <div
      className="flex flex-col w-screen h-screen bp5-dark"
      style={{ backgroundColor: Colors.DARK_GRAY3 }}
    >
      <TitleBar />
      <div className="w-screen flex-1">
        <Router />
      </div>
    </div>
  );
};
