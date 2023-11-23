import { SymGroupSwitch } from '../sym-group-switch';
import { useDispatch, useSelector } from '../../store/hooks';
import { passgenSetupActions } from '../../store/slices/passgen-setup/passgen-setup.slice';
import { useLocalization } from '@localization/tools';

export const SeparatorsSwitch = () => {
  const value = useSelector(state => state.passGenSetup.allowSymbolsSeqs.separators);
  const dispatch = useDispatch();
  const loc = useLocalization();

  return (
    <SymGroupSwitch
      label="-_"
      description={loc.symbolsSequencesTooltip.separators}
      symSequnce="-_"
      value={value}
      onChange={v =>
        dispatch(passgenSetupActions.setAllowSymbolsSeq({ seq: 'separators', value: v }))
      }
    />
  );
};
