import React from 'react';

export default function InterestDetails(props) {
    const { location } = props;
    const { state } = location || {}; // Destructure state from location or set it to an empty object if location is undefined

    // Destructure required properties from state or set default values
    const { principalAmount, rate, type, startDate, endDate, duration, totalInterest, totalAmount } = state || {};

    return (
        <div>
            <h2>Interest Details</h2>
            <p><strong>Principal Amount:</strong> {principalAmount}</p>
            <p><strong>Rate:</strong> {rate}%</p>
            <p><strong>Type:</strong> {type}</p>
            <p><strong>Start Date:</strong> {startDate}</p>
            <p><strong>End Date:</strong> {endDate}</p>
            <p><strong>Total Duration:</strong> {duration} days</p>
            <p><strong>Total Interest:</strong> {totalInterest}</p>
            <p><strong>Total Amount:</strong> {totalAmount}</p>
        </div>
    );
}
