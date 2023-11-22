export const groupSeparators = ['-', '_', '.'] as const;
export const passType = ['simple', 'groups'] as const;

export const passLengthMin = 4;
export const passLengthMax = 25;
export const groupsCountMin = 2;
export const groupsCountMax = 8;
export const groupLengthMin = 2;
export const groupLengthMax = 8;

export type GroupSeparator = (typeof groupSeparators)[number];
export type PassType = (typeof passType)[number];
