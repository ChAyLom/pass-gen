import { z } from 'zod';
import {
  groupLengthMax,
  groupLengthMin,
  groupSeparators,
  groupsCountMax,
  groupsCountMin,
  passLengthMax,
  passLengthMin,
  passType,
} from '../../../libs/consts';

export const BaseGenSchema = z.object({
  passType: z.enum(passType),
  passLength: z.number().max(passLengthMax).min(passLengthMin).int(),
  groupsCount: z.number().max(groupsCountMax).min(groupsCountMin).int(),
  groupLength: z.number().max(groupLengthMax).min(groupLengthMin).int(),
  separator: z.enum(groupSeparators),
});

export const AllowSymbolsSeqsSchema = z.object({
  numbers: z.boolean(),
  upperLatin: z.boolean(),
  lowerLatin: z.boolean(),
  separators: z.boolean(),
  specials: z.boolean(),
});

export const PassgenSetupSchema = BaseGenSchema.extend({
  allowSymbolsSeqs: AllowSymbolsSeqsSchema,
}).default({
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
});
