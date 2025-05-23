import { z } from 'zod';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AllowSymbolsSeqsSchema,
  BaseGenSchema,
  PassgenSetupSchema,
} from './passgen-setup-schema';

export type BaseGenOptions = z.infer<typeof BaseGenSchema>;

export type SymbolsSequences = z.infer<typeof AllowSymbolsSeqsSchema>;

export type PassgenSetupState = z.infer<typeof PassgenSetupSchema>;

export const passgenSetupSlice = createSlice({
  name: 'passGenSetup',
  initialState: PassgenSetupSchema.parse(undefined),
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
    setCapitalize(state, { payload }: PayloadAction<BaseGenOptions['capitalize']>) {
      state.capitalize = payload;
    },
    setAtLeastOneFromSeq(
      state,
      { payload }: PayloadAction<BaseGenOptions['atLeastOneFromSeq']>,
    ) {
      state.atLeastOneFromSeq = payload;
    },
    setAllowSymbolsSeq(
      state,
      { payload }: PayloadAction<{ seq: keyof SymbolsSequences; value: boolean }>,
    ) {
      state.allowSymbolsSeqs[payload.seq] = payload.value;
    },
    set(_, { payload }: PayloadAction<PassgenSetupState>) {
      return payload;
    },
  },
});

export const passgenSetupActions = passgenSetupSlice.actions;
