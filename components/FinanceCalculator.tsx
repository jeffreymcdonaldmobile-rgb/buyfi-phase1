import React, { useState } from 'react';

interface Props {
  price: number;
}

export default function FinanceCalculator({ price }: Props) {
  const [loanAmount, setLoanAmount] = useState(price * 0.9); // 10% deposit
  const [rate, setRate] = useState(7.5);
  const [term, setTerm] = useState(4); // years
  const monthlyRate = rate / 100 / 12;
  const months = term * 12;
  const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  const weeklyPayment = payment / 4.333; // Approx weeks per month

  return (
    <div className="mt-6 p-4 bg-gray-200 rounded">
      <h2 className="text-xl font-bold mb-4">Estimate Your Repayments</h2>
      <label>Loan Amount: <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} /></label>
      <label>Interest Rate (%): <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} step="0.1" /></label>
      <label>Term (years): <input type="number" value={term} onChange={(e) => setTerm(Number(e.target.value))} /></label>
      <p className="mt-4 text-lg">Estimated Weekly: ${weeklyPayment.toFixed(2)}</p>
      <p className="text-sm text-gray-600">*Estimate only. Actual rates vary.</p>
    </div>
  );
}