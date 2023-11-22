import { passLengthMax, passLengthMin } from '../libs/consts';
import { passgenSetupActions } from '../store/slices/passgen-setup';
import { NumSlideInput } from './num-slide-input';
import { NumbersSwitch } from './symbols-switch/numbers-switch';
import { UpperLatinSwitch } from './symbols-switch/upper-latin-switch';
import { LowerLatinSwitch } from './symbols-switch/lower-latin-switch';
import { SeparatorsSwitch } from './symbols-switch/separators-switch';
import { SpecialsSwitch } from './symbols-switch/specials-switch';
import { useDispatch, useSelector } from '../store/hooks';

export const SimpleOptions = () => {
  const passLength = useSelector(state => state.passGenSetup.passLength);
  const dispatch = useDispatch();

  return (
    <>
      <NumSlideInput
        label="Length:"
        min={passLengthMin}
        max={passLengthMax}
        value={passLength}
        onChange={v => dispatch(passgenSetupActions.setPassLength(v))}
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
