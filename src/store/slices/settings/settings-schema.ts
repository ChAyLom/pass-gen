import { langsList } from '@localization/index';
import { z } from 'zod';
import { getSystemLang } from '../../../libs/get-system-lang';

export const SettingsSchema = z
  .object({
    theme: z.enum(['system', 'light', 'dark']),
    lang: z.enum(langsList),
  })
  .default({
    theme: 'system',
    lang: getSystemLang(),
  });
