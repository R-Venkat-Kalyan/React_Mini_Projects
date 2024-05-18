import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InterestForm.css';
import { useTranslation } from 'react-i18next';

export default function InterestForm() {
  const { t } = useTranslation();
  const [interestType, setInterestType] = useState('simple');
  const [chargeType, setChargeType] = useState('rupees');
  const [chargeValue, setChargeValue] = useState('');
  const [amount, setAmount] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [compoundingFrequency, setCompoundingFrequency] = useState('monthly');
  const navigate = useNavigate();

  function handleChangeInterestType(event) {
    setInterestType(event.target.value);
    setCompoundingFrequency('monthly');
    setChargeType('rupees');
    setChargeValue('');

    if (event.target.value === 'compound') {
      alert(t('convert_interest_rate_alert'));
      setChargeType('percentage');
    }
  }

  function handleChangeChargeType(event) {
    setChargeType(event.target.value);
  }

  function handleChangeChargeValue(event) {
    setChargeValue(event.target.value);
  }

  function handleChangeAmount(event) {
    const inputValue = parseFloat(event.target.value);
    setAmount(isNaN(inputValue) ? '' : inputValue);
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

    if (!interestType || !chargeType || !chargeValue || !amount || !startDate || !endDate) {
      alert(t('mandatory'));
      return;
    }
  
    // Validate end date is after start date
    if (new Date(startDate) >= new Date(endDate)) {
      alert(t('date'));
      return;
    }
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

    navigate('/interest', {
      state: {
        calculatedInterest: interest.toFixed(2),
        interestType,
        chargeType,
        chargeValue,
        amount,
        startDate,
        endDate,
        compoundingFrequency,
        duration,
      },
    });
  }

  return (
    <div>
      <div className="container interest-container">
        <div className="interest-header">
          <h2>{t('Interest Calculator')}</h2>
        </div>
        <form className="interest-form">
          <div className="form-group">
            <label htmlFor="interestType">
              <b>{t('select_interest_type')}:</b>
            </label>
            <select className="form-control" name="interestType" value={interestType} onChange={handleChangeInterestType} required>
              <option value="simple">{t('simple_interest')}</option>
              <option value="compound">{t('compound_interest')}</option>
            </select>
          </div>
          {interestType !== 'compound' && (
            <div className="form-group">
              <label htmlFor="chargeType">
                <b>{t('select_charge_type')}:</b>
              </label>
              <select className="form-control" name="chargeType" value={chargeType} onChange={handleChangeChargeType} required>
                <option value="rupees">{t('interest_in_rupees')}</option>
                <option value="percentage">{t('interest_in_percentage')}</option>
              </select>
            </div>
          )}
          {interestType === 'compound' && (
            <div className="form-group">
              <label htmlFor="chargeValue">
                <b>{t('enter_percentage_value')}:</b>
              </label>
              <input type="text" className="form-control" placeholder={t('enter_percentage_value')} value={chargeValue} onChange={handleChangeChargeValue} required />
            </div>
          )}
          {interestType === 'compound' && (
            <div className="form-group">
              <label htmlFor="compoundingFrequency">
                <b>{t('select_compounding_frequency')}:</b>
              </label>
              <select className="form-control" name="compoundingFrequency" value={compoundingFrequency} onChange={handleChangeCompoundingFrequency} required>
                <option value="monthly">{t('monthly')}</option>
                <option value="yearly">{t('yearly')}</option>
              </select>
            </div>
          )}
          {interestType !== 'compound' && (
            <div className="form-group">
              <label htmlFor="chargeValue">
                <b>{chargeType === 'rupees' ? t('enter_rupee_value') : t('enter_percentage_value')}:</b>
              </label>
              <input type="text" className="form-control" placeholder={chargeType === 'rupees' ? t('enter_rupee_value') : t('enter_percentage_value')} value={chargeValue} onChange={handleChangeChargeValue} required />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="amount">
              <b>{t('amount')}:</b>
            </label>
            <input type="number" className="form-control" placeholder={t('enter_amount')} value={amount} onChange={handleChangeAmount} required />
          </div>
          <div className="form-group">
            <label htmlFor="startDate">
              <b>{t('select_start_date')}:</b>
            </label>
            <input type="date" className="form-control" name="startDate" value={startDate} onChange={handleChangeStartDate} required />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">
              <b>{t('select_end_date')}:</b>
            </label>
            <input type="date" className="form-control" name="endDate" value={endDate} onChange={handleChangeEndDate} required />
          </div>
          <button type="button" className="btn btn-primary" onClick={calculateInterest}>
            {t('Calculate Interest')}
          </button>
        </form>
      </div>
    </div>
  );
}
