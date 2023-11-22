import { useAtom } from 'jotai';
import { specialsSymbols } from '../../libs/consts';
import { SymGroupSwitch } from '../sym-group-switch';
import { passgenSetupAtom } from '../../store/passgen-setup';

export const SpecialsSwitch = () => {
  const [genOptions, setGenOptions] = useAtom(passgenSetupAtom);

  return (
    <SymGroupSwitch
      label="#$&"
      description="Specials"
      symSequnce={specialsSymbols.join('')}
      value={genOptions.allowSym.specials}
      onChange={v => setGenOptions(state => void (state.allowSym.specials = v))}
    />
  );
};
