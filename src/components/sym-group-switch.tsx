import { Icon, Switch, Tooltip } from '@blueprintjs/core';
import {
  SymbolsSequences,
  passgenSetupActions,
} from '../store/slices/passgen-setup/passgen-setup.slice';
import { useDispatch, useSelector } from '../store/hooks';

export type SymGroupSwitchProps = {
  groupKey: keyof SymbolsSequences;
  label: string;
  description: string;
  symSequnce: string;
};

export const SymGroupSwitch = ({
  groupKey,
  label,
  description,
  symSequnce,
}: SymGroupSwitchProps) => {
  const value = useSelector(state => state.passGenSetup.allowSymbolsSeqs[groupKey]);
  const dispatch = useDispatch();

  return (
    <Switch
      checked={value}
      onChange={v =>
        dispatch(
          passgenSetupActions.setAllowSymbolsSeq({
            seq: groupKey,
            value: v.currentTarget.checked,
          }),
        )
      }
    >
      {label}{' '}
      <Tooltip
        content={
          <>
            {description} <span className="bp5-monospace-text">({symSequnce})</span>
          </>
        }
      >
        <Icon intent="primary" icon="small-info-sign" />
      </Tooltip>
    </Switch>
  );
};
