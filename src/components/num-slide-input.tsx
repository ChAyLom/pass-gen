import { Button, ButtonGroup, InputGroup, Slider } from '@blueprintjs/core';
import { ReactNode, useEffect, useRef } from 'react';

export type NumSlideInputProps = {
  min: number;
  max: number;
  value: number;
  label: ReactNode;
  onChange: (v: number) => void;
};

export const NumSlideInput = ({
  min,
  max,
  value,
  label,
  onChange,
}: NumSlideInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current && inputRef.current !== document.activeElement) {
      inputRef.current.value = String(value);
    }
  }, [value]);

  const onChangeInner = (v: number) => {
    if (v < min) onChange(min);
    else if (v > max) onChange(max);
    else onChange(v);
  };

  return (
    <div className="flex items-start">
      <div className="my-auto">{label}</div>
      <Slider
        className="mx-4"
        min={min}
        max={max}
        stepSize={1}
        labelValues={[min, max]}
        value={value}
        onChange={onChangeInner}
      />
      <div className="flex">
        <ButtonGroup>
          <Button icon="chevron-left" onClick={() => onChangeInner(value - 1)} />
          <Button icon="chevron-right" onClick={() => onChangeInner(value + 1)} />
        </ButtonGroup>
        <div className="w-12">
          <InputGroup
            inputRef={inputRef}
            type="number"
            inputClassName="no-number-input-arrows"
            fill
            min={min}
            max={max}
            onBlur={e => {
              let newValue = e.currentTarget.value;
              if (!newValue || Number.isNaN(+newValue) || !Number.isInteger(+newValue)) {
                e.currentTarget.value = String(value);
              } else {
                onChangeInner(+newValue);
              }
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                e.currentTarget.blur();
              }
            }}
          ></InputGroup>
        </div>
      </div>
    </div>
  );
};
