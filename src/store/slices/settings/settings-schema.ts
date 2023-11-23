import { langsList, mainLang } from '@localization/index';
import { z } from 'zod';

export const SettingsSchema = z
  .object({
    theme: z.enum(['system', 'light', 'dark']),
    lang: z.enum(langsList),
  })
  .default({
    theme: 'system',
    lang: mainLang,
  });
