import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WAFloat from '../components/WAFloat';
import useAuthStore from '../store/auth.store';

export default function Disclaimer() {
  const { isLoggedIn } = useAuthStore();

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />

      <section style={{ padding: '5rem 2rem', maxWidth: 900, margin: '0 auto' }}>
        <h1 style={{ 
          fontFamily: "'DM Serif Display', serif", 
          fontSize: '2.8rem', 
          color: '#0A1F4A', 
          marginBottom: '2rem' 
        }}>
          Disclaimer
        </h1>

        <div style={{ fontSize: '1.05rem', lineHeight: 1.85, color: '#334155' }}>
          <p>HealthInsuranceWale.com is a platform operated by <strong>Insurewell Advisory</strong>, offering advisory services for health insurance policies and claims.</p>

          <p>We aim to provide accurate, updated, and relevant information; however:</p>

          <ul style={{ paddingLeft: '1.5rem', margin: '1.5rem 0' }}>
            <li>Policy issuance is subject to insurer underwriting guidelines</li>
            <li>Claims are subject to policy terms, conditions, and insurer approval</li>
            <li>We do not guarantee claim settlement</li>
          </ul>

          <p>All information provided on this website is for general guidance purposes only and should not be considered as a substitute for policy documents.</p>

          <p><strong>Users are advised to:</strong></p>
          <ul style={{ paddingLeft: '1.5rem', margin: '1rem 0' }}>
            <li>Read the policy brochure carefully</li>
            <li>Understand exclusions, waiting periods, and limitations</li>
            <li>Make informed decisions</li>
          </ul>

          <div style={{ 
            background: '#FEF3C7', 
            padding: '1.5rem', 
            borderRadius: 12, 
            marginTop: '2rem',
            borderLeft: '5px solid #F59E0B'
          }}>
            <strong>Insurance is the subject matter of solicitation.</strong>
          </div>
        </div>
      </section>

      <Footer />
      <WAFloat />
    </>
  );
}