import { Separator } from '../../libs/consts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type BaseGenOptions = {
  passType: 'simple' | 'groups';
  passLength: number;
  groupsCount: number;
  groupLength: number;
  separator: Separator;
};

type SymbolsSequences = {
  numbers: boolean;
  upperLatin: boolean;
  lowerLatin: boolean;
  separators: boolean;
  specials: boolean;
};

export type PassgenSetupState = BaseGenOptions & {
  allowSymbolsSeqs: SymbolsSequences;
};

const initialState: PassgenSetupState = {
  passType: 'simple',
  passLength: 8,
  groupsCount: 4,
  groupLength: 3,
  separator: '-',
  allowSymbolsSeqs: {
    numbers: true,
    upperLatin: true,
    lowerLatin: true,
    separators: false,
    specials: false,
  },
};

export const passgenSetupSlice = createSlice({
  name: 'passGenSetup',
  initialState,
  reducers: {
    setPassType(state, { payload }: PayloadAction<BaseGenOptions['passType']>) {
      state.passType = payload;
    },
    setPassLength(state, { payload }: PayloadAction<BaseGenOptions['passLength']>) {
      state.passLength = payload;
    },
    setGroupsCount(state, { payload }: PayloadAction<BaseGenOptions['groupsCount']>) {
      state.groupsCount = payload;
    },
    setGroupLength(state, { payload }: PayloadAction<BaseGenOptions['groupLength']>) {
      state.groupLength = payload;
    },
    setSeparator(state, { payload }: PayloadAction<BaseGenOptions['separator']>) {
      state.separator = payload;
    },
    setAllowSymbolsSeq(
      state,
      { payload }: PayloadAction<{ seq: keyof SymbolsSequences; value: boolean }>,
    ) {
      state.allowSymbolsSeqs[payload.seq] = payload.value;
    },
  },
});

export const passgenSetupActions = passgenSetupSlice.actions;