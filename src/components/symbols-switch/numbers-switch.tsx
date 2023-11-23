import { SymGroupSwitch } from '../sym-group-switch';
import { useDispatch, useSelector } from '../../store/hooks';
import { passgenSetupActions } from '../../store/slices/passgen-setup/passgen-setup.slice';
import { useLocalization } from '@localization/tools';

export const NumbersSwitch = () => {
  const value = useSelector(state => state.passGenSetup.allowSymbolsSeqs.numbers);
  const dispatch = useDispatch();
  const loc = useLocalization();

  return (
    <SymGroupSwitch
      label="123"
      description={loc.symbolsSequencesTooltip.numbers}
      symSequnce="0-9"
      value={value}
      onChange={v =>
        dispatch(passgenSetupActions.setAllowSymbolsSeq({ seq: 'numbers', value: v }))
      }
    />
  );
};
