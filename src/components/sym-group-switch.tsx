import { Icon, Switch, Tooltip } from '@blueprintjs/core';
import { InputValueProps } from '../libs/types';

export type SymGroupSwitchProps = InputValueProps<boolean> & {
  label: string;
  description: string;
  symSequnce: string;
};

export const SymGroupSwitch = ({
  label,
  description,
  symSequnce,
  value,
  onChange,
}: SymGroupSwitchProps) => {
  return (
    <Switch checked={value} onChange={v => onChange(v.currentTarget.checked)} >
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
