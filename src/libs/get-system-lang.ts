import { LangKey, langsList, mainLang } from '@localization/index';

export const getSystemLang = () => {
  const match = navigator.language.match(/^[a-z]*/i)?.[0];

  if (match === undefined) {
    return mainLang;
  }

  if ((langsList as unknown as string[]).includes(match)) {
    return match as LangKey;
  }
  return mainLang;
};
