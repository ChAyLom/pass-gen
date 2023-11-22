import { NumericInput, Slider } from '@blueprintjs/core';
import { ReactNode } from 'react';

export type NumSlideInputProps = {
  min: number;
  max: number;
  value: number;
  label: ReactNode
  onChange: (v: number) => void;
}

export const NumSlideInput = ({ min, max, value, label, onChange }: NumSlideInputProps) => {
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
        onChange={onChange}
      />
      <div className="w-36">
        <NumericInput
          buttonPosition="left"
          fill
          value={value}
          onValueChange={onChange}
        />
      </div>
    </div>
  );
};
