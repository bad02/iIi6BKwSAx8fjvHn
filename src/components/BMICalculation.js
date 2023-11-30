import React, { useState } from 'react';

function BMICalculation() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBMI] = useState(null);

    const calculateBMI = () => {
        const validWeight = parseFloat(weight);
        const validHeight = parseFloat(height);

        if (!isNaN(validWeight) && !isNaN(validHeight)) {
            const calculatedBMI = validWeight / Math.pow(validHeight, 2);
            setBMI(calculatedBMI.toFixed(1));
        } else {
            setBMI(null);
        }
    };

    return (
        <div>
            <h2>BMI Calculation</h2>
            <div>
                <label>
                    Weight (kg):
                    <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Height (m):
                    <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                </label>
            </div>
            <button onClick={calculateBMI}>Calculate BMI</button>
            {bmi !== null && <p>Your BMI: {bmi}</p>}
        </div>
    );
}

export default BMICalculation;
