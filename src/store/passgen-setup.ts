import { atomWithImmer } from 'jotai-immer';
import { Separator } from '../libs/consts';

export interface PassgenSetupAtom {
  passType: 'simple' | 'groups';
  passLength: number;
  groupsCount: number;
  groupLength: number;
  separator: Separator;
  allowSym: {
    numbers: boolean;
    upperLatin: boolean;
    lowerLatin: boolean;
    separators: boolean;
    specials: boolean;
  };
}

export const passgenSetupAtom = atomWithImmer<PassgenSetupAtom>({
  passType: 'simple',
  passLength: 8,
  groupsCount: 4,
  groupLength: 3,
  separator: '-',
  allowSym: {
    numbers: true,
    upperLatin: true,
    lowerLatin: true,
    separators: false,
    specials: false,
  },
});

// import { Separator } from '../libs/consts';
// import { createSlice } from '@reduxjs/toolkit';

// export interface PassgenSetupState {
//   passType: 'simple' | 'groups';
//   passLength: number;
//   groupsCount: number;
//   groupLength: number;
//   separator: Separator;
//   allowSym: {
//     numbers: boolean;
//     upperLatin: boolean;
//     lowerLatin: boolean;
//     separators: boolean;
//     specials: boolean;
//   };
// }

// const initialState: PassgenSetupState = {
//   passType: 'simple',
//   passLength: 8,
//   groupsCount: 4,
//   groupLength: 3,
//   separator: '-',
//   allowSym: {
//     numbers: true,
//     upperLatin: true,
//     lowerLatin: true,
//     separators: false,
//     specials: false,
//   },
// };

// export const passgenSetupSlice = createSlice({
//   name: 'passGenSetup',
//   initialState,
//   reducers: {},
// });
