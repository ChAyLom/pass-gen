import { SymGroupSwitch } from '../sym-group-switch';
import { useDispatch, useSelector } from '../../store/hooks';
import { passgenSetupActions } from '../../store/slices/passgen-setup.slice';

export const UpperLatinSwitch = () => {
  const value = useSelector(state => state.passGenSetup.allowSymbolsSeqs.upperLatin);
  const dispatch = useDispatch();

  return (
    <SymGroupSwitch
      label="ABC"
      description="Uppecase latin"
      symSequnce="A-Z"
      value={value}
      onChange={v =>
        dispatch(passgenSetupActions.setAllowSymbolsSeq({ seq: 'upperLatin', value: v }))
      }
    />
  );
};
