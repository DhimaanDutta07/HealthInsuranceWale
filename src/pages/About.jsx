import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WAFloat from '../components/WAFloat';
import useAuthStore from '../store/auth.store';
import { CheckCircle, FileText, BarChart3, Users } from 'lucide-react';

export default function About() {
  const { isLoggedIn } = useAuthStore();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    setTimeout(() => {
      document.querySelectorAll('[data-anim]').forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />

      {/* HERO — Tight Mobile */}
      <section style={{
        background: 'linear-gradient(135deg, #0A1F4A 0%, #1E3A8A 50%, #0F2E6B 100%)',
        minHeight: '62vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: '1.75rem 1rem'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}></div>

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.25rem', position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ maxWidth: 580 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(14px)',
              border: '1px solid rgba(255,255,255,0.2)', color: 'white',
              fontSize: '0.72rem', fontWeight: 700, padding: '6px 16px', borderRadius: 9999, marginBottom: '1.25rem'
            }}>
              <span style={{ width: 7, height: 7, background: '#10B981', borderRadius: '50%', animation: 'pulse 2s infinite' }}></span>
              EST. 2018 • IRDAI LICENSED
            </div>

            <h1 style={{ 
              fontFamily: "'DM Serif Display', serif", 
              fontSize: 'clamp(2.5rem, 7.5vw, 4.5rem)', 
              lineHeight: 1.05, 
              color: 'white', 
              marginBottom: '1rem' 
            }}>
              We don’t just<br />sell insurance.<br />We protect futures.
            </h1>

            <p style={{ 
              fontSize: '1rem', 
              color: 'rgba(255,255,255,0.78)', 
              maxWidth: 460, 
              lineHeight: 1.55 
            }}>
              In health insurance, the real difference isn’t the policy you buy — it’s the experience you have when you need it most.
            </p>

            <div style={{ 
              display: 'flex', alignItems: 'center', gap: '1.75rem', 
              marginTop: '2rem', flexWrap: 'wrap' 
            }}>
              {[
                { number: '4,000+', label: 'Families Protected' },
                { number: '98%', label: 'Claim Success' },
                { number: '₹2 Cr+', label: 'Claims Facilitated' }
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '1.65rem', fontWeight: 700, color: '#10B981', lineHeight: 1 }}>{stat.number}</div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', marginTop: '1px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR PHILOSOPHY — Compact */}
      <section style={{ background: 'white', padding: '3.75rem 1rem' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }} data-anim>
            <div style={{ color: '#10B981', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '2.5px' }}>THE HEALTHINSURANCEWALE DIFFERENCE</div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '2rem', color: '#0A1F4A', marginTop: '0.4rem', lineHeight: 1.1 }}>
              Insurance advice guided by<br />claim outcomes, not product features.
            </h2>
          </div>

          <div style={{ maxWidth: 680, margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.65, color: '#334155' }} data-anim>
            <p style={{ marginBottom: '1rem' }}>
              We observed a consistent gap: policies were sold with ease, but claims often left individuals navigating complexity alone. That insight shaped everything.
            </p>
            <p>
              <strong>HealthInsuranceWale</strong>, powered by Insurewell Advisory, was built on one clear principle — every recommendation must answer one question: 
              <em> “Will this policy work seamlessly when the client needs it most?”</em>
            </p>
          </div>
        </div>
      </section>

      {/* REAL IMPACT — Compact */}
      <section style={{ background: '#0A1F4A', color: 'white', padding: '3.5rem 1rem' }}>
        <div className="max-w-5xl mx-auto px-6" data-anim>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: '2.25rem', alignItems: 'center' }}>
            <div>
              <div style={{ color: '#10B981', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '2.5px' }}>REAL STORY • REAL RESULT</div>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.95rem', lineHeight: 1.1, margin: '0.8rem 0 1rem' }}>
                When everything<br />was on the line
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.6 }}>
                A client faced a hospitalization with a total bill exceeding ₹18 lakh. Documentation gaps and coordination delays created serious challenges.
              </p>
            </div>

            <div style={{ 
              background: 'rgba(255,255,255,0.07)', 
              borderRadius: 16, 
              padding: '1.55rem 1.45rem', 
              border: '1px solid rgba(255,255,255,0.12)' 
            }}>
              <div style={{ color: '#10B981', fontWeight: 700, fontSize: '0.82rem', marginBottom: '0.85rem' }}>OUR TEAM STEPPED IN TO:</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {[
                  'Align all documentation with insurer requirements',
                  'Coordinate directly with the hospital TPA desk',
                  'Manage timely communication and follow-ups',
                  'Guide the client through every stage'
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: '0.88rem' }}>
                    <div style={{ 
                      width: 18, height: 18, background: '#10B981', borderRadius: '50%', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 
                    }}>
                      <CheckCircle className="w-2.5 h-2.5 text-white" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
              <div style={{ 
                marginTop: '1.2rem', paddingTop: '0.9rem', borderTop: '1px solid rgba(255,255,255,0.18)', 
                fontWeight: 700, color: '#10B981', fontSize: '0.88rem' 
              }}>
                Result: Claim successfully processed and settled in full.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE STAND FOR — Compact */}
      <section style={{ background: 'white', padding: '3.75rem 1rem' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '2.25rem' }} data-anim>
            <div style={{ color: '#10B981', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '2.5px' }}>OUR CORE VALUES</div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.95rem', color: '#0A1F4A', marginTop: '0.4rem' }}>
              What We Truly Stand For
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.15rem' }}>
            {[
              { Icon: FileText, title: 'Clarity Before Commitment', text: 'Every clause and exclusion is explained in plain language before you sign anything.' },
              { Icon: BarChart3, title: 'Performance Over Features', text: 'We evaluate claim settlement ratios, hospital networks, and real-world performance — not just premiums.' },
              { Icon: Users, title: 'Support When It Matters', text: 'We stand with you during claims — the moment that defines true insurance value.' },
            ].map((item, i) => (
              <div key={i} data-anim style={{
                background: '#F8FAFC',
                borderRadius: 16,
                padding: '1.7rem 1.55rem',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ marginBottom: '0.9rem' }}>
                  <item.Icon className="w-8 h-8 text-[#0A1F4A]" />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0A1F4A', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.55 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR JOURNEY — Video Highlights */}
      <section style={{ background: '#F8FAFC', padding: '3.5rem 1rem' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }} data-anim>
            <div style={{ color: '#10B981', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '2.5px' }}>OUR JOURNEY</div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.85rem', color: '#0A1F4A', marginTop: '0.35rem' }}>
              Watch Our Story
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1.3rem' }}>
            {[
              { src: "https://www.youtube.com/embed/NDd1RtcnzIE", title: "Our Story with HDFC ERGO", desc: "From our early days at Apollo Munich to building HealthInsuranceWale." },
              { src: "https://www.youtube.com/embed/XWzP4i_NB9o", title: "Celebrating Insurance Advisors", desc: "A powerful film by HDFC ERGO featuring RJ Anmol and Amrita Rao." }
            ].map((video, i) => (
              <div key={i} data-anim style={{ 
                background: 'white', borderRadius: 14, overflow: 'hidden', 
                boxShadow: '0 10px 30px rgba(15,37,87,0.05)' 
              }}>
                <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                  <iframe 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                    src={video.src} 
                    title={video.title}
                    allowFullScreen
                  ></iframe>
                </div>
                <div style={{ padding: '1.05rem 1.2rem' }}>
                  <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '0.95rem', color: '#0A1F4A' }}>{video.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.82rem', marginTop: '0.35rem', lineHeight: 1.45 }}>{video.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET THE FOUNDERS — Compact */}
      <section style={{ background: '#0A1F4A', color: 'white', padding: '3.75rem 1rem' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '2.25rem' }} data-anim>
            <div style={{ color: '#10B981', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '2.5px' }}>THE PEOPLE BEHIND THE PROMISE</div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.95rem', marginTop: '0.4rem' }}>Meet the Founders</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.45rem' }}>
            {[
              { img: 'https://picsum.photos/id/1005/700/700', name: 'Rajat Kumar', role: 'Founder & Principal Advisor', desc: '20+ years in health insurance advisory. Specialises in claim structuring and high-value case management.' },
              { img: 'https://picsum.photos/id/1011/700/700', name: 'Dolly Kumar', role: 'Senior Health Insurance Advisor', desc: 'Expert in senior citizen plans, pre-existing condition cases, and policy portability guidance.' },
            ].map((person, i) => (
              <div key={i} data-anim style={{
                background: 'rgba(255,255,255,0.06)',
                borderRadius: 16,
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{ height: 230, overflow: 'hidden' }}>
                  <img src={person.img} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.45rem' }}>
                  <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.15rem', marginBottom: '0.25rem' }}>{person.name}</h3>
                  <div style={{ color: '#10B981', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>{person.role}</div>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.55 }}>{person.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT — Compact */}
      <section style={{ background: 'white', padding: '3.75rem 1rem', textAlign: 'center' }}>
        <div className="max-w-3xl mx-auto px-6" data-anim>
          <h2 style={{ 
            fontFamily: "'DM Serif Display', serif", 
            fontSize: '1.8rem', 
            color: '#0A1F4A', 
            lineHeight: 1.35, 
            maxWidth: 540, 
            margin: '0 auto' 
          }}>
            We don’t position ourselves as sellers of insurance.<br />
            We position ourselves as partners in your claim journey.
          </h2>
          <div style={{ width: 45, height: 3, background: '#10B981', margin: '1.5rem auto' }}></div>
          <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.5 }}>
            <strong>Rajat Kumar &amp; Dolly Kumar</strong><br />
            Founders, Insurewell Advisory
          </p>
        </div>
      </section>

      <Footer />
      <WAFloat />
    </>
  );
}