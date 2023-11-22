import { useAtom } from 'jotai';
import { SymGroupSwitch } from '../sym-group-switch';
import { passgenSetupAtom } from '../../store/passgen-setup';

export const LowerLatinSwitch = () => {
  const [genOptions, setGenOptions] = useAtom(passgenSetupAtom);

  return (
    <SymGroupSwitch
      label="abc"
      description="Lowercase latin"
      symSequnce="a-z"
      value={genOptions.allowSym.lowerLatin}
      onChange={v => setGenOptions(state => void (state.allowSym.lowerLatin = v))}
    />
  );
};
