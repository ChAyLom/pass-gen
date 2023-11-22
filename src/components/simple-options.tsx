import {
  passLengthMax,
  passLengthMin,
} from '../libs/consts';
import { useAtom } from 'jotai';
import { passgenSetupAtom } from '../store/passgen-setup';
import { NumSlideInput } from './num-slide-input';
import { NumbersSwitch } from './symbols-switch/numbers-switch';
import { UpperLatinSwitch } from './symbols-switch/upper-latin-switch';
import { LowerLatinSwitch } from './symbols-switch/lower-latin-switch';
import { SeparatorsSwitch } from './symbols-switch/separators-switch';
import { SpecialsSwitch } from './symbols-switch/specials-switch';

export const SimpleOptions = () => {
  const [genOptions, setGenOptions] = useAtom(passgenSetupAtom);

  return (
    <>
      <NumSlideInput
        label="Length:"
        min={passLengthMin}
        max={passLengthMax}
        value={genOptions.passLength}
        onChange={v => setGenOptions(state => void (state.passLength = v))}
      />
      <div className="flex gap-5 justify-center flex-wrap">
        <NumbersSwitch />
        <UpperLatinSwitch />
        <LowerLatinSwitch />
        <SeparatorsSwitch />
        <SpecialsSwitch />
      </div>
    </>
  );
};
