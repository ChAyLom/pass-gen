import { useAtom } from 'jotai';
import { passgenSetupAtom } from '../store/passgen-setup';
import { PassTypeSwitch } from './passtype-switch';
import { SimpleOptions } from './simple-options';
import { WithGroupsOptions } from './with-groups-options';

export const GenOptions = () => {
  const [genOptions] = useAtom(passgenSetupAtom);

  return (
    <>
      <PassTypeSwitch />
      {genOptions.passType === 'simple' && (
        <SimpleOptions />
      )}
      {genOptions.passType === 'groups' && (
        <WithGroupsOptions />
      )}
    </>
  );
};
