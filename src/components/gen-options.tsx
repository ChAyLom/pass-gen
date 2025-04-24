import { PassTypeSwitch } from './passtype-switch';
import { SimpleOptions } from './simple-options';
import { WithGroupsOptions } from './with-groups-options';
import { useSelector } from '../store/hooks';
import { ButtonGroup } from '@blueprintjs/core';
import { ExtraOptions } from './extra-options';

export const GenOptions = () => {
  const passType = useSelector(state => state.passGenSetup.passType);

  return (
    <>
      <ButtonGroup>
        <PassTypeSwitch passType="simple" />
        <PassTypeSwitch passType="groups" />
      </ButtonGroup>
      {passType === 'simple' && <SimpleOptions />}
      {passType === 'groups' && <WithGroupsOptions />}
      <ExtraOptions />
    </>
  );
};
