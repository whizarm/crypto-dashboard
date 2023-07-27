import * as React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

export type ButtonProperties = {
  iconUrl: string;
  value: string;
};

type Props = {
  buttons: ButtonProperties[];
  width?: number;
  selectedValue: string;
  onChange: (e: React.MouseEvent<HTMLElement>, newValue: string) => void;
};

export const ToggleButtons = ({
  buttons,
  width = 50,
  selectedValue,
  onChange,
}: Props) => (
  <ToggleButtonGroup
    value={selectedValue}
    exclusive
    onChange={onChange}
    aria-label="Toggle button group"
    sx={{ display: 'flex', flexWrap: 'wrap' }}
  >
    {buttons.map(({ iconUrl, value }) => (
      <ToggleButton
        key={value}
        value={value}
        aria-label={`Pick ${value}`}
        sx={{ borderRadius: '100% !important', border: 'none', width }}
      >
        <img src={iconUrl} width="100%" />
      </ToggleButton>
    ))}
  </ToggleButtonGroup>
);
