import { Button, Icon, InputGroup, Tooltip } from "@blueprintjs/core";

export const ResultView = () => {
  return (
    <div className="flex gap-2">
      <InputGroup
        className="w-full bp5-monospace-text"
        readOnly
        rightElement={<Button minimal icon="reset" />}
        value="85943hg84e5hg8"
      />
      <Tooltip
        intent="success"
        content={
          <div>
            <Icon icon="tick" /> Copied
          </div>
        }
        // disabled
        position="bottom-left"
        renderTarget={({ isOpen, ...props }) => (
          <Button {...props} icon="clipboard">
            Copy
          </Button>
        )}
      />
    </div>
  );
};
