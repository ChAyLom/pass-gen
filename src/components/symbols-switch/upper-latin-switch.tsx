import { SymGroupSwitch } from '../sym-group-switch';
import { useLocalization } from '@localization/tools';

export const UpperLatinSwitch = () => {
  const loc = useLocalization();

  return (
    <SymGroupSwitch
      groupKey="upperLatin"
      label="ABC"
      description={loc.symbolsSequencesTooltip.uppercaseLatin}
      symSequnce="A-Z"
    />
  );
};
