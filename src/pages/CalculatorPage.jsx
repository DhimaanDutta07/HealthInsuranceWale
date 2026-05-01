import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { ArrowRight } from 'lucide-react';

export default function TermInsuranceCalculator() {
    const [inputs, setInputs] = useState({
        age: 25,
        coverage: 10000000,
        term: 30,
        gender: 'male',
        tobacco: 'no',
        monthlyExpenses: 50000,
        outstandingLoans: 0
    });

    const [estimate, setEstimate] = useState(0);

    useEffect(() => {
        const baseRate = inputs.gender === 'male' ? 0.0005 : 0.00045;
        const ageMultiplier = 1 + (inputs.age - 18) * 0.07;
        const debtLoad = 1 + (inputs.outstandingLoans / 10000000);

        const annualPremium = (inputs.coverage * baseRate * ageMultiplier * debtLoad) / 10;
        setEstimate(Math.round(annualPremium / 12));
    }, [inputs]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prev => ({ ...prev, [name]: parseInt(value) || 0 }));
    };

    return (
        <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
            <Navbar />

            {/* HERO - Mobile Friendly */}
            <header style={{
                background: 'linear-gradient(135deg, #0A1F4A 0%, #1E3A8A 50%, #0F2E6B 100%)',
                color: 'white',
                padding: '3.75rem 1.25rem',
                textAlign: 'center'
            }}>
                <h1 style={{ 
                    fontFamily: "'DM Serif Display', serif", 
                    fontSize: 'clamp(2.3rem, 6.5vw, 3.6rem)', 
                    marginBottom: '0.9rem' 
                }}>
                    Human Life Value Calculator
                </h1>
                <p style={{ 
                    fontSize: '1.05rem', 
                    color: 'rgba(255,255,255,0.8)', 
                    maxWidth: 520, 
                    margin: '0 auto' 
                }}>
                    Go beyond basic estimates. Factor in your lifestyle and liabilities for a precision quote.
                </p>
            </header>

            <main style={{ maxWidth: 1100, margin: '-3rem auto 4rem', padding: '0 1.25rem' }}>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '1.75rem' 
                }}>

                    {/* LEFT: INPUTS */}
                    <div style={{
                        background: 'white',
                        borderRadius: 20,
                        padding: '2.25rem 1.85rem',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 12px 35px rgba(15,37,87,0.05)'
                    }}>
                        <h3 style={{ marginBottom: '1.75rem', color: '#0A1F4A', fontSize: '1.3rem' }}>Financial Details</h3>

                        {/* Monthly Expenses */}
                        <div style={{ marginBottom: '1.75rem' }}>
                            <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, color: '#0A1F4A', marginBottom: '0.45rem' }}>
                                Monthly Household Expenses <span>₹{inputs.monthlyExpenses.toLocaleString()}</span>
                            </label>
                            <p style={{ fontSize: '0.82rem', color: '#64748b', marginBottom: '0.7rem', lineHeight: 1.5 }}>
                                Include groceries, rent/EMI, school fees, and utility bills.
                            </p>
                            <input
                                type="number"
                                name="monthlyExpenses"
                                value={inputs.monthlyExpenses}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '12px 15px', borderRadius: 11, border: '1px solid #e2e8f0', fontSize: '1rem' }}
                            />
                        </div>

                        {/* Outstanding Loans */}
                        <div style={{ marginBottom: '1.75rem' }}>
                            <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, color: '#0A1F4A', marginBottom: '0.45rem' }}>
                                Total Outstanding Loans <span>₹{inputs.outstandingLoans.toLocaleString()}</span>
                            </label>
                            <p style={{ fontSize: '0.82rem', color: '#64748b', marginBottom: '0.7rem', lineHeight: 1.5 }}>
                                Home loans, car loans, or personal debts.
                            </p>
                            <input
                                type="number"
                                name="outstandingLoans"
                                value={inputs.outstandingLoans}
                                onChange={handleChange}
                                placeholder="e.g. 5000000"
                                style={{ width: '100%', padding: '12px 15px', borderRadius: 11, border: '1px solid #e2e8f0', fontSize: '1rem' }}
                            />
                        </div>

                        <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '1.75rem 0' }} />

                        {/* Coverage Slider */}
                        <div style={{ marginBottom: '1.75rem' }}>
                            <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, color: '#0A1F4A', marginBottom: '0.45rem' }}>
                                Life Cover Amount <span>₹ {(inputs.coverage / 10000000).toFixed(1)} Cr</span>
                            </label>
                            <input
                                type="range" name="coverage" min="2500000" max="50000000" step="500000"
                                value={inputs.coverage} onChange={handleChange}
                                style={{ width: '100%', accentColor: '#10B981' }}
                            />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.1rem' }}>
                            <div>
                                <label style={{ fontWeight: 600, color: '#0A1F4A', marginBottom: '0.45rem', display: 'block' }}>Current Age</label>
                                <input type="number" name="age" value={inputs.age} onChange={handleChange} style={{ width: '100%', padding: '12px 15px', borderRadius: 11, border: '1px solid #e2e8f0', fontSize: '1rem' }} />
                            </div>
                            <div>
                                <label style={{ fontWeight: 600, color: '#0A1F4A', marginBottom: '0.45rem', display: 'block' }}>Tobacco?</label>
                                <select name="tobacco" value={inputs.tobacco} onChange={handleChange} style={{ width: '100%', padding: '12px 15px', borderRadius: 11, border: '1px solid #e2e8f0', fontSize: '1rem' }}>
                                    <option value="no">Non-Smoker</option>
                                    <option value="yes">Smoker</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: RESULTS */}
                    <div style={{
                        background: 'linear-gradient(135deg, #0A1F4A 0%, #1E3A8A 100%)',
                        color: 'white',
                        borderRadius: 22,
                        padding: '2.25rem 1.85rem',
                        position: 'sticky',
                        top: '90px',
                        height: 'fit-content',
                        boxShadow: '0 18px 50px rgba(15,37,87,0.12)'
                    }}>
                        <p style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.75rem', opacity: 0.7, marginBottom: '0.65rem' }}>
                            ESTIMATED MONTHLY PREMIUM
                        </p>
                        <h2 style={{ fontSize: '3.3rem', margin: '0.6rem 0', fontFamily: "'DM Serif Display', serif" }}>
                            ₹{estimate.toLocaleString()}*
                        </h2>

                        <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1.45rem', borderRadius: 14, marginTop: '1.3rem', marginBottom: '1.85rem' }}>
                            <p style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.55rem', color: '#10B981' }}>Why this amount?</p>
                            <p style={{ fontSize: '0.85rem', opacity: 0.85, lineHeight: 1.55 }}>
                                Based on your <strong>₹{inputs.outstandingLoans.toLocaleString()}</strong> in debt and <strong>₹{inputs.monthlyExpenses.toLocaleString()}</strong> monthly spend,
                                a cover of <strong>₹{(inputs.coverage / 10000000).toFixed(1)} Cr</strong> is recommended for 100% debt-freedom for your family.
                            </p>
                        </div>

                        <button style={{
                            width: '100%',
                            padding: '15px',
                            borderRadius: 12,
                            border: 'none',
                            background: '#10B981',
                            color: 'white',
                            fontWeight: 700,
                            fontSize: '1rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 9
                        }}>
                            Book a Consultation <ArrowRight className="w-5 h-5" />
                        </button>

                        <p style={{ fontSize: '0.72rem', opacity: 0.55, marginTop: '1.1rem', textAlign: 'center' }}>
                            *Estimate only. Final premium may vary.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}