import { Button, InputGroup, Slider } from '@blueprintjs/core';
import { ReactNode } from 'react';

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
  const onChangeInner = (v: number) => {
    if (v < min) onChange(min);
    else if (v > max) onChange(max);
    else onChange(v);
  };

  return (
    <div className="flex items-center">
      <div>{label}</div>
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
        <Button icon="chevron-left" onClick={() => onChangeInner(value - 1)} />
        <Button icon="chevron-right" onClick={() => onChangeInner(value + 1)} />
        <div className="w-12">
          <InputGroup
            type="number"
            inputClassName="no-number-input-arrows"
            fill
            value={`${value}`}
            min={min}
            max={max}
            onChange={e => {
              const a = e.currentTarget.value;
              if (!a) return;
              if (Number.isNaN(+a)) return;
              if (!Number.isInteger(+a)) return;
              onChangeInner(+a);
            }}
          ></InputGroup>
        </div>
      </div>
    </div>
  );
};
