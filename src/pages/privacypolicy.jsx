import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WAFloat from '../components/WAFloat';
import useAuthStore from '../store/auth.store';

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>

        <div style={{ fontSize: '1.05rem', lineHeight: 1.85, color: '#334155' }}>
          <p>At <strong>HealthInsuranceWale.com</strong> (powered by Insurewell Advisory), we respect your privacy and are committed to protecting your personal information.</p>

          <h3 style={{ color: '#0A1F4A', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Information We Collect</h3>
          <p>We may collect the following details when you interact with us:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Age / health-related information (only when voluntarily shared)</li>
            <li>Any information shared via forms, calls, or WhatsApp</li>
          </ul>

          <h3 style={{ color: '#0A1F4A', marginTop: '2.5rem', marginBottom: '1rem' }}>2. How We Use Your Information</h3>
          <p>Your information is used to:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Provide health insurance advisory services</li>
            <li>Assist with policy selection and claims</li>
            <li>Respond to your queries</li>
            <li>Improve our services</li>
          </ul>
          <p><strong>We do not sell your data to third parties.</strong></p>

          <h3 style={{ color: '#0A1F4A', marginTop: '2.5rem', marginBottom: '1rem' }}>3. Sharing of Information</h3>
          <p>We may share your information only when necessary with:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Insurance companies (for policy or claim support)</li>
            <li>Service providers assisting in operations</li>
          </ul>

          <h3 style={{ color: '#0A1F4A', marginTop: '2.5rem', marginBottom: '1rem' }}>4. Data Security</h3>
          <p>We take reasonable steps to protect your personal data from unauthorized access, misuse, or disclosure.</p>

          <h3 style={{ color: '#0A1F4A', marginTop: '2.5rem', marginBottom: '1rem' }}>5. Your Consent</h3>
          <p>By using our website, you consent to our privacy policy and the use of your information as described.</p>

          <h3 style={{ color: '#0A1F4A', marginTop: '2.5rem', marginBottom: '1rem' }}>6. Updates</h3>
          <p>This policy may be updated from time to time. Please review periodically.</p>

          <h3 style={{ color: '#0A1F4A', marginTop: '2.5rem', marginBottom: '1rem' }}>7. Contact Us</h3>
          <p>For any concerns regarding privacy:</p>
          <p style={{ marginTop: '0.75rem' }}>
            📧 <strong>support@healthinsurancewale.com</strong><br />
            📞 <strong>+91 9217182171</strong>
          </p>
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