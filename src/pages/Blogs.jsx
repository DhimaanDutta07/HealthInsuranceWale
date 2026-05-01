import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WAFloat from '../components/WAFloat';
import useAuthStore from '../store/auth.store';

export default function Blogs() {
  const { isLoggedIn } = useAuthStore();
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    setTimeout(() => {
      document.querySelectorAll('[data-anim]').forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, []);

  const categories = ['All', 'Best Plans', 'Claim-Focused', 'Buying Guide', 'Special Situations'];

  const blogPosts = [
    {
      title: "Best Health Insurance Plans in India (2026)",
      excerpt: "Complete comparison of top policies based on claim settlement ratio, network hospitals, and real claim experience.",
      category: "Best Plans",
      readTime: "12 min",
      date: "Apr 28, 2026",
      image: "https://picsum.photos/id/1015/800/600"
    },
    {
      title: "Why Health Insurance Claims Get Rejected",
      excerpt: "Most common reasons for claim rejection and how to avoid them completely.",
      category: "Claim-Focused",
      readTime: "9 min",
      date: "Apr 25, 2026",
      image: "https://picsum.photos/id/201/800/600"
    },
    {
      title: "Best Health Insurance for Parents & Senior Citizens",
      excerpt: "Top policies for parents above 60 with pre-existing conditions and comprehensive coverage.",
      category: "Best Plans",
      readTime: "11 min",
      date: "Apr 22, 2026",
      image: "https://picsum.photos/id/1005/800/600"
    },
    {
      title: "Step-by-Step Health Insurance Claim Process",
      excerpt: "Simple guide from hospital admission to claim settlement with timeline and documents.",
      category: "Claim-Focused",
      readTime: "8 min",
      date: "Apr 20, 2026",
      image: "https://picsum.photos/id/237/800/600"
    },
    {
      title: "Cashless vs Reimbursement – Real Experience",
      excerpt: "What actually happens in both processes with real client stories.",
      category: "Claim-Focused",
      readTime: "10 min",
      date: "Apr 18, 2026",
      image: "https://picsum.photos/id/180/800/600"
    },
    {
      title: "Real Claim Story: ₹18 Lakh Hospital Bill Settled",
      excerpt: "How we helped a client get full settlement after initial delays.",
      category: "Claim-Focused",
      readTime: "7 min",
      date: "Apr 15, 2026",
      image: "https://picsum.photos/id/201/800/600"
    },
    {
      title: "Which is Better: ₹10L vs ₹25L Health Cover?",
      excerpt: "Detailed analysis on how much sum insured you actually need in 2026.",
      category: "Buying Guide",
      readTime: "10 min",
      date: "Apr 12, 2026",
      image: "https://picsum.photos/id/133/800/600"
    },
    {
      title: "Health Insurance for Newly Married Couples",
      excerpt: "Best family floater options and important things to consider after marriage.",
      category: "Special Situations",
      readTime: "8 min",
      date: "Apr 10, 2026",
      image: "https://picsum.photos/id/1009/800/600"
    },
  ];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

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
            CLAIM-FOCUSED INSURANCE KNOWLEDGE
          </div>

          <h1 style={{ 
            fontFamily: "'DM Serif Display', serif", 
            fontSize: 'clamp(2.7rem, 7vw, 4.8rem)', 
            lineHeight: 1.05, 
            color: 'white', 
            marginBottom: '1.15rem' 
          }}>
            Our Blog
          </h1>

          <p style={{ 
            fontSize: '1.15rem', 
            color: 'rgba(255,255,255,0.78)', 
            maxWidth: 560, 
            margin: '0 auto', 
            lineHeight: 1.6 
          }}>
            Practical, honest, and claim-focused insights to help you make better insurance decisions.
          </p>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section style={{ background: '#F8FAFC', padding: '4.5rem 1rem' }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Category Filter - Mobile Friendly */}
          <div data-anim style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '11px 24px',
                    borderRadius: 9999,
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    background: activeCategory === cat ? '#0A1F4A' : 'white',
                    color: activeCategory === cat ? 'white' : '#334155',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid - Mobile Friendly */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '1.75rem' 
          }}>
            {filteredPosts.map((post, index) => (
              <div 
                key={index}
                data-anim
                style={{
                  background: 'white',
                  borderRadius: 20,
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 15px 45px rgba(15,37,87,0.06)',
                  transition: 'all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)'
                }}
              >
                <div style={{ height: 210, overflow: 'hidden' }}>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div style={{ padding: '1.65rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.95rem' }}>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      fontWeight: 700, 
                      color: '#10B981',
                      background: '#ECFDF5',
                      padding: '2px 10px',
                      borderRadius: 50
                    }}>
                      {post.category}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                      {post.readTime}
                    </span>
                  </div>

                  <h3 style={{ 
                    fontFamily: "'DM Serif Display', serif", 
                    fontSize: '1.28rem', 
                    lineHeight: 1.25, 
                    marginBottom: '0.9rem',
                    color: '#0A1F4A'
                  }}>
                    {post.title}
                  </h3>

                  <p style={{ 
                    color: '#64748b', 
                    lineHeight: 1.6, 
                    marginBottom: '1.4rem',
                    fontSize: '0.92rem'
                  }}>
                    {post.excerpt}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
                      {post.date}
                    </span>
                    <button style={{
                      background: '#10B981',
                      color: 'white',
                      padding: '10px 22px',
                      borderRadius: 9999,
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      border: 'none',
                      cursor: 'pointer'
                    }}>
                      Read Now →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section - Mobile Friendly */}
          <div data-anim style={{
            marginTop: '5rem',
            background: 'linear-gradient(135deg, #0A1F4A, #1E3A8A)',
            borderRadius: 22,
            padding: '3.25rem 2rem',
            textAlign: 'center',
            color: 'white'
          }}>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '2.1rem', marginBottom: '0.9rem' }}>
              Want personalized insurance advice?
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)', maxWidth: 480, margin: '0 auto 1.9rem' }}>
              Speak to our claim-focused advisors. No sales pitch — only honest guidance.
            </p>
            <button style={{
              background: 'white',
              color: '#0A1F4A',
              padding: '14px 36px',
              borderRadius: 9999,
              fontSize: '1rem',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer'
            }}>
              Book Free Consultation
            </button>
          </div>

        </div>
      </section>

      <Footer />
      <WAFloat />
    </>
  );
}