import { SymGroupSwitch } from '../sym-group-switch';
import { useDispatch, useSelector } from '../../store/hooks';
import { passgenSetupActions } from '../../store/slices/passgen-setup/passgen-setup.slice';
import { useLocalization } from '@localization/tools';

export const UpperLatinSwitch = () => {
  const value = useSelector(state => state.passGenSetup.allowSymbolsSeqs.upperLatin);
  const dispatch = useDispatch();
  const loc = useLocalization();

  return (
    <SymGroupSwitch
      label="ABC"
      description={loc.symbolsSequencesTooltip.uppercaseLatin}
      symSequnce="A-Z"
      value={value}
      onChange={v =>
        dispatch(passgenSetupActions.setAllowSymbolsSeq({ seq: 'upperLatin', value: v }))
      }
    />
  );
};
