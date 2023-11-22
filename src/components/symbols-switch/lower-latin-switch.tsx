import { useDispatch, useSelector } from '../../store/hooks';
import { passgenSetupActions } from '../../store/slices/passgen-setup.slice';
import { SymGroupSwitch } from '../sym-group-switch';

export const LowerLatinSwitch = () => {
  const value = useSelector(state => state.passGenSetup.allowSymbolsSeqs.lowerLatin);
  const dispatch = useDispatch();

  return (
    <SymGroupSwitch
      label="abc"
      description="Lowercase latin"
      symSequnce="a-z"
      value={value}
      onChange={v =>
        dispatch(passgenSetupActions.setAllowSymbolsSeq({ seq: 'lowerLatin', value: v }))
      }
    />
  );
};
