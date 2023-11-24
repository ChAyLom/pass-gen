import { SymGroupSwitch } from '../sym-group-switch';
import { useLocalization } from '@localization/tools';

export const NumbersSwitch = () => {
  const loc = useLocalization();

  return (
    <SymGroupSwitch
      groupKey="numbers"
      label="123"
      description={loc.symbolsSequencesTooltip.numbers}
      symSequnce="0-9"
    />
  );
};
