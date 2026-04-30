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

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #0A1F4A 0%, #1E3A8A 50%, #0F2E6B 100%)',
        minHeight: '70vh',
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
            JOIN OUR GROWING FAMILY
          </div>

          <h1 style={{ 
            fontFamily: "'DM Serif Display', serif", 
            fontSize: 'clamp(3.1rem, 6.2vw, 5.1rem)', 
            lineHeight: 1.02, 
            color: 'white', 
            marginBottom: '1.35rem' 
          }}>
            Build a Career<br />That Matters
          </h1>

          <p style={{ 
            fontSize: '1.25rem', 
            color: 'rgba(255,255,255,0.78)', 
            maxWidth: 620, 
            margin: '0 auto', 
            lineHeight: 1.65 
          }}>
            Help families protect what they love most. Work with purpose in a fast-growing, values-driven insurance advisory.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={{ background: '#F8FAFC', padding: '5.5rem 0' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div data-anim style={{ 
            maxWidth: 720, 
            margin: '0 auto 4rem', 
            fontSize: '1.1rem', 
            lineHeight: 1.75, 
            color: '#334155', 
            textAlign: 'center' 
          }}>
            We are always on the lookout for passionate, honest, and hardworking individuals who want to make a real difference in people’s lives. 
            Whether you’re an experienced insurance advisor, a fresh talent, or someone who believes in transparent service — we’d love to hear from you.
          </div>

          {/* Main Card */}
          <div data-anim style={{
            maxWidth: 620,
            margin: '0 auto',
            background: 'white',
            borderRadius: 24,
            padding: '3.25rem 2.75rem',
            boxShadow: '0 20px 55px rgba(15,37,87,0.08)',
            border: '1px solid #e2e8f0',
            textAlign: 'center'
          }}>
            <h3 style={{ 
              fontFamily: "'DM Serif Display', serif", 
              fontSize: '1.85rem', 
              color: '#0A1F4A', 
              marginBottom: '1.25rem' 
            }}>
              Current Openings
            </h3>

            <p style={{ color: '#64748b', fontSize: '1.05rem', marginBottom: '2rem' }}>
              We don’t have any active openings at the moment.<br />
              But we always keep great profiles on file.
            </p>

            <div style={{
              background: '#ECFDF5',
              border: '1px solid #10B981',
              borderRadius: 16,
              padding: '1.65rem',
              marginBottom: '2.25rem'
            }}>
              <div style={{ fontSize: '0.95rem', color: '#166534', marginBottom: '0.5rem' }}>Send your CV to</div>
              <div style={{ 
                fontSize: '1.25rem', 
                fontWeight: 700, 
                color: '#0A1F4A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10
              }}>
                <Mail className="w-5 h-5" /> rajatk78@gmail.com
              </div>
            </div>

            <button 
              onClick={submitCV}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                padding: '16px 42px',
                background: '#0A1F4A',
                color: 'white',
                border: 'none',
                borderRadius: 9999,
                fontSize: '1.05rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Send Your CV <ArrowRight className="w-5 h-5" />
            </button>

            <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#64748b' }}>
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