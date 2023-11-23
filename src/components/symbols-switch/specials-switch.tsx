import { SymGroupSwitch } from '../sym-group-switch';
import { useDispatch, useSelector } from '../../store/hooks';
import { passgenSetupActions } from '../../store/slices/passgen-setup/passgen-setup.slice';
import { specialsSymbols } from '../../libs/symbols';
import { useLocalization } from '@localization/tools';

export const SpecialsSwitch = () => {
  const value = useSelector(state => state.passGenSetup.allowSymbolsSeqs.specials);
  const dispatch = useDispatch();
  const loc = useLocalization();

  return (
    <SymGroupSwitch
      label="#$&"
      description={loc.symbolsSequencesTooltip.specials}
      symSequnce={specialsSymbols}
      value={value}
      onChange={v =>
        dispatch(passgenSetupActions.setAllowSymbolsSeq({ seq: 'specials', value: v }))
      }
    />
  );
};
