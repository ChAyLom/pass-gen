import { specialsSymbols } from '../../libs/consts';
import { SymGroupSwitch } from '../sym-group-switch';
import { useDispatch, useSelector } from '../../store/hooks';
import { passgenSetupActions } from '../../store/slices/passgen-setup';

export const SpecialsSwitch = () => {
  const value = useSelector(state => state.passGenSetup.allowSymbolsSeqs.specials);
  const dispatch = useDispatch();

  return (
    <SymGroupSwitch
      label="#$&"
      description="Specials"
      symSequnce={specialsSymbols.join('')}
      value={value}
      onChange={v =>
        dispatch(passgenSetupActions.setAllowSymbolsSeq({ seq: 'specials', value: v }))
      }
    />
  );
};
