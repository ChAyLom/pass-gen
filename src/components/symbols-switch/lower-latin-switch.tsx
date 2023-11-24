import { useLocalization } from '@localization/tools';
import { SymGroupSwitch } from '../sym-group-switch';

export const LowerLatinSwitch = () => {
  const loc = useLocalization();

  return (
    <SymGroupSwitch
      groupKey="lowerLatin"
      label="abc"
      description={loc.symbolsSequencesTooltip.lowercaseLatin}
      symSequnce="a-z"
    />
  );
};
