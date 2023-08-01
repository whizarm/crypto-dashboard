import { render, fireEvent } from '@testing-library/react';
import { ToggleButtons, ButtonProperties } from './ToggleButtons';

describe('ToggleButtons', () => {
  const buttons: ButtonProperties[] = [
    { iconUrl: 'url1', value: 'value1' },
    { iconUrl: 'url2', value: 'value2' },
    { iconUrl: 'url3', value: 'value3' },
  ];

  test('should render the correct number of buttons', () => {
    const { getAllByRole } = render(
      <ToggleButtons
        buttons={buttons}
        selectedValue="value1"
        onChange={() => {}}
      />,
    );
    const toggleButtons = getAllByRole('button');
    expect(toggleButtons.length).toBe(buttons.length);
  });

  test('should call onChange when a button is clicked', () => {
    const mockOnChange = vi.fn();
    const { getByLabelText } = render(
      <ToggleButtons
        buttons={buttons}
        selectedValue="value1"
        onChange={mockOnChange}
      />,
    );

    const buttonValue = 'value2';
    const button = getByLabelText(`Pick ${buttonValue}`);
    fireEvent.click(button);

    expect(mockOnChange).toHaveBeenCalledWith(expect.anything(), buttonValue);
  });
});
