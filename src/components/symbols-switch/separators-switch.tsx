import { useAtom } from 'jotai';
import { passgenSetupAtom } from '../../store/passgen-setup';
import { SymGroupSwitch } from '../sym-group-switch';

export const SeparatorsSwitch = () => {
  const [genOptions, setGenOptions] = useAtom(passgenSetupAtom);

  return (
    <SymGroupSwitch
      label="-_"
      description="Separators"
      symSequnce="-_"
      value={genOptions.allowSym.separators}
      onChange={v => setGenOptions(state => void (state.allowSym.separators = v))}
    />
  );
};
