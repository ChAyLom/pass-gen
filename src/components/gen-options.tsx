import { PassTypeSwitch } from './passtype-switch';
import { SimpleOptions } from './simple-options';
import { WithGroupsOptions } from './with-groups-options';
import { useSelector } from '../store/hooks';

export const GenOptions = () => {
  const passType = useSelector(state => state.passGenSetup.passType);

  return (
    <>
      <PassTypeSwitch />
      {passType === 'simple' && <SimpleOptions />}
      {passType === 'groups' && <WithGroupsOptions />}
    </>
  );
};
