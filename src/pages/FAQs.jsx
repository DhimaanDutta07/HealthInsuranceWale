import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WAFloat from '../components/WAFloat';
import useAuthStore from '../store/auth.store';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const { isLoggedIn } = useAuthStore();
  const location = useLocation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { id: "what-is", q: "What is Health Insurance?", a: "Health insurance is a financial cover that pays for your medical expenses such as hospitalization, surgeries, and treatments. In India, claims are settled either through cashless (direct hospital payment) or reimbursement (you pay first, insurer reimburses later)." },
    { id: "coverage", q: "How Much Coverage Do I Need?", a: "For most individuals, ₹10–25 lakh coverage is recommended. In metro cities, higher coverage (₹50 lakh+) is advisable due to rising medical costs." },
    { id: "checklist", q: "Health Insurance Checklist", a: "Before buying, check: Coverage amount, Waiting periods, Room rent limits, Network hospitals, Claim settlement ratio, and Pre-existing disease coverage." },
    { id: "best-plans", q: "Best Health Plans 2026", a: "Top plans in 2026 focus on high claim settlement ratio, cashless network, and coverage for modern treatments like robotic surgery and gene therapy." },
    { id: "family", q: "Health Insurance for Family", a: "Family floater plans cover multiple members under one policy with a shared sum insured. Ideal for couples and small families." },
    { id: "pre-existing", q: "Pre-existing Disease Coverage", a: "Yes, you can buy health insurance with pre-existing diseases, but most insurers apply a waiting period of 2–4 years. Proper disclosure is very important." },
    { id: "senior", q: "Best Plans for Senior Citizens", a: "Senior citizen plans should have lower waiting periods, higher claim reliability, and good coverage for pre-existing conditions and day-care procedures." },
    { id: "cashless", q: "Cashless Claim Process", a: "In a cashless claim, the hospital directly coordinates with the insurer. You just need to present your health card and get pre-authorization approved before treatment." },
    { id: "rejection", q: "Claim Rejection Guide", a: "Common reasons for rejection include non-disclosure of medical history, policy exclusions, incorrect documentation, and waiting period violations. Proper guidance can help recover rejected claims." },
    { id: "cashless-vs-reimbursement", q: "Cashless vs Reimbursement", a: "Cashless: Hospital bills insurer directly. Reimbursement: You pay first and claim money back later. Cashless is faster and more convenient." },
    { id: "waiting-period", q: "What is Waiting Period in Health Insurance?", a: "Waiting period is the time during which certain illnesses or conditions are not covered. It mainly applies to pre-existing diseases and specific treatments like maternity." },
    { id: "claim-help", q: "Do you help with health insurance claims?", a: "Yes, we provide end-to-end claim assistance including documentation, hospital coordination, and insurer follow-ups until your claim is settled." },
    { id: "why-us", q: "Why choose HealthInsuranceWale?", a: "Because we focus on what truly matters — claim experience. We guide you before purchase and support you during claims. No sales pressure, only honest advice." }
  ];

  // Auto open + scroll when coming from navbar
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const index = faqs.findIndex(faq => faq.id === id);
      
      if (index !== -1) {
        setOpenIndex(index);
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 400);
      }
    }
  }, [location]);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />

      {/* HERO - Mobile Friendly */}
      <section style={{
        background: 'linear-gradient(135deg, #0A1F4A 0%, #1E3A8A 50%, #0F2E6B 100%)',
        minHeight: '68vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: '2.5rem 1rem'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.2)', color: 'white',
            fontSize: '0.75rem', fontWeight: 700, padding: '8px 20px', borderRadius: 9999, marginBottom: '1.5rem'
          }}>
            <span style={{ width: 8, height: 8, background: '#10B981', borderRadius: '50%', animation: 'pulse 2s infinite' }}></span>
            CLEAR ANSWERS • CLAIM-FOCUSED
          </div>

          <h1 style={{ 
            fontFamily: "'DM Serif Display', serif", 
            fontSize: 'clamp(2.6rem, 7vw, 4.5rem)', 
            lineHeight: 1.05, 
            color: 'white', 
            marginBottom: '1.25rem' 
          }}>
            Frequently Asked Questions
          </h1>

          <p style={{ 
            fontSize: '1.15rem', 
            color: 'rgba(255,255,255,0.78)', 
            maxWidth: 580, 
            margin: '0 auto', 
            lineHeight: 1.6 
          }}>
            Everything you need to know about health insurance — explained simply and honestly.
          </p>
        </div>
      </section>

      {/* FAQ LIST - Mobile Friendly */}
      <section style={{ background: '#F8FAFC', padding: '4rem 1rem' }}>
        <div className="max-w-5xl mx-auto">
          <div style={{ maxWidth: 920, margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <div 
                key={index}
                id={faq.id}
                style={{
                  background: 'white',
                  marginBottom: '1.1rem',
                  borderRadius: 18,
                  border: '1px solid #e2e8f0',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(15,37,87,0.05)'
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    padding: '1.5rem 1.75rem',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '1.02rem',
                    fontWeight: 600,
                    color: '#0A1F4A',
                    cursor: 'pointer'
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown 
                    className="w-5 h-5" 
                    style={{ 
                      transition: 'transform 0.3s ease',
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                    }} 
                  />
                </button>

                <div style={{
                  maxHeight: openIndex === index ? '600px' : '0',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  padding: openIndex === index ? '0 1.75rem 1.6rem' : '0 1.75rem'
                }}>
                  <p style={{ 
                    color: '#334155', 
                    lineHeight: 1.7, 
                    fontSize: '0.98rem' 
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA - Mobile Friendly */}
          <div style={{
            marginTop: '4.5rem',
            background: 'linear-gradient(135deg, #0A1F4A, #1E3A8A)',
            borderRadius: 22,
            padding: '3rem 1.75rem',
            textAlign: 'center',
            color: 'white'
          }}>
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.95rem', marginBottom: '1rem' }}>
              Still have questions?
            </h3>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)', maxWidth: 480, margin: '0 auto 2rem' }}>
              Speak directly with our claim-focused advisors. No sales pitch — only clear guidance.
            </p>
            <button style={{
              background: 'white',
              color: '#0A1F4A',
              padding: '14px 36px',
              borderRadius: 9999,
              fontSize: '1rem',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer'
            }}>
              Talk to an Advisor →
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <WAFloat />
    </>
  );
}