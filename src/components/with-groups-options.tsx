import {
  groupLengthMax,
  groupLengthMin,
  groupsCountMax,
  groupsCountMin,
} from '../libs/consts';
import { useAtom } from 'jotai';
import { passgenSetupAtom } from '../store/passgen-setup';
import { NumSlideInput } from './num-slide-input';
import { NumbersSwitch } from './symbols-switch/numbers-switch';
import { UpperLatinSwitch } from './symbols-switch/upper-latin-switch';
import { LowerLatinSwitch } from './symbols-switch/lower-latin-switch';
import { SeparatorSwitch } from './separator-switch';

export const WithGroupsOptions = () => {
  const [genOptions, setGenOptions] = useAtom(passgenSetupAtom);

  return (
    <>
      <NumSlideInput
        label="Groups count:"
        min={groupsCountMin}
        max={groupsCountMax}
        value={genOptions.groupsCount}
        onChange={v => setGenOptions(state => void (state.groupsCount = v))}
      />
      <NumSlideInput
        label="Group length:"
        min={groupLengthMin}
        max={groupLengthMax}
        value={genOptions.groupLength}
        onChange={v => setGenOptions(state => void (state.groupLength = v))}
      />
      <SeparatorSwitch />
      <div className="flex gap-5 justify-center flex-wrap">
        <NumbersSwitch />
        <UpperLatinSwitch />
        <LowerLatinSwitch />
      </div>
    </>
  );
};
