import React, { useState } from 'react';

function BMICalculation() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBMI] = useState(null);
    const [error, setError] = useState(null);
    const [bmiMessage, setBmiMessage] = useState(''); 

    const calculateBMI = () => {
        const validWeight = parseFloat(weight);
        const validHeight = parseFloat(height);

        if (
            isNaN(validWeight) ||
            isNaN(validHeight) ||
            validWeight < 1.0 || validWeight > 300.0 ||
            validHeight < 0.1 || validHeight > 3.0
        ) {
            setError('Please enter valid weight (1.0-300.0 kg) and height (0.1-3.0 m).');
            setBMI(null);
            return;
        }

        const calculatedBMI = validWeight / Math.pow(validHeight, 2);

        if (isNaN(calculatedBMI) || calculatedBMI <= 0) {
            setError('Invalid input. Please check your weight and height.');
            setBMI(null);
            return;
        }

        setError(null);
        setBMI(calculatedBMI.toFixed(1));
         // Set BMI message based on calculated BMI
         let message = '';
         if (calculatedBMI < 18.5) {
             message = 'You are Underweight';
         } else if (calculatedBMI >= 18.5 && calculatedBMI < 25) {
             message = 'You are Normal weight';
         } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
             message = 'You are Overweight';
         } else {
             message = 'You are Obese';
         }
         setBmiMessage(message);
    };

    return (
        <div>
            <h2>BMI Calculation</h2>
            <div>
                <label>
                    Weight (kg):
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        min="1.0"
                        max="300.0"
                        step="0.1"
                    />
                </label>
            </div>
            <div>
                <label>
                    Height (m):
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        min="0.1"
                        max="3.0"
                        step="0.01"
                    />
                </label>
            </div>
            <button onClick={calculateBMI}>Calculate BMI</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {bmi !== null && <p>Your BMI: {bmi}</p>}
            {bmiMessage && <p>{bmiMessage}</p>}
        </div>
    );
}

export default BMICalculation;
