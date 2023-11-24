import { SymGroupSwitch } from '../sym-group-switch';
import { specialsSymbols } from '../../libs/symbols';
import { useLocalization } from '@localization/tools';

export const SpecialsSwitch = () => {
  const loc = useLocalization();

  return (
    <SymGroupSwitch
      groupKey="specials"
      label="#$&"
      description={loc.symbolsSequencesTooltip.specials}
      symSequnce={specialsSymbols}
    />
  );
};
