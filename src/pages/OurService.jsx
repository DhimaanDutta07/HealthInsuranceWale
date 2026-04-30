import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WAFloat from '../components/WAFloat';
import useAuthStore from '../store/auth.store';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const { isLoggedIn } = useAuthStore();

  const services = [
    {
      id: 1,
      title: "New Policy Advisory",
      color: "#10B981",
      description: "Choosing the right health insurance is not about picking a company — it’s about selecting a policy that actually works at claim time.",
      points: [
        "Clear comparison of top plans",
        "Coverage recommendation based on your profile",
        "Claim-focused selection"
      ],
      cta: "Talk to an Expert"
    },
    {
      id: 2,
      title: "Policy Portability",
      color: "#3B82F6",
      description: "If your current policy isn’t delivering value, you don’t have to stay stuck. We help you switch to a better insurer while retaining your benefits.",
      points: [
        "Continuity of waiting periods",
        "Better coverage options",
        "Improved claim experience"
      ],
      cta: "Explore Better Options"
    },
    {
      id: 3,
      title: "Claim Assistance",
      color: "#E8001C",
      description: "Health insurance matters most during a claim. We provide end-to-end support so you’re not left dealing with hospitals and insurers alone.",
      points: [
        "Pre-claim guidance",
        "Hospital coordination",
        "Documentation support",
        "Insurer follow-ups",
        "Reimbursement assistance"
      ],
      cta: "Get Claim Support",
      highlight: true
    },
    {
      id: 4,
      title: "Family & Senior Planning",
      color: "#8B5CF6",
      description: "Health insurance needs vary across age and family structure. We help you plan coverage that protects both your family and your parents effectively.",
      points: [
        "Age-specific recommendations",
        "Higher coverage structuring",
        "Long-term claim readiness"
      ],
      cta: "Plan Your Coverage"
    },
    {
      id: 5,
      title: "Corporate / Group Health Advisory",
      color: "#334155",
      description: "Design structured health insurance solutions for your team with better coverage and smoother claim handling.",
      points: [
        "Custom group policy design",
        "Employee wellness integration",
        "Dedicated claim support for teams"
      ],
      cta: "Talk to B2B Team"
    }
  ];

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #0A1F4A 0%, #1E3A8A 50%, #0F2E6B 100%)',
        minHeight: '65vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
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
            fontSize: '0.75rem', fontWeight: 700, padding: '8px 22px', borderRadius: 9999, marginBottom: '1.5rem'
          }}>
            OUR SERVICES
          </div>

          <h1 style={{ 
            fontFamily: "'DM Serif Display', serif", 
            fontSize: 'clamp(3rem, 6vw, 4.8rem)', 
            lineHeight: 1.02, 
            color: 'white', 
            marginBottom: '1.35rem' 
          }}>
            Services Built Around<br />Real Claim Outcomes
          </h1>

          <p style={{ 
            fontSize: '1.25rem', 
            color: 'rgba(255,255,255,0.78)', 
            maxWidth: 620, 
            margin: '0 auto' 
          }}>
            From policy selection to claim settlement — we support you at every stage.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ background: '#F8FAFC', padding: '5.5rem 0' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {services.map((service) => (
              <div 
                key={service.id}
                style={{
                  background: 'white',
                  borderRadius: 22,
                  padding: '2.5rem',
                  border: service.highlight ? '2px solid #E8001C' : '1px solid #e2e8f0',
                  boxShadow: service.highlight 
                    ? '0 25px 70px rgba(232, 0, 28, 0.12)' 
                    : '0 15px 45px rgba(15,37,87,0.06)',
                  position: 'relative',
                  transition: 'all 0.3s ease'
                }}
              >
                {service.highlight && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '24px',
                    background: '#E8001C',
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '4px 14px',
                    borderRadius: 50
                  }}>
                    MOST IMPORTANT
                  </div>
                )}

                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  background: service.color, 
                  borderRadius: 12, 
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem'
                }}>
                  {service.id === 1 && '🟢'}
                  {service.id === 2 && '🔵'}
                  {service.id === 3 && '🔴'}
                  {service.id === 4 && '🟣'}
                  {service.id === 5 && '⚫'}
                </div>

                <h3 style={{ fontSize: '1.45rem', color: '#0A1F4A', marginBottom: '1rem', fontWeight: 700 }}>
                  {service.title}
                </h3>

                <p style={{ color: '#64748b', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {service.description}
                </p>

                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.75rem' }}>
                    WHAT YOU GET:
                  </div>
                  <ul style={{ paddingLeft: '1.1rem', margin: 0 }}>
                    {service.points.map((point, i) => (
                      <li key={i} style={{ color: '#334155', marginBottom: '0.45rem', lineHeight: 1.6 }}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => window.open('https://cal.com/insure-well-6wcyz0/30min', '_blank')}
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: service.highlight ? '#E8001C' : '#0A1F4A',
                    color: 'white',
                    border: 'none',
                    borderRadius: 9999,
                    fontWeight: 700,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10
                  }}
                >
                  {service.cta} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WAFloat />
    </>
  );
}
