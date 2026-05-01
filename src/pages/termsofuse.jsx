import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WAFloat from '../components/WAFloat';
import useAuthStore from '../store/auth.store';

export default function TermsOfUse() {
  const { isLoggedIn } = useAuthStore();

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />

      <section style={{ 
        padding: '3.5rem 1.25rem', 
        maxWidth: 900, 
        margin: '0 auto' 
      }}>
        
        {/* Last Updated */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          color: '#64748b',
          fontSize: '0.85rem'
        }}>
          Last Updated: April 2026
        </div>

        <h1 style={{ 
          fontFamily: "'DM Serif Display', serif", 
          fontSize: 'clamp(2.4rem, 8vw, 3rem)', 
          color: '#0A1F4A', 
          marginBottom: '2rem',
          textAlign: 'center',
          lineHeight: 1.1
        }}>
          Terms of Use
        </h1>

        <div style={{ 
          fontSize: '1rem', 
          lineHeight: 1.8, 
          color: '#334155' 
        }}>
          <p>By accessing and using <strong>HealthInsuranceWale.com</strong>, you agree to the following terms:</p>

          <h3 style={{ color: '#0A1F4A', marginTop: '2.25rem', marginBottom: '0.9rem', fontSize: '1.2rem' }}>1. Nature of Services</h3>
          <p>HealthInsuranceWale provides advisory services related to health insurance policies and claims.</p>
          <p><strong>We do not guarantee claim approval</strong>, as decisions are made by insurers.</p>

          <h3 style={{ color: '#0A1F4A', marginTop: '2.25rem', marginBottom: '0.9rem', fontSize: '1.2rem' }}>2. No Financial / Legal Liability</h3>
          <p>All information shared is for guidance purposes only.</p>
          <p>Users are advised to:</p>
          <ul style={{ paddingLeft: '1.3rem' }}>
            <li>Read policy documents carefully</li>
            <li>Make informed decisions</li>
          </ul>

          <h3 style={{ color: '#0A1F4A', marginTop: '2.25rem', marginBottom: '0.9rem', fontSize: '1.2rem' }}>3. Accuracy of Information</h3>
          <p>We aim to provide accurate and updated information. However, we do not guarantee completeness or accuracy at all times.</p>

          <h3 style={{ color: '#0A1F4A', marginTop: '2.25rem', marginBottom: '0.9rem', fontSize: '1.2rem' }}>4. User Responsibility</h3>
          <p>You agree to:</p>
          <ul style={{ paddingLeft: '1.3rem' }}>
            <li>Provide correct and complete information</li>
            <li>Not misuse the website or services</li>
          </ul>

          <h3 style={{ color: '#0A1F4A', marginTop: '2.25rem', marginBottom: '0.9rem', fontSize: '1.2rem' }}>5. Third-Party Links</h3>
          <p>The website may contain links to third-party websites (e.g., insurers, government portals). We are not responsible for their content or policies.</p>

          <h3 style={{ color: '#0A1F4A', marginTop: '2.25rem', marginBottom: '0.9rem', fontSize: '1.2rem' }}>6. Intellectual Property</h3>
          <p>All content on this website (text, design, logo) belongs to <strong>HealthInsuranceWale / Insurewell Advisory</strong>.</p>

          <h3 style={{ color: '#0A1F4A', marginTop: '2.25rem', marginBottom: '0.9rem', fontSize: '1.2rem' }}>7. Changes to Terms</h3>
          <p>We may update these terms without prior notice.</p>

          <h3 style={{ color: '#0A1F4A', marginTop: '2.25rem', marginBottom: '0.9rem', fontSize: '1.2rem' }}>8. Governing Law</h3>
          <p>These terms are governed by the laws of India.</p>
        </div>
      </section>

      {/* IRDA SHORT DISCLAIMER */}
      <div style={{ 
        background: '#F1F5F9', 
        padding: '2rem 1.25rem', 
        borderTop: '1px solid #e2e8f0'
      }}>
        <div style={{ 
          maxWidth: 860, 
          margin: '0 auto', 
          fontSize: '0.85rem', 
          color: '#64748b', 
          lineHeight: 1.65 
        }}>
          <strong>Insurance is the subject matter of solicitation.</strong><br /><br />
          For more details on benefits, exclusions, limitations, terms &amp; conditions, please read the sales brochure / policy wording carefully before concluding a sale.
        </div>
      </div>

      <Footer />
      <WAFloat />
    </>
  );
}