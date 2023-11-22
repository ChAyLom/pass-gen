import { SymGroupSwitch } from '../sym-group-switch';
import { useDispatch, useSelector } from '../../store/hooks';
import { passgenSetupActions } from '../../store/slices/passgen-setup/passgen-setup.slice';

export const SeparatorsSwitch = () => {
  const value = useSelector(state => state.passGenSetup.allowSymbolsSeqs.separators);
  const dispatch = useDispatch();

  return (
    <SymGroupSwitch
      label="-_"
      description="Separators"
      symSequnce="-_"
      value={value}
      onChange={v =>
        dispatch(passgenSetupActions.setAllowSymbolsSeq({ seq: 'separators', value: v }))
      }
    />
  );
};
