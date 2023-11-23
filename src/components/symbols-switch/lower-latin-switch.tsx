import { useLocalization } from '@localization/tools';
import { useDispatch, useSelector } from '../../store/hooks';
import { passgenSetupActions } from '../../store/slices/passgen-setup/passgen-setup.slice';
import { SymGroupSwitch } from '../sym-group-switch';

export const LowerLatinSwitch = () => {
  const value = useSelector(state => state.passGenSetup.allowSymbolsSeqs.lowerLatin);
  const dispatch = useDispatch();
  const loc = useLocalization();

  return (
    <SymGroupSwitch
      label="abc"
      description={loc.symbolsSequencesTooltip.lowercaseLatin}
      symSequnce="a-z"
      value={value}
      onChange={v =>
        dispatch(passgenSetupActions.setAllowSymbolsSeq({ seq: 'lowerLatin', value: v }))
      }
    />
  );
};
