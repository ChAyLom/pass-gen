import {
  groupLengthMax,
  groupLengthMin,
  groupsCountMax,
  groupsCountMin,
} from '../libs/consts';
import { NumSlideInput } from './num-slide-input';
import { NumbersSwitch } from './symbols-switch/numbers-switch';
import { UpperLatinSwitch } from './symbols-switch/upper-latin-switch';
import { LowerLatinSwitch } from './symbols-switch/lower-latin-switch';
import { SeparatorSwitch } from './separator-switch';
import { useDispatch, useSelector } from '../store/hooks';
import { passgenSetupActions } from '../store/slices/passgen-setup/passgen-setup.slice';
import { useLocalization } from '@localization/tools';
import { CapitalizeSwitch } from './symbols-switch/capitalize-switch';

export const WithGroupsOptions = () => {
  const groupsCount = useSelector(state => state.passGenSetup.groupsCount);
  const groupLength = useSelector(state => state.passGenSetup.groupLength);
  const dispatch = useDispatch();
  const loc = useLocalization();

  return (
    <>
      <NumSlideInput
        label={<>{loc.groupsCount}:</>}
        min={groupsCountMin}
        max={groupsCountMax}
        value={groupsCount}
        onChange={v => dispatch(passgenSetupActions.setGroupsCount(v))}
      />
      <NumSlideInput
        label={<>{loc.groupLength}:</>}
        min={groupLengthMin}
        max={groupLengthMax}
        value={groupLength}
        onChange={v => dispatch(passgenSetupActions.setGroupLength(v))}
      />
      <SeparatorSwitch />
      <div className="flex gap-5 justify-center flex-wrap">
        <NumbersSwitch />
        <UpperLatinSwitch />
        <LowerLatinSwitch />
        <CapitalizeSwitch />
      </div>
    </>
  );
};
