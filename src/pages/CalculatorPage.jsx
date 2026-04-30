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

            {/* HERO */}
            <header style={{
                background: 'linear-gradient(135deg, #0A1F4A 0%, #1E3A8A 50%, #0F2E6B 100%)',
                color: 'white',
                padding: '4.5rem 2rem',
                textAlign: 'center'
            }}>
                <h1 style={{ 
                    fontFamily: "'DM Serif Display', serif", 
                    fontSize: 'clamp(2.6rem, 5.5vw, 3.8rem)', 
                    marginBottom: '1rem' 
                }}>
                    Human Life Value Calculator
                </h1>
                <p style={{ 
                    fontSize: '1.2rem', 
                    color: 'rgba(255,255,255,0.8)', 
                    maxWidth: 620, 
                    margin: '0 auto' 
                }}>
                    Go beyond basic estimates. Factor in your lifestyle and liabilities for a precision quote.
                </p>
            </header>

            <main style={{ maxWidth: 1180, margin: '-3.5rem auto 4rem', padding: '0 2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>

                    {/* LEFT: INPUTS */}
                    <div style={{
                        background: 'white',
                        borderRadius: 24,
                        padding: '2.75rem',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 15px 40px rgba(15,37,87,0.06)'
                    }}>
                        <h3 style={{ marginBottom: '2rem', color: '#0A1F4A', fontSize: '1.45rem' }}>Financial Details</h3>

                        {/* Monthly Expenses */}
                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, color: '#0A1F4A', marginBottom: '0.5rem' }}>
                                Monthly Household Expenses <span>₹{inputs.monthlyExpenses.toLocaleString()}</span>
                            </label>
                            <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.8rem', lineHeight: 1.5 }}>
                                Include groceries, rent/EMI, school fees, and utility bills.
                            </p>
                            <input
                                type="number"
                                name="monthlyExpenses"
                                value={inputs.monthlyExpenses}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '13px 16px', borderRadius: 12, border: '1px solid #e2e8f0', fontSize: '1rem' }}
                            />
                        </div>

                        {/* Outstanding Loans */}
                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, color: '#0A1F4A', marginBottom: '0.5rem' }}>
                                Total Outstanding Loans <span>₹{inputs.outstandingLoans.toLocaleString()}</span>
                            </label>
                            <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.8rem', lineHeight: 1.5 }}>
                                Home loans, car loans, or personal debts.
                            </p>
                            <input
                                type="number"
                                name="outstandingLoans"
                                value={inputs.outstandingLoans}
                                onChange={handleChange}
                                placeholder="e.g. 5000000"
                                style={{ width: '100%', padding: '13px 16px', borderRadius: 12, border: '1px solid #e2e8f0', fontSize: '1rem' }}
                            />
                        </div>

                        <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '2rem 0' }} />

                        {/* Coverage Slider */}
                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, color: '#0A1F4A', marginBottom: '0.5rem' }}>
                                Life Cover Amount <span>₹ {(inputs.coverage / 10000000).toFixed(1)} Cr</span>
                            </label>
                            <input
                                type="range" name="coverage" min="2500000" max="50000000" step="500000"
                                value={inputs.coverage} onChange={handleChange}
                                style={{ width: '100%', accentColor: '#10B981' }}
                            />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                            <div>
                                <label style={{ fontWeight: 600, color: '#0A1F4A', marginBottom: '0.5rem', display: 'block' }}>Current Age</label>
                                <input type="number" name="age" value={inputs.age} onChange={handleChange} style={{ width: '100%', padding: '13px 16px', borderRadius: 12, border: '1px solid #e2e8f0', fontSize: '1rem' }} />
                            </div>
                            <div>
                                <label style={{ fontWeight: 600, color: '#0A1F4A', marginBottom: '0.5rem', display: 'block' }}>Tobacco?</label>
                                <select name="tobacco" value={inputs.tobacco} onChange={handleChange} style={{ width: '100%', padding: '13px 16px', borderRadius: 12, border: '1px solid #e2e8f0', fontSize: '1rem' }}>
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
                        borderRadius: 24,
                        padding: '2.75rem',
                        position: 'sticky',
                        top: '100px',
                        height: 'fit-content',
                        boxShadow: '0 20px 60px rgba(15,37,87,0.15)'
                    }}>
                        <p style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', opacity: 0.7, marginBottom: '0.75rem' }}>
                            ESTIMATED MONTHLY PREMIUM
                        </p>
                        <h2 style={{ fontSize: '3.6rem', margin: '0.75rem 0', fontFamily: "'DM Serif Display', serif" }}>
                            ₹{estimate.toLocaleString()}*
                        </h2>

                        <div style={{ background: 'rgba(255,255,255,0.08)', padding: '1.65rem', borderRadius: 16, marginTop: '1.5rem', marginBottom: '2rem' }}>
                            <p style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.65rem', color: '#10B981' }}>Why this amount?</p>
                            <p style={{ fontSize: '0.9rem', opacity: 0.85, lineHeight: 1.6 }}>
                                Based on your <strong>₹{inputs.outstandingLoans.toLocaleString()}</strong> in debt and <strong>₹{inputs.monthlyExpenses.toLocaleString()}</strong> monthly spend,
                                a cover of <strong>₹{(inputs.coverage / 10000000).toFixed(1)} Cr</strong> is recommended for 100% debt-freedom for your family.
                            </p>
                        </div>

                        <button style={{
                            width: '100%',
                            padding: '17px',
                            borderRadius: 14,
                            border: 'none',
                            background: '#10B981',
                            color: 'white',
                            fontWeight: 700,
                            fontSize: '1.05rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 10
                        }}>
                            Book a Consultation <ArrowRight className="w-5 h-5" />
                        </button>

                        <p style={{ fontSize: '0.75rem', opacity: 0.6, marginTop: '1.25rem', textAlign: 'center' }}>
                            *Estimate only. Final premium may vary.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}