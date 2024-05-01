import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './InterestForm.css';

export default function InterestForm() {
    const [interestType, setInterestType] = useState('simple');
    const [chargeType, setChargeType] = useState('rupees');
    const [chargeValue, setChargeValue] = useState('');
    const [amount, setAmount] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [compoundingFrequency, setCompoundingFrequency] = useState('monthly');
    const [calculatedInterest, setCalculatedInterest] = useState(null);

    function handleChangeInterestType(event) {
        setInterestType(event.target.value);
        // Reset compounding frequency when switching interest type
        setCompoundingFrequency('monthly');
        // Reset charge type and value when switching interest type
        setChargeType('rupees');
        setChargeValue('');
    }

    function handleChangeChargeValue(event) {
        setChargeValue(event.target.value);
    }

    function handleChangeAmount(event) {
        setAmount(event.target.value);
    }

    function handleChangeStartDate(event) {
        setStartDate(event.target.value);
    }

    function handleChangeEndDate(event) {
        setEndDate(event.target.value);
    }

    function handleChangeCompoundingFrequency(event) {
        setCompoundingFrequency(event.target.value);
    }

    function calculateInterest() {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const duration = (end - start) / (1000 * 3600 * 24); // Duration in days
    
        let interest = 0;
        if (interestType === 'simple') {
            if (chargeType === 'rupees') {
                const monthlyInterest = (parseFloat(chargeValue) * 12) / 100; // Convert rupee charge value to monthly interest
                interest = (monthlyInterest * parseFloat(amount)) * (duration / 365);
            } else if (chargeType === 'percentage') {
                interest = (parseFloat(amount) * parseFloat(chargeValue) * duration) / (365 * 100);
            }
        } else if (interestType === 'compound') {
            const r = parseFloat(chargeValue) / 100; // Annual interest rate
            const n = compoundingFrequency === 'monthly' ? 12 : 1; // Compounding frequency
            const t = duration / 365; // Time in years
            interest = parseFloat(amount) * Math.pow(1 + r / n, n * t) - parseFloat(amount); // Compound interest formula
        }
    
        setCalculatedInterest(interest.toFixed(2));
    }
    
    
    return (
        <div>
            <div className="container todo-container">
                <div className="todo-header">
                    <h2>Interest Calculator</h2>
                </div>
                <form method="post" className="todo-form">
                    <div className="form-group">
                        <label htmlFor="interestType"><b>Select Interest Type:</b></label>
                        <select className="form-control" name="interestType" value={interestType} onChange={handleChangeInterestType} required>
                            <option value="simple">Simple Interest</option>
                            <option value="compound">Compound Interest</option>
                        </select>
                    </div>
                    {interestType !== 'compound' && (
                        <div className="form-group">
                            <label htmlFor="chargeType"><b>Select Charge Type:</b></label>
                            <select className="form-control" name="chargeType" value={chargeType} onChange={() => {}} required>
                                <option value="rupees">Interest In Rupees: 1.5 Rupees, 2 Rupees</option>
                                <option value="percentage">Interest In Percentage: 10 Percent, 15 Percent</option>
                            </select>
                        </div>
                    )}
                    {interestType !== 'compound' && (
                        <div className="form-group">
                            <label htmlFor="chargeValue"><b>{chargeType === 'rupees' ? 'Enter Rupee Value:' : 'Enter Percentage Value:'}</b></label>
                            <input type="text" className="form-control" placeholder={`Enter ${chargeType === 'rupees' ? 'rupee' : 'percentage'} value`} value={chargeValue} onChange={handleChangeChargeValue} required />
                        </div>
                    )}
                    <div className="form-group">
                        <label htmlFor="amount"><b>Amount:</b></label>
                        <input type="number" className="form-control" placeholder="Enter amount" value={amount} onChange={handleChangeAmount} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="startDate"><b>Select Start Date:</b></label>
                        <input type="date" className="form-control" name="startDate" value={startDate} onChange={handleChangeStartDate} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="endDate"><b>Select End Date:</b></label>
                        <input type="date" className="form-control" name="endDate" value={endDate} onChange={handleChangeEndDate} required />
                    </div>
                    {interestType === 'compound' && (
                        <div className="form-group">
                            <label htmlFor="chargeValue"><b>Enter Percentage Value:</b></label>
                            <input type="text" className="form-control" placeholder="Enter percentage value" value={chargeValue} onChange={handleChangeChargeValue} required />
                        </div>
                    )}
                    {interestType === 'compound' && (
                        <div className="form-group">
                            <label htmlFor="compoundingFrequency"><b>Select Compounding Frequency:</b></label>
                            <select className="form-control" name="compoundingFrequency" value={compoundingFrequency} onChange={handleChangeCompoundingFrequency} required>
                                <option value="monthly">Monthly</option>
                                <option value="yearly">Yearly</option>
                            </select>
                        </div>
                    )}
                    <Link type="button" className="btn btn-primary" onClick={calculateInterest} to="">Calculate Interest</Link>
                    {calculatedInterest !== null && <p><b>Calculated Interest:</b> {calculatedInterest}</p>}
                </form>
            </div>
        </div>
    );
}
