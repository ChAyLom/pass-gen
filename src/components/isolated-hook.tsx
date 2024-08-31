interface Props {
  hook: () => void;
}

/**
 * Utility component for run hook in isolated jsx node,
 * without triggering rerender of parent component.
 * Also hook can return array with some more hooks.
 */
export const IsolatedHook = ({ hook }: Props) => {
  hook();
  return null;
};
