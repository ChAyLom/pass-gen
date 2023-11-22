import { useAtom } from 'jotai';
import { passgenSetupAtom } from '../../store/passgen-setup';
import { SymGroupSwitch } from '../sym-group-switch';

export const UpperLatinSwitch = () => {
  const [genOptions, setGenOptions] = useAtom(passgenSetupAtom);

  return (
    <SymGroupSwitch
      label="ABC"
      description="Uppecase latin"
      symSequnce="A-Z"
      value={genOptions.allowSym.upperLatin}
      onChange={v => setGenOptions(state => void (state.allowSym.upperLatin = v))}
    />
  );
};
