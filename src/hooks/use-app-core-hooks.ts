import { PassgenSetupSchema } from '../store/slices/passgen-setup/passgen-setup-schema';
import { passgenSetupActions } from '../store/slices/passgen-setup/passgen-setup.slice';
import { SettingsSchema } from '../store/slices/settings/settings-schema';
import { settingsActions } from '../store/slices/settings/settings.slice';
import { useLocalStorageDump } from './use-local-storage-dump';
import { useSettingsHandler } from './use-settings-handler';

export const useAppCoreHooks = () => {
  useSettingsHandler();

  useLocalStorageDump({
    lsKey: 'password-generator-options',
    schema: PassgenSetupSchema,
    selector: state => state.passGenSetup,
    actionCreator: passgenSetupActions.set,
  });
  useLocalStorageDump({
    lsKey: 'app-settings',
    schema: SettingsSchema,
    selector: state => state.settings,
    actionCreator: settingsActions.set,
  });
};
