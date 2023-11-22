import { GenOptions } from './gen-options';
import { ResultView } from './result-view';

export const Main = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <ResultView />
      <GenOptions />
    </div>
  );
};
