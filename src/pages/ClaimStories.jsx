import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WAFloat from '../components/WAFloat';
import useAuthStore from '../store/auth.store';
import { Phone, MessageCircle, Clock, FileText, Award, ShieldCheck } from 'lucide-react';

const CASE_STUDIES = [
  {
    id: 1,
    badge: '₹18 Lakh Case',
    badgeColor: '#E8001C',
    title: '₹18 Lakh Hospitalization — Structured Support, Successful Settlement',
    story: 'A client faced a critical hospitalization with bills crossing ₹18 lakh. Initial documentation gaps and poor coordination between hospital and insurer created major delays and stress.',
    howWeDealt: 'We immediately reviewed the complete case file, coordinated directly with the hospital TPA, restructured documentation to insurer standards, and maintained daily follow-ups while guiding the family on admissible expenses.',
    outcome: 'Claim settled in full with minimal financial burden on the client.',
    insight: 'Even the right policy needs expert claim handling to deliver real value.',
  },
  {
    id: 2,
    badge: 'Senior Citizen Case',
    badgeColor: '#F59E0B',
    title: 'Senior Citizen with Pre-existing Conditions — Smooth Navigation',
    story: 'A senior citizen with multiple pre-existing conditions required urgent hospitalization — a case type that usually faces intense scrutiny and high risk of delays or partial approvals.',
    howWeDealt: 'We pre-verified all policy clauses, prepared the exact document list, ensured perfect disclosure alignment, and maintained direct insurer communication to resolve queries instantly.',
    outcome: 'Claim approved without major deductions, giving the family complete peace of mind.',
    insight: 'For senior citizens, proactive clarity before and during claim is everything.',
  },
  {
    id: 3,
    badge: 'Portability + Claim',
    badgeColor: '#0ABFA3',
    title: 'Strategic Policy Switch Delivered When It Mattered Most',
    story: 'The client had low coverage and limited network. We recommended and executed a policy portability to a stronger insurer with superior claim track record.',
    howWeDealt: 'We evaluated insurers on real claim data, structured portability to retain all benefits, and aligned the new policy to the client’s health profile. Months later we managed the full claim under the new policy.',
    outcome: 'Claim settled smoothly — validating the switch as the right long-term decision.',
    insight: 'The right policy decision today directly determines claim experience tomorrow.',
  },
];

function ClaimsPublic() {
  const handleBookCall = () => window.open('https://cal.com/insure-well-6wcyz0/30min', '_blank');

  return (
    <>
      <Navbar isLoggedIn={false} />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #0A1F4A 0%, #1E3A8A 50%, #0F2E6B 100%)',
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '44px 44px'
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.2)', color: 'white',
            fontSize: '0.75rem', fontWeight: 700, padding: '8px 24px', borderRadius: 9999, marginBottom: '1.75rem'
          }}>
            <span style={{ width: 8, height: 8, background: '#10B981', borderRadius: '50%', animation: 'pulse 2s infinite' }}></span>
            98.7% CLAIM SETTLEMENT RATIO • 24×7 SUPPORT
          </div>

          <h1 style={{ 
            fontFamily: "'DM Serif Display', serif", 
            fontSize: 'clamp(3.2rem, 6.5vw, 5.4rem)', 
            lineHeight: 1.02, 
            color: 'white', 
            marginBottom: '1.5rem' 
          }}>
            Claims that actually<br />get settled.<br /><span style={{ color: '#10B981' }}>Fast.</span>
          </h1>

          <p style={{ 
            fontSize: '1.25rem', 
            color: 'rgba(255,255,255,0.78)', 
            maxWidth: 620, 
            margin: '0 auto 2.75rem', 
            lineHeight: 1.65 
          }}>
            From hospital admission to cashless approval to final settlement — we stay with you at every single step.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={handleBookCall} style={{
              padding: '17px 38px', background: 'white', color: '#0A1F4A', borderRadius: 9999,
              fontWeight: 700, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: 12, border: 'none', cursor: 'pointer'
            }}>
              <Phone className="w-5 h-5" /> Speak to Claims Expert
            </button>
            <a href="https://wa.me/919971466960" target="_blank" rel="noreferrer" style={{
              padding: '17px 38px', background: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: 9999,
              fontWeight: 700, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: 12, border: '1px solid rgba(255,255,255,0.3)'
            }}>
              <MessageCircle className="w-5 h-5" /> WhatsApp Claims Help
            </a>
          </div>
        </div>
      </section>

      {/* OUR CLAIMS ADVANTAGE */}
      <section style={{ background: 'white', padding: '5.5rem 0' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '3.25rem' }}>
            <div style={{ color: '#10B981', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '2.5px' }}>THE HEALTHINSURANCEWALE DIFFERENCE</div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '2.45rem', color: '#0A1F4A', marginTop: '0.5rem' }}>
              Why Our Claims Process Stands Out
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { Icon: ShieldCheck, title: 'Direct Insurer Coordination', text: 'We speak directly to insurers on your behalf — no middlemen, no delays.' },
              { Icon: Clock, title: 'Lightning-Fast Approvals', text: 'Most cashless approvals within 30–60 minutes. We don’t wait — we act.' },
              { Icon: FileText, title: 'Zero Documentation Stress', text: 'We prepare and submit every document exactly as required. You just relax.' },
              { Icon: Award, title: 'Relentless Follow-Up', text: 'We chase every status update until your money is in your account.' },
            ].map((item, i) => (
              <div key={i} style={{
                background: '#F8FAFC', border: '1px solid #e2e8f0', borderRadius: 20, padding: '2.25rem 2rem',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ width: 52, height: 52, background: '#D1FAE5', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981', marginBottom: '1.35rem' }}>
                  <item.Icon className="w-7 h-7" />
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0A1F4A', marginBottom: '0.7rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.65 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVEN TRACK RECORD */}
      <section style={{ background: '#0A1F4A', color: 'white', padding: '4.75rem 0' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
            <div style={{ color: '#10B981', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '2.5px' }}>REAL NUMBERS. REAL IMPACT.</div>
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '2rem', marginTop: '0.4rem' }}>Our Claims Track Record</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {[
              { num: '1,539', label: 'Claims Successfully Filed' },
              { num: '₹2.19 Cr', label: 'Total Amount Processed' },
              { num: '₹1.94 Cr', label: 'Claims Approved & Paid' },
              { num: '98.7%', label: 'Settlement Success Rate' },
            ].map((stat, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.06)', borderRadius: 18, padding: '2rem 1.75rem',
                border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'
              }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '2.85rem', fontWeight: 700, color: '#10B981' }}>{stat.num}</div>
                <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL CLIENT JOURNEYS — CREATIVE ACCENT CARDS */}
      <section style={{ background: '#F8FAFC', padding: '5.5rem 0' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '3.75rem' }}>
            <div style={{ color: '#10B981', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '2.5px' }}>REAL CLIENT JOURNEYS</div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '2.45rem', color: '#0A1F4A', marginTop: '0.5rem' }}>
              How We Actually Handled These Cases
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.75rem' }}>
            {CASE_STUDIES.map((cs, idx) => (
              <div key={cs.id} style={{
                background: 'white',
                borderRadius: 24,
                boxShadow: '0 20px 60px rgba(15, 37, 87, 0.08)',
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}>
                {/* Colored Left Accent Bar */}
                <div style={{ 
                  display: 'flex', 
                  height: '100%' 
                }}>
                  <div style={{ 
                    width: '12px', 
                    background: cs.badgeColor,
                    flexShrink: 0
                  }} />

                  <div style={{ flex: 1, padding: '2.5rem 2.75rem' }}>
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
                      <div style={{
                        background: cs.badgeColor,
                        color: 'white',
                        width: '52px',
                        height: '52px',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: '1.75rem',
                        fontWeight: 700
                      }}>
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: cs.badgeColor, marginBottom: '4px' }}>{cs.badge}</div>
                        <h3 style={{ 
                          fontFamily: "'DM Serif Display', serif", 
                          fontSize: '1.4rem', 
                          color: '#0A1F4A', 
                          lineHeight: 1.15,
                          margin: 0
                        }}>
                          {cs.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                      {/* Challenge */}
                      <div style={{ background: '#FEF2F2', borderRadius: 16, padding: '1.4rem' }}>
                        <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#E8001C', marginBottom: '0.6rem' }}>THE CHALLENGE</div>
                        <p style={{ color: '#334155', fontSize: '0.93rem', lineHeight: 1.65 }}>{cs.story}</p>
                      </div>

                      {/* How We Stepped In */}
                      <div style={{ background: '#ECFDF5', borderRadius: 16, padding: '1.4rem' }}>
                        <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#10B981', marginBottom: '0.6rem' }}>HOW WE STEPPED IN</div>
                        <p style={{ color: '#334155', fontSize: '0.93rem', lineHeight: 1.65 }}>{cs.howWeDealt}</p>
                      </div>
                    </div>

                    {/* Outcome + Takeaway */}
                    <div style={{ marginTop: '1.75rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                      <div style={{ background: '#D1FAE5', borderRadius: 16, padding: '1.4rem' }}>
                        <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#166534', marginBottom: '0.5rem' }}>FINAL OUTCOME</div>
                        <p style={{ color: '#166534', fontWeight: 600, fontSize: '0.93rem' }}>{cs.outcome}</p>
                      </div>

                      <div style={{ background: '#FEF3C7', borderRadius: 16, padding: '1.4rem' }}>
                        <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#92400E', marginBottom: '0.5rem' }}>KEY TAKEAWAY</div>
                        <p style={{ color: '#92400E', fontStyle: 'italic', fontSize: '0.93rem' }}>{cs.insight}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
          <Footer />
      <WAFloat />
    </>
  );
}

function ClaimsLogged() {
  const [form, setForm] = useState({ fullName: '', phone: '', policyNumber: '', insurer: '', claimType: '', claimCategory: '', totalBilledAmount: '', claimedAmount: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fullName || !form.phone || !form.claimType || !form.claimCategory || !form.totalBilledAmount || !form.claimedAmount || !form.description) {
      alert('Please fill all required fields.');
      return;
    }
    alert(`✅ Claim submitted successfully!\n\nOur team will review within 2 hours.\n\nReference: CLM${Date.now().toString().slice(-6)}`);
  };

  const inputStyle = { width: '100%', padding: '14px 18px', border: '1.5px solid #e2e8f0', borderRadius: 12, fontSize: '1rem', outline: 'none', background: 'white' };

  return (
    <>
      <Navbar isLoggedIn={true} />

      <section style={{
        background: 'linear-gradient(135deg, #0A1F4A 0%, #1E3A8A 50%, #0F2E6B 100%)',
        minHeight: '42vh', display: 'flex', alignItems: 'center'
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontSize: '0.82rem', fontWeight: 600, padding: '8px 22px', borderRadius: 50, marginBottom: '1.5rem' }}>
            24×7 CLAIMS SUPPORT
          </div>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2.7rem, 5.2vw, 4.1rem)', color: 'white', marginBottom: '0.9rem' }}>Submit Your Claim</h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)' }}>Our expert team is ready to handle everything. Fill the form below.</p>
        </div>
      </section>

      <section style={{ padding: '3.75rem 0', background: '#F8FAFC' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div style={{ background: 'white', borderRadius: 24, padding: '2.75rem', boxShadow: '0 22px 55px rgba(15,37,87,0.08)' }}>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.35rem', marginBottom: '1.35rem' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem', display: 'block' }}>Full Name *</label>
                  <input type="text" value={form.fullName} onChange={e => setForm({ ...form, fullName: e.target.value })} style={inputStyle} required />
                </div>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem', display: 'block' }}>Phone Number *</label>
                  <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} style={inputStyle} required />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.35rem', marginBottom: '1.35rem' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem', display: 'block' }}>Policy Number</label>
                  <input type="text" value={form.policyNumber} onChange={e => setForm({ ...form, policyNumber: e.target.value })} style={inputStyle} />
                </div>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem', display: 'block' }}>Insurer</label>
                  <select value={form.insurer} onChange={e => setForm({ ...form, insurer: e.target.value })} style={inputStyle}>
                    <option value="">Select Insurer</option>
                    <option value="Care Health">Care Health</option>
                    <option value="Niva Bupa">Niva Bupa</option>
                    <option value="HDFC Ergo">HDFC Ergo</option>
                    <option value="ICICI Lombard">ICICI Lombard</option>
                    <option value="Star Health">Star Health</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.35rem', marginBottom: '1.35rem' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem', display: 'block' }}>Claim Type *</label>
                  <select value={form.claimType} onChange={e => setForm({ ...form, claimType: e.target.value })} style={inputStyle} required>
                    <option value="">Select Type</option>
                    <option value="Cashless">Cashless</option>
                    <option value="Reimbursement">Reimbursement</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem', display: 'block' }}>Claim Category *</label>
                  <select value={form.claimCategory} onChange={e => setForm({ ...form, claimCategory: e.target.value })} style={inputStyle} required>
                    <option value="">Select Category</option>
                    <option value="Hospitalisation">Hospitalisation</option>
                    <option value="Day Care">Day Care</option>
                    <option value="Pre/Post">Pre/Post Hospitalisation</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.35rem', marginBottom: '1.35rem' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem', display: 'block' }}>Total Billed Amount (₹) *</label>
                  <input type="number" value={form.totalBilledAmount} onChange={e => setForm({ ...form, totalBilledAmount: e.target.value })} style={inputStyle} required />
                </div>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem', display: 'block' }}>Claimed Amount (₹) *</label>
                  <input type="number" value={form.claimedAmount} onChange={e => setForm({ ...form, claimedAmount: e.target.value })} style={inputStyle} required />
                </div>
              </div>

              <div style={{ marginBottom: '1.85rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem', display: 'block' }}>Description of Illness / Treatment *</label>
                <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} rows={4} style={{ ...inputStyle, padding: '14px 18px', resize: 'vertical' }} required />
              </div>

              <button type="submit" style={{
                width: '100%', padding: '17px', background: '#0A1F4A', color: 'white', borderRadius: 9999,
                fontWeight: 700, fontSize: '1.1rem', border: 'none', cursor: 'pointer'
              }}>
                Submit Claim Request
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <WAFloat />
    </>
  );
}

export default function Claims() {
  const { isLoggedIn } = useAuthStore();
  return isLoggedIn ? <ClaimsLogged /> : <ClaimsPublic />;
}