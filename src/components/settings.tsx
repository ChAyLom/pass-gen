import { Button, Colors } from '@blueprintjs/core';
import { useDispatch } from '../store/hooks';
import { appActions } from '../store/slices/app.slice';

export const Settings = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="p-2 w-full h-full" style={{ backgroundColor: Colors.DARK_GRAY2 }}>
        <div className="flex">
          <div className="flex-auto">Settings</div>
          <Button
            icon="small-cross"
            minimal
            small
            onClick={() =>
              dispatch(appActions.closeSettings())
            }
          />
        </div>
      </div>
    </>
  );
};
