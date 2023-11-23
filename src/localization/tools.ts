import { localizationsMap } from '.';
import { useSelector } from '../store/hooks';

export const useLocalization = () => {
  const lang = useSelector(state => state.settings.lang);
  return localizationsMap[lang];
};
