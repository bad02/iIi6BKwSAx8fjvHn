import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BMICalculation from './components/BMICalculation';

describe('BMICalculation component', () => {
  test('calculates BMI correctly and displays message', () => {
    render(<BMICalculation />);

    // Input valid weight and height
    fireEvent.change(screen.getByLabelText('Weight (kg):'), { target: { value: '70' } });
    fireEvent.change(screen.getByLabelText('Height (m):'), { target: { value: '1.75' } });

    fireEvent.click(screen.getByText('Calculate BMI'));

    // Check if BMI is calculated correctly
    expect(screen.getByText('Your BMI: 22.9')).toBeInTheDocument();

    // Check if BMI message is correct
    expect(screen.getByText('You are Normal weight')).toBeInTheDocument();
  });

  test('handles invalid input and displays error message', () => {
    render(<BMICalculation />);

    // Input invalid weight
    fireEvent.change(screen.getByLabelText('Weight (kg):'), { target: { value: 'abc' } });
    fireEvent.change(screen.getByLabelText('Height (m):'), { target: { value: '1.75' } });

    fireEvent.click(screen.getByText('Calculate BMI'));

    // Check if error message is displayed
    expect(screen.getByText('Please enter valid weight (1.0-300.0 kg) and height (0.1-3.0 m).')).toBeInTheDocument();

    // Check if BMI and BMI message are cleared
    expect(screen.queryByText('Your BMI:')).not.toBeInTheDocument();
    expect(screen.queryByText(/You are/)).not.toBeInTheDocument();

  });
});
