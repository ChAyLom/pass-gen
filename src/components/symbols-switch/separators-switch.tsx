import { SymGroupSwitch } from '../sym-group-switch';
import { useLocalization } from '@localization/tools';

export const SeparatorsSwitch = () => {
  const loc = useLocalization();

  return (
    <SymGroupSwitch
      groupKey="separators"
      label="-_"
      description={loc.symbolsSequencesTooltip.separators}
      symSequnce="-_"
    />
  );
};
