
export const specialsSymbols = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '=',
  '+',
  '[',
  ']',
  '\\',
  ';',
  "'",
  ',',
  '.',
  '/',
  '{',
  '}',
  '|',
  ':',
  '"',
  '<',
  '>',
  '?',
] as const;
export const separators = ['-', '_', '.'] as const;
export const passType = ['simple', 'groups'] as const;

export const passLengthMin = 4;
export const passLengthMax = 25;
export const groupsCountMin = 2;
export const groupsCountMax = 8;
export const groupLengthMin = 2;
export const groupLengthMax = 8;

export type Separator = (typeof separators)[number];
export type PassType = (typeof passType)[number];
