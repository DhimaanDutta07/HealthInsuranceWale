import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WAFloat from '../components/WAFloat';
import useAuthStore from '../store/auth.store';

export default function TermsOfUse() {
  const { isLoggedIn } = useAuthStore();

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />

      <section style={{ padding: '4rem 2rem', maxWidth: 900, margin: '0 auto' }}>
        
        {/* Last Updated */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '2.5rem',
          color: '#64748b',
          fontSize: '0.9rem'
        }}>
          Last Updated: April 2026
        </div>

        <h1 style={{ 
          fontFamily: "'DM Serif Display', serif", 
          fontSize: '3rem', 
          color: '#0A1F4A', 
          marginBottom: '2.5rem',
          textAlign: 'center'
        }}>
          Terms of Use
        </h1>

        <div style={{ fontSize: '1.05rem', lineHeight: 1.85, color: '#334155' }}>
          <p>By accessing and using <strong>HealthInsuranceWale.com</strong>, you agree to the following terms:</p>

          <h3 style={{ color: '#0A1F4A', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Nature of Services</h3>
          <p>HealthInsuranceWale provides advisory services related to health insurance policies and claims.</p>
          <p><strong>We do not guarantee claim approval</strong>, as decisions are made by insurers.</p>

          <h3 style={{ color: '#0A1F4A', marginTop: '2.5rem', marginBottom: '1rem' }}>2. No Financial / Legal Liability</h3>
          <p>All information shared is for guidance purposes only.</p>
          <p>Users are advised to:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Read policy documents carefully</li>
            <li>Make informed decisions</li>
          </ul>

          <h3 style={{ color: '#0A1F4A', marginTop: '2.5rem', marginBottom: '1rem' }}>3. Accuracy of Information</h3>
          <p>We aim to provide accurate and updated information. However, we do not guarantee completeness or accuracy at all times.</p>

          <h3 style={{ color: '#0A1F4A', marginTop: '2.5rem', marginBottom: '1rem' }}>4. User Responsibility</h3>
          <p>You agree to:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Provide correct and complete information</li>
            <li>Not misuse the website or services</li>
          </ul>

          <h3 style={{ color: '#0A1F4A', marginTop: '2.5rem', marginBottom: '1rem' }}>5. Third-Party Links</h3>
          <p>The website may contain links to third-party websites (e.g., insurers, government portals). We are not responsible for their content or policies.</p>

          <h3 style={{ color: '#0A1F4A', marginTop: '2.5rem', marginBottom: '1rem' }}>6. Intellectual Property</h3>
          <p>All content on this website (text, design, logo) belongs to <strong>HealthInsuranceWale / Insurewell Advisory</strong>.</p>

          <h3 style={{ color: '#0A1F4A', marginTop: '2.5rem', marginBottom: '1rem' }}>7. Changes to Terms</h3>
          <p>We may update these terms without prior notice.</p>

          <h3 style={{ color: '#0A1F4A', marginTop: '2.5rem', marginBottom: '1rem' }}>8. Governing Law</h3>
          <p>These terms are governed by the laws of India.</p>
        </div>
      </section>

      {/* IRDA SHORT DISCLAIMER */}
      <div style={{ 
        background: '#F1F5F9', 
        padding: '2.5rem 2rem', 
        borderTop: '1px solid #e2e8f0'
      }}>
        <div className="max-w-4xl mx-auto px-6" style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.7 }}>
          <strong>Insurance is the subject matter of solicitation.</strong><br /><br />
          For more details on benefits, exclusions, limitations, terms &amp; conditions, please read the sales brochure / policy wording carefully before concluding a sale.
        </div>
      </div>

      <Footer />
      <WAFloat />
    </>
  );
}