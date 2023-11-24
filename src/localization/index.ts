import en from './list/en';
import ru from './list/ru';

export const localizationsMap: Record<(typeof langsList)[number], LocalizationShape> = {
  en,
  ru,
};

export const langsList = ['en', 'ru'] as const;
export const mainLang = 'en';

export type LocalizationShape = typeof en;
export type LangKey = keyof typeof localizationsMap;
