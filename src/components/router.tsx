import { useSelector } from "../store/hooks"
import { Main } from "./main";
import { Settings } from "./settings/settings";

export const Router = () => {
  const window = useSelector(state => state.app.window);

  return <>
    {window === 'main' && <Main />}
    {window === 'settings' && <Settings />}
  </>;
}