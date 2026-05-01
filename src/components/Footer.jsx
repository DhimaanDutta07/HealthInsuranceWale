import { Link, useLocation } from 'react-router-dom';
import logo from "./navbar/logoo.png";

const WA_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.858L.057 23.572a.5.5 0 0 0 .612.612l5.714-1.477A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.849 0-3.585-.497-5.086-1.366l-.363-.214-3.766.972.992-3.663-.234-.374A9.962 9.962 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

const AGENCY_CODES = [
  { insurer: 'Care Health', name: 'Rajat Kumar', code: '20577513' },
  { insurer: 'Niva Bupa', name: 'Ramesh Kumar', code: 'DEL0131511' },
  { insurer: 'HDFC Ergo', name: 'Rajat Kumar', code: '200258209132' },
  { insurer: 'ICICI Lombard', name: 'Dolly Kumar', code: 'ILG54035' },
  { insurer: 'Star Health', name: 'Dolly Kumar', code: 'BA0000137413' },
];

export default function Footer({ onOpenModal }) {
  const location = useLocation();

  const getMessage = () => {
    const path = location.pathname;

    if (path === '/') {
      return "Hi, I'm looking to buy a new health insurance policy. Can you guide me on the right plan?";
    } 
    else if (path.includes('/claims')) {
      return "Hi, I need help regarding a health insurance claim. It’s urgent—please guide me on next steps.";
    } 
    else if (path.includes('/faqs')) {
      return "Hi, I have some questions about health insurance. Can you help?";
    } 
    else if (path.includes('/our-story')) {
      return "Hi, I want to know more about HealthInsuranceWale. Can you tell me more?";
    } 
    else {
      return "Hi, I need help with health insurance. Can you guide me?";
    }
  };

  const handleWhatsApp = () => {
    const message = getMessage();
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919217182171?text=${encodedMessage}`, '_blank');
  };

  return (
    <footer style={{ 
      background: 'linear-gradient(135deg, #0A1F4A 0%, #0F2E6B 100%)', 
      color: 'rgba(255,255,255,0.8)', 
      paddingTop: '4rem',
      position: 'relative'
    }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Brand + CTA Section */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.8fr 1fr', 
          gap: '4rem', 
          alignItems: 'center',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.08)'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: '1.25rem' }}>
              <img 
                src={logo}
                alt="Insurewell" 
                style={{ width: 48, height: 48, borderRadius: 12 }} 
              />
              <div>
                <h1 style={{ 
                  fontSize: '1.35rem', 
                  fontWeight: 700, 
                  color: 'white', 
                  fontFamily: "'DM Serif Display',serif",
                  letterSpacing: '-0.3px'
                }}>
                  healthinsurancewale
                </h1>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>by Insurewell Advisory</p>
              </div>
            </div>
            <p style={{ 
              fontSize: '1rem', 
              lineHeight: 1.75, 
              maxWidth: 380, 
              color: 'rgba(255,255,255,0.75)' 
            }}>
              Honest. Simple. Secure. India's most trusted health insurance advisory helping families since 2018.
            </p>
          </div>

          {/* Big WhatsApp CTA */}
          <div style={{ textAlign: 'right' }}>
            <button 
              onClick={handleWhatsApp}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: '#10B981',
                color: 'white',
                padding: '14px 32px',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '1.05rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              <span style={{ width: 26, height: 26 }}>{WA_SVG}</span>
              Chat on WhatsApp
            </button>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.75rem' }}>
              Instant response • 24×7
            </p>
          </div>
        </div>

        {/* Links + Agency Codes */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
          gap: '3rem', 
          padding: '3.5rem 0' 
        }}>
          
          <FooterCol title="Company" links={[
            { label: 'About Us', to: '/our-story' },
            { label: 'Claim Stories', to: '/claim-stories' },
            { label: 'Careers', to: '/careers' },
            { label: 'Blog', to: '/blogs' },
          ]} />

          <FooterCol title="Services" links={[
            { label: 'Our Services', to: '/services' },
            { label: 'IRDA Disclaimer', to: '/disclaimer' },
            { label: 'Privacy Policy', to: '/privacypolicy' },
            { label: 'Terms Of Use', to: '/termsofuse' },
          ]} />

          <div>
            <h5 style={{ 
              fontSize: '0.75rem', 
              fontWeight: 700, 
              color: '#10B981', 
              letterSpacing: '2px', 
              marginBottom: '1.25rem',
              textTransform: 'uppercase'
            }}>
              Support
            </h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <li><Link to="/claims" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>Claims Assistance</Link></li>
              <li>
                <button 
                  onClick={() => onOpenModal?.('call')} 
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: 'rgba(255,255,255,0.7)', 
                    fontSize: '0.95rem', 
                    cursor: 'pointer', 
                    padding: 0 
                  }}
                >
                  Book Free Consultation
                </button>
              </li>
              <li><a href="https://abha.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>ABHA Health ID</a></li>
              <li><a href="https://bimabharosa.irdai.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>Bima Bharosa Portal</a></li>
            </ul>
          </div>

          {/* Creative Agency Codes */}
          <div>
            <h5 style={{ 
              fontSize: '0.75rem', 
              fontWeight: 700, 
              color: '#10B981', 
              letterSpacing: '2px', 
              marginBottom: '1.25rem',
              textTransform: 'uppercase'
            }}>
              Our Agency Codes
            </h5>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.6rem',
              maxHeight: '180px',
              overflowY: 'auto',
              paddingRight: '8px'
            }}>
              {AGENCY_CODES.map((item, index) => (
                <div 
                  key={index} 
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    padding: '10px 16px',
                    fontSize: '0.85rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(16,185,129,0.1)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
                >
                  <div>
                    <span style={{ color: '#10B981', fontWeight: 600 }}>{item.insurer}</span>
                    <span style={{ color: 'rgba(255,255,255,0.4)' }}> · {item.name}</span>
                  </div>
                  <span style={{ 
                    fontFamily: 'monospace', 
                    color: 'rgba(255,255,255,0.9)', 
                    fontSize: '0.8rem',
                    background: 'rgba(255,255,255,0.08)',
                    padding: '2px 8px',
                    borderRadius: '6px'
                  }}>
                    {item.code}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* IRDAI Disclaimer */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.08)', 
          padding: '2rem 0 1.5rem' 
        }}>
          <p style={{ 
            fontSize: '0.75rem', 
            color: 'rgba(255,255,255,0.5)', 
            lineHeight: 1.8,
            maxWidth: '820px'
          }}>
            <span style={{ color: 'rgba(255,255,255,0.65)', fontWeight: 600 }}>IRDAI Disclaimer:</span> HealthInsuranceWale.com is a platform powered by Insurewell Advisory for providing health insurance advisory services. We do not represent any specific insurance company. All insurance products are subject to terms, conditions, and exclusions as per the respective insurer. Please read policy documents carefully before purchase.
          </p>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '1.75rem 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: 'rgba(255,255,255,0.45)'
        }}>
          <div>© 2026 Insurewell Advisory · All Rights Reserved</div>
          <div>IRDAI Registration No. · CIN: U66000MH2018PTC000000</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h5 style={{ 
        fontSize: '0.75rem', 
        fontWeight: 700, 
        color: '#10B981', 
        letterSpacing: '2px', 
        marginBottom: '1.25rem',
        textTransform: 'uppercase'
      }}>
        {title}
      </h5>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        {links.map((link, index) => (
          <li key={index}>
            <Link 
              to={link.to} 
              style={{ 
                color: 'rgba(255,255,255,0.7)', 
                fontSize: '0.95rem',
                transition: 'color 0.2s'
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}