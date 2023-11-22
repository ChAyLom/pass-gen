import { useAtom } from 'jotai';
import { passgenSetupAtom } from '../../store/passgen-setup';
import { SymGroupSwitch } from '../sym-group-switch';

export const NumbersSwitch = () => {
  const [genOptions, setGenOptions] = useAtom(passgenSetupAtom);

  return (
    <SymGroupSwitch
      label="123"
      description="Numbers"
      symSequnce="0-9"
      value={genOptions.allowSym.numbers}
      onChange={v => setGenOptions(state => void (state.allowSym.numbers = v))}
    />
  );
};
