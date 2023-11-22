import { z } from 'zod';

export const SettingsSchema = z
  .object({
    theme: z.enum(['system', 'light', 'dark']),
  })
  .default({
    theme: 'system',
  });
