import * as localizationsMap from './list-index';
export * as localizationsMap from './list-index';

export const langsList = Object.keys(localizationsMap) as LangKey[];
export const mainLang = 'en';

export type LocalizationShape = typeof localizationsMap.en;
export type LangKey = keyof typeof localizationsMap;

/**
 * Type constraint for equality of localizations shapes
 */
const LOCALIZATIONS_SHAPE_CHECK: Record<LangKey, LocalizationShape> = localizationsMap;
LOCALIZATIONS_SHAPE_CHECK;
