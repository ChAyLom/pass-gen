import * as localizationsMap from './list-index';
export * as localizationsMap from './list-index';

export const langsList = Object.keys(localizationsMap) as LangKey[];
export const mainLang = 'en';

export type LocalizationShape = typeof localizationsMap.en;
export type LangKey = keyof typeof localizationsMap;

localizationsMap satisfies Record<LangKey, LocalizationShape>;
