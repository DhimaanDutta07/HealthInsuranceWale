import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WAFloat from '../components/WAFloat';
import useAuthStore from '../store/auth.store';
import { Mail, ArrowRight } from 'lucide-react';

export default function Careers() {
  const { isLoggedIn } = useAuthStore();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    setTimeout(() => {
      document.querySelectorAll('[data-anim]').forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, []);

  const submitCV = () => {
    window.location.href = `mailto:rajatk78@gmail.com`;
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />

      {/* HERO - Mobile Friendly */}
      <section style={{
        background: 'linear-gradient(135deg, #0A1F4A 0%, #1E3A8A 50%, #0F2E6B 100%)',
        minHeight: '65vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: '2rem 1rem'
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
            JOIN OUR GROWING FAMILY
          </div>

          <h1 style={{ 
            fontFamily: "'DM Serif Display', serif", 
            fontSize: 'clamp(2.7rem, 6.5vw, 4.8rem)', 
            lineHeight: 1.05, 
            color: 'white', 
            marginBottom: '1.15rem' 
          }}>
            Build a Career<br />That Matters
          </h1>

          <p style={{ 
            fontSize: '1.1rem', 
            color: 'rgba(255,255,255,0.78)', 
            maxWidth: 560, 
            margin: '0 auto', 
            lineHeight: 1.6 
          }}>
            Help families protect what they love most. Work with purpose in a fast-growing, values-driven insurance advisory.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT - Mobile Friendly */}
      <section style={{ background: '#F8FAFC', padding: '4.5rem 1rem' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div data-anim style={{ 
            maxWidth: 680, 
            margin: '0 auto 3.5rem', 
            fontSize: '1.05rem', 
            lineHeight: 1.7, 
            color: '#334155', 
            textAlign: 'center' 
          }}>
            We are always on the lookout for passionate, honest, and hardworking individuals who want to make a real difference in people’s lives. 
            Whether you’re an experienced insurance advisor, a fresh talent, or someone who believes in transparent service — we’d love to hear from you.
          </div>

          {/* Main Card */}
          <div data-anim style={{
            maxWidth: 580,
            margin: '0 auto',
            background: 'white',
            borderRadius: 22,
            padding: '2.75rem 2.25rem',
            boxShadow: '0 18px 50px rgba(15,37,87,0.07)',
            border: '1px solid #e2e8f0',
            textAlign: 'center'
          }}>
            <h3 style={{ 
              fontFamily: "'DM Serif Display', serif", 
              fontSize: '1.7rem', 
              color: '#0A1F4A', 
              marginBottom: '1.1rem' 
            }}>
              Current Openings
            </h3>

            <p style={{ color: '#64748b', fontSize: '1rem', marginBottom: '1.85rem' }}>
              We don’t have any active openings at the moment.<br />
              But we always keep great profiles on file.
            </p>

            <div style={{
              background: '#ECFDF5',
              border: '1px solid #10B981',
              borderRadius: 14,
              padding: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{ fontSize: '0.9rem', color: '#166534', marginBottom: '0.45rem' }}>Send your CV to</div>
              <div style={{ 
                fontSize: '1.15rem', 
                fontWeight: 700, 
                color: '#0A1F4A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 9
              }}>
                <Mail className="w-5 h-5" /> rajatk78@gmail.com
              </div>
            </div>

            <button 
              onClick={submitCV}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '15px 38px',
                background: '#0A1F4A',
                color: 'white',
                border: 'none',
                borderRadius: 9999,
                fontSize: '1rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Send Your CV <ArrowRight className="w-5 h-5" />
            </button>

            <p style={{ marginTop: '1.85rem', fontSize: '0.85rem', color: '#64748b' }}>
              We review every application personally and will get back to you if there’s a good fit.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WAFloat />
    </>
  );
}