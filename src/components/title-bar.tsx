import { Button, ButtonGroup, Colors, Divider } from '@blueprintjs/core';
import { appWindow } from '@tauri-apps/api/window';

export const TitleBar = () => {
  return (
    <div
      className="w-screen flex p-0.5 select-none"
      style={{ backgroundColor: Colors.DARK_GRAY5 }}
    >
      <div data-tauri-drag-region="" className="flex-auto pl-1">
        Password generator
      </div>
      <div>
        <ButtonGroup>
          <Button icon="cog" small minimal />
          <Divider />
          <Button icon="minus" small minimal onClick={() => appWindow.minimize()} />
          <Button
            icon="cross"
            intent="danger"
            small
            minimal
            onClick={() => appWindow.close()}
          />
        </ButtonGroup>
      </div>
    </div>
  );
};
