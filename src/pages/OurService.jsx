import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WAFloat from '../components/WAFloat';
import useAuthStore from '../store/auth.store';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const { isLoggedIn } = useAuthStore();

  const whatsappNumber = "919217182171";

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
      cta: "Talk to an Expert",
      whatsappMessage: "Hi, I want to discuss new health insurance policy options."
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
      cta: "Explore Better Options",
      whatsappMessage: "Hi, I want to know more about policy portability."
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
      whatsappMessage: "Hi, I need help with my health insurance claim.",
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
      cta: "Plan Your Coverage",
      whatsappMessage: "Hi, I want to plan health insurance for my family and parents."
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
      cta: "Talk to B2B Team",
      whatsappMessage: "Hi, I want to discuss group health insurance for my company."
    }
  ];

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />

      {/* HERO - Mobile Friendly */}
      <section style={{
        background: 'linear-gradient(135deg, #0A1F4A 0%, #1E3A8A 50%, #0F2E6B 100%)',
        minHeight: '65vh',
        display: 'flex',
        alignItems: 'center',
        padding: '2.5rem 1rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.2)', color: 'white',
            fontSize: '0.75rem', fontWeight: 700, padding: '8px 20px', borderRadius: 9999, marginBottom: '1.5rem'
          }}>
            OUR SERVICES
          </div>

          <h1 style={{ 
            fontFamily: "'DM Serif Display', serif", 
            fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', 
            lineHeight: 1.1, 
            color: 'white', 
            marginBottom: '1.25rem' 
          }}>
            Services Built Around<br />Real Claim Outcomes
          </h1>

          <p style={{ 
            fontSize: '1.1rem', 
            color: 'rgba(255,255,255,0.78)', 
            maxWidth: 580, 
            margin: '0 auto' 
          }}>
            From policy selection to claim settlement — we support you at every stage.
          </p>
        </div>
      </section>

      {/* SERVICES GRID - Fully Responsive */}
      <section style={{ background: '#F8FAFC', padding: '3.5rem 1rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {services.map((service) => (
              <div 
                key={service.id}
                style={{
                  background: 'white',
                  borderRadius: 20,
                  padding: '1.85rem 1.6rem',
                  border: service.highlight ? '2px solid #E8001C' : '1px solid #e2e8f0',
                  boxShadow: service.highlight 
                    ? '0 18px 55px rgba(232, 0, 28, 0.1)' 
                    : '0 10px 30px rgba(15,37,87,0.05)',
                  position: 'relative'
                }}
              >
                {service.highlight && (
                  <div style={{
                    position: 'absolute',
                    top: '-11px',
                    right: '20px',
                    background: '#E8001C',
                    color: 'white',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    padding: '3px 11px',
                    borderRadius: 50
                  }}>
                    MOST IMPORTANT
                  </div>
                )}

                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  background: service.color, 
                  borderRadius: 12, 
                  marginBottom: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.3rem'
                }}>
                  {service.id === 1 && '🟢'}
                  {service.id === 2 && '🔵'}
                  {service.id === 3 && '🔴'}
                  {service.id === 4 && '🟣'}
                  {service.id === 5 && '⚫'}
                </div>

                <h3 style={{ fontSize: '1.3rem', color: '#0A1F4A', marginBottom: '0.8rem', fontWeight: 700 }}>
                  {service.title}
                </h3>

                <p style={{ color: '#64748b', lineHeight: 1.6, marginBottom: '1.3rem', fontSize: '0.92rem' }}>
                  {service.description}
                </p>

                <div style={{ marginBottom: '1.6rem' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#334155', marginBottom: '0.55rem' }}>
                    WHAT YOU GET:
                  </div>
                  <ul style={{ paddingLeft: '0.9rem', margin: 0 }}>
                    {service.points.map((point, i) => (
                      <li key={i} style={{ color: '#334155', marginBottom: '0.35rem', fontSize: '0.88rem' }}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    width: '100%',
                    padding: '13px',
                    background: service.highlight ? '#E8001C' : '#0A1F4A',
                    color: 'white',
                    borderRadius: 9999,
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    textDecoration: 'none'
                  }}
                >
                  {service.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IRDA Disclaimer */}
      <div style={{ background: '#F1F5F9', padding: '2rem 1.25rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6 }}>
          <strong>Insurance is the subject matter of solicitation.</strong><br />
          For more details on benefits, exclusions, limitations, terms &amp; conditions, please read the sales brochure / policy wording carefully before concluding a sale.
        </div>
      </div>

      <Footer />
      <WAFloat />
    </>
  );
}