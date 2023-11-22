import { SymGroupSwitch } from '../sym-group-switch';
import { useDispatch, useSelector } from '../../store/hooks';
import { passgenSetupActions } from '../../store/slices/passgen-setup/passgen-setup.slice';

export const NumbersSwitch = () => {
  const value = useSelector(state => state.passGenSetup.allowSymbolsSeqs.numbers);
  const dispatch = useDispatch();

  return (
    <SymGroupSwitch
      label="123"
      description="Numbers"
      symSequnce="0-9"
      value={value}
      onChange={v =>
        dispatch(passgenSetupActions.setAllowSymbolsSeq({ seq: 'numbers', value: v }))
      }
    />
  );
};
