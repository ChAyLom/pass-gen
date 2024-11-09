import { Button, Icon, Switch, Tooltip } from '@blueprintjs/core';
import { useDispatch, useSelector } from '../store/hooks';
import { passgenSetupActions } from '../store/slices/passgen-setup/passgen-setup.slice';
import { useLocalization } from '@localization/tools';
import { useState } from 'react';

export const ExtraOptions = () => {
  const loc = useLocalization();
  const dispatch = useDispatch();
  const atLeastOneFromSeq = useSelector(state => state.passGenSetup.atLeastOneFromSeq);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        minimal
        onClick={() => setIsOpen(v => !v)}
        icon={
          <Icon
            icon="chevron-right"
            className="transition-transform"
            style={{ transform: `rotate(${isOpen ? 90 : 0}deg)` }}
          ></Icon>
        }
        className="w-fit"
      >
        {loc.extraOptions}
      </Button>
      {isOpen && (
        <>
          <Switch
            checked={atLeastOneFromSeq}
            onChange={v =>
              dispatch(passgenSetupActions.setAtLeastOneFromSeq(v.target.checked))
            }
          >
            {loc.atLeastOneFromSeq}{' '}
            <Tooltip content={loc.atLeastOneFromSeqDescription}>
              <Icon intent="primary" icon="small-info-sign" />
            </Tooltip>
          </Switch>
        </>
      )}
    </>
  );
};
