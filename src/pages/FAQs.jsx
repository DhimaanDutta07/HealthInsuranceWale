import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WAFloat from '../components/WAFloat';
import useAuthStore from '../store/auth.store';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const { isLoggedIn } = useAuthStore();
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    setTimeout(() => {
      document.querySelectorAll('[data-anim]').forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, []);

  const categories = ['All', 'Basics', 'Policy Selection', 'Claim Process', 'Advanced', 'Trust'];

  const faqs = [
    {
      category: "Basics",
      q: "What is health insurance and how does it work in India?",
      a: "Health insurance is a financial cover that pays for your medical expenses such as hospitalization, surgeries, and treatments. In India, claims are settled either through cashless (direct hospital payment) or reimbursement (you pay first, insurer reimburses later)."
    },
    {
      category: "Basics",
      q: "Which is the best health insurance plan in India?",
      a: "There is no single “best” plan for everyone. The right policy depends on your age, health condition, city, and future needs. A good plan should offer strong claim support, adequate coverage, and fewer restrictions."
    },
    {
      category: "Basics",
      q: "How much health insurance coverage do I need in India?",
      a: "For most individuals, ₹10–25 lakh coverage is recommended. In metro cities, higher coverage is advisable due to rising medical costs."
    },
    {
      category: "Policy Selection",
      q: "What should I check before buying health insurance?",
      a: "Before buying, check: Coverage amount, Waiting periods, Room rent limits, Network hospitals, and Claim settlement experience."
    },
    {
      category: "Policy Selection",
      q: "What is waiting period in health insurance?",
      a: "Waiting period is the time during which certain illnesses or conditions are not covered. It mainly applies to pre-existing diseases and specific treatments."
    },
    {
      category: "Policy Selection",
      q: "Can I buy health insurance with pre-existing diseases?",
      a: "Yes, but insurers may apply a waiting period (usually 2–4 years). Proper disclosure is important to avoid claim issues later."
    },
    {
      category: "Claim Process",
      q: "How does cashless health insurance claim work?",
      a: "In a cashless claim, the hospital directly coordinates with the insurer. You need to present your health card and get pre-authorization approved."
    },
    {
      category: "Claim Process",
      q: "What is reimbursement claim in health insurance?",
      a: "In reimbursement, you pay the hospital bills first and later submit documents to the insurer for repayment."
    },
    {
      category: "Claim Process",
      q: "Why do health insurance claims get rejected?",
      a: "Common reasons include: Non-disclosure of medical history, Policy exclusions, Incorrect or incomplete documentation, and Waiting period conditions."
    },
    {
      category: "Claim Process",
      q: "What to do if health insurance claim is rejected?",
      a: "First, understand the reason for rejection. You can re-submit with correct documents, raise a grievance with insurer, or escalate if required. Proper guidance can significantly improve outcomes."
    },
    {
      category: "Advanced",
      q: "Is corporate health insurance enough in India?",
      a: "No, corporate policies are limited and may not cover you after job change. A personal policy ensures long-term security."
    },
    {
      category: "Advanced",
      q: "What is policy portability in health insurance?",
      a: "Portability allows you to switch insurers while retaining benefits like waiting period credits."
    },
    {
      category: "Advanced",
      q: "Which health insurance is best for senior citizens?",
      a: "Senior citizen plans should focus on lower waiting periods, higher claim reliability, and coverage for pre-existing conditions."
    },
    {
      category: "Trust",
      q: "Do you help with health insurance claims?",
      a: "Yes, we provide end-to-end claim assistance, including documentation, hospital coordination, and insurer follow-ups."
    },
    {
      category: "Trust",
      q: "Why choose HealthInsuranceWale for health insurance advice?",
      a: "Because we focus on what truly matters—claim experience. We guide you before purchase and support you during claims."
    }
  ];

  const filteredFaqs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #0A1F4A 0%, #1E3A8A 50%, #0F2E6B 100%)',
        minHeight: '68vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.2)', color: 'white',
            fontSize: '0.75rem', fontWeight: 700, padding: '8px 22px', borderRadius: 9999, marginBottom: '1.75rem'
          }}>
            <span style={{ width: 8, height: 8, background: '#10B981', borderRadius: '50%', animation: 'pulse 2s infinite' }}></span>
            CLEAR ANSWERS • CLAIM-FOCUSED
          </div>

          <h1 style={{ 
            fontFamily: "'DM Serif Display', serif", 
            fontSize: 'clamp(3rem, 6vw, 4.8rem)', 
            lineHeight: 1.02, 
            color: 'white', 
            marginBottom: '1.35rem' 
          }}>
            Frequently Asked Questions
          </h1>

          <p style={{ 
            fontSize: '1.25rem', 
            color: 'rgba(255,255,255,0.78)', 
            maxWidth: 640, 
            margin: '0 auto', 
            lineHeight: 1.65 
          }}>
            Everything you need to know about health insurance — explained simply and honestly.
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ background: '#F8FAFC', padding: '5.5rem 0' }}>
        <div className="max-w-5xl mx-auto px-6">

          {/* Category Filter */}
          <div data-anim style={{ marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '12px 28px',
                    borderRadius: 9999,
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    background: activeCategory === cat ? '#0A1F4A' : 'white',
                    color: activeCategory === cat ? 'white' : '#334155',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div style={{ maxWidth: 920, margin: '0 auto' }}>
            {filteredFaqs.map((faq, index) => (
              <div 
                key={index}
                data-anim
                style={{
                  background: 'white',
                  marginBottom: '1.25rem',
                  borderRadius: 20,
                  border: '1px solid #e2e8f0',
                  overflow: 'hidden',
                  boxShadow: '0 12px 35px rgba(15,37,87,0.06)'
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    padding: '1.7rem 2.25rem',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '1.1rem',
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
                  padding: openIndex === index ? '0 2.25rem 1.85rem' : '0 2.25rem'
                }}>
                  <p style={{ 
                    color: '#334155', 
                    lineHeight: 1.75, 
                    fontSize: '1.02rem' 
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions CTA */}
          <div data-anim style={{
            marginTop: '5.5rem',
            background: 'linear-gradient(135deg, #0A1F4A, #1E3A8A)',
            borderRadius: 24,
            padding: '3.75rem 2.5rem',
            textAlign: 'center',
            color: 'white'
          }}>
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '2.1rem', marginBottom: '1rem' }}>
              Still have questions?
            </h3>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', maxWidth: 520, margin: '0 auto 2.25rem' }}>
              Speak directly with our claim-focused advisors. No sales pitch — only clear guidance.
            </p>
            <button style={{
              background: 'white',
              color: '#0A1F4A',
              padding: '16px 44px',
              borderRadius: 9999,
              fontSize: '1.1rem',
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