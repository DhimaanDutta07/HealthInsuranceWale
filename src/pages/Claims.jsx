import { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WAFloat from '../components/WAFloat';
import useAuthStore from '../store/auth.store';
import { CheckCircle, Phone, MessageCircle, Award, Clock, FileText, Users } from 'lucide-react';

const CASE_STUDIES = [
  {
    id: 1,
    badge: '₹18 Lakh Case',
    badgeColor: '#E8001C',
    title: '₹18 Lakh Hospitalization — Structured Support, Successful Settlement',
    story: 'A client was admitted to a multi-speciality hospital with a critical condition. The estimated bill quickly crossed ₹18 lakh. While policy coverage was adequate, initial documentation was incomplete and there was poor coordination between the hospital TPA and the insurer, causing unnecessary delays and mounting stress for the family.',
    howWeDealt: 'Our team immediately reviewed the full case file and policy wording. We directly coordinated with the hospital TPA desk, restructured all documentation exactly as per insurer requirements, and maintained daily follow-ups with both parties. We also guided the family on admissible expenses to avoid last-minute surprises.',
    outcome: 'The claim was processed smoothly and settled in full with minimal financial burden on the client.',
    insight: 'Even the right policy needs expert claim handling to deliver real value.',
  },
  {
    id: 2,
    badge: 'Senior Citizen Case',
    badgeColor: '#F59E0B',
    title: 'Senior Citizen with Pre-existing Conditions — Smooth Navigation',
    story: 'A senior citizen with multiple pre-existing medical conditions required urgent hospitalization. These cases usually face intense scrutiny, detailed medical history checks, and high risk of partial approvals or delays.',
    howWeDealt: 'We pre-verified every policy clause and coverage limit before admission. We prepared the family with the exact list of documents required and ensured all disclosures were aligned with policy terms. Throughout the process, we maintained direct communication with the insurer to resolve queries quickly.',
    outcome: 'The claim was approved without major deductions or delays, giving the family peace of mind during a difficult time.',
    insight: 'For senior citizens, proactive clarity before and during the claim is everything.',
  },
  {
    id: 3,
    badge: 'Portability + Claim',
    badgeColor: '#0ABFA3',
    title: 'Strategic Policy Switch Delivered When It Mattered Most',
    story: 'The client had an existing policy with low coverage and limited hospital network. After careful evaluation, we recommended and executed a policy portability to a stronger insurer with better claim track record and wider network.',
    howWeDealt: 'We evaluated multiple insurers based on real claim settlement data, structured the portability to retain all continuity benefits, and aligned the new policy precisely with the client’s health profile. Just months later, when hospitalization occurred, we managed the entire claim under the new policy.',
    outcome: 'The claim was settled smoothly under the new policy, proving the switch was the right long-term decision.',
    insight: 'The right policy decision today directly determines claim experience tomorrow.',
  },
];

function ClaimsPublic() {
  const handleBookCall = () => {
    window.open('https://cal.com/insure-well-6wcyz0/30min', '_blank');
  };

  const handleWhatsApp = () => {
    const message = "Hi, I need help regarding a health insurance claim. It’s urgent—please guide me on next steps.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919217182171?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <Navbar isLoggedIn={false} />

      {/* HERO — Clean & Professional */}
      <section style={{
        background: 'linear-gradient(135deg, #0A1F4A 0%, #1E3A8A 50%, #0F2E6B 100%)',
        minHeight: '72vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '52px 52px'
        }}></div>

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ maxWidth: 720 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.2)', color: 'white',
              fontSize: '0.78rem', fontWeight: 600, padding: '7px 20px', borderRadius: 50, marginBottom: '1.75rem'
            }}>
              <span style={{ width: 7, height: 7, background: '#10B981', borderRadius: '50%', animation: 'pulse 1.5s infinite' }}></span>
              98.7% Claim Settlement Ratio · 24×7 Support
            </div>

            <h1 style={{ 
              fontFamily: "'DM Serif Display',serif", 
              fontSize: 'clamp(2.7rem, 5.8vw, 4.6rem)', 
              lineHeight: 1.02, 
              color: 'white', 
              marginBottom: '1.25rem' 
            }}>
              Claims that <span style={{ color: '#10B981' }}>actually</span><br />get settled.<br /><span style={{ color: '#10B981' }}>Fast.</span>
            </h1>

            <p style={{ 
              fontSize: '1.15rem', 
              color: 'rgba(255,255,255,0.75)', 
              maxWidth: 540, 
              lineHeight: 1.7, 
              marginBottom: '2.25rem' 
            }}>
              From hospital admission to cashless approval to final settlement — we stay with you at every step.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={handleBookCall} style={{
                padding: '16px 34px', background: 'white', color: '#0A1F4A', 
                borderRadius: '9999px', fontWeight: 700, fontSize: '1.05rem',
                display: 'flex', alignItems: 'center', gap: '10px', border: 'none', cursor: 'pointer'
              }}>
                <Phone className="w-5 h-5" /> Speak to Claims Expert
              </button>
              <button onClick={handleWhatsApp} style={{
                padding: '16px 34px', background: 'rgba(255,255,255,0.1)', color: 'white', 
                borderRadius: '9999px', fontWeight: 700, fontSize: '1.05rem',
                display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid rgba(255,255,255,0.3)'
              }}>
                <MessageCircle className="w-5 h-5" /> WhatsApp Claims Help
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: '1rem 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: '3rem', animation: 'ticker 30s linear infinite', whiteSpace: 'nowrap', width: 'max-content' }}>
          {[...Array(2)].map((_, loop) => (
            <span key={loop} style={{ display: 'contents' }}>
              {['✓ 98.7% Claim Settlement Ratio', '✓ Cashless at 10,000+ Hospitals', '✓ 24×7 Dedicated Claims Desk', '✓ Zero Paperwork Hassle'].map(text => (
                <span key={text} style={{ fontWeight: 600, color: '#64748b', flexShrink: 0, padding: '0 1.5rem' }}>{text}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS — Compact */}
      <section style={{ background: 'white', padding: '5rem 0' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
            <div style={{ color: '#10B981', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px' }}>CLAIMS ASSURANCE</div>
            <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: '2.25rem', color: '#0A1F4A', marginTop: '0.5rem' }}>
              How We Make Claims Effortless
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              { num: '01', Icon: Clock, title: 'Admission Alert', text: 'Inform us the moment hospitalization happens. We coordinate directly with the hospital for immediate cashless approval.' },
              { num: '02', Icon: FileText, title: 'Document Support', text: 'We guide you on exactly what is needed. Most customers receive approval within 30–60 minutes.' },
              { num: '03', Icon: Award, title: 'Fast Settlement', text: 'Reimbursement claims are processed in an average of 4 days. We follow up until you receive your money.' },
            ].map(item => (
              <div key={item.num} style={{
                background: '#F8FAFC', border: '1px solid #e2e8f0', borderRadius: 20, padding: '2rem',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: '3.2rem', color: '#e2e8f0', lineHeight: 1, marginBottom: '1rem' }}>{item.num}</div>
                <div style={{ width: 44, height: 44, background: '#D1FAE5', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981', marginBottom: '1rem' }}>
                  <item.Icon className="w-6 h-6" />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0A1F4A', marginBottom: '0.6rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.6 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLAIMS STATS — Professional */}
      <section style={{ background: '#0A1F4A', color: 'white', padding: '4.25rem 0' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ color: '#10B981', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px' }}>CLAIMS TRACK RECORD</div>
            <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: '1.85rem', marginTop: '0.5rem' }}>Our Claims Numbers</h3>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '3.5rem', flexWrap: 'wrap', marginBottom: '2.75rem' }}>
            {[
              { num: '1,539', label: 'Total Claims Filed' },
              { num: '₹2,19,51,665', label: 'Total Amount Processed' },
              { num: '₹1,94,47,018', label: 'Approved Claims Value' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: '2.45rem', fontWeight: 700, color: '#10B981' }}>{num}</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginTop: 6 }}>{label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {[
              { label: 'Hospitalisation', count: 67, amount: '₹54,45,179', color: '#3B82F6' },
              { label: 'Day Care', count: 42, amount: '₹27,30,145', color: '#8B5CF6' },
              { label: 'Pre / Post', count: 528, amount: '₹10,72,773', color: '#EC4899' },
              { label: 'Health Checkup', count: 898, amount: '₹30,28,568', color: '#10B981' },
            ].map(({ label, count, amount, color }) => (
              <div key={label} style={{
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 16, padding: '1.1rem 1.65rem', textAlign: 'center', minWidth: 155
              }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'white', lineHeight: 1.05 }}>{count}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)', marginBottom: '0.25rem' }}>{label}</div>
                <div style={{ fontSize: '0.82rem', color, fontWeight: 700 }}>{amount}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENCY CODES */}
      <div style={{ background: '#0A1F4A', padding: '1.85rem 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 700 }}>Our Agency Codes</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {[
              { insurer: 'Care Health', name: 'Rajat Kumar', code: '20577513' },
              { insurer: 'Niva Bupa', name: 'Ramesh Kumar', code: 'DEL0131511' },
              { insurer: 'HDFC Ergo', name: 'Rajat Kumar', code: '200258209132' },
              { insurer: 'ICICI Lombard', name: 'Dolly Kumar', code: 'ILG54035' },
              { insurer: 'Star Health', name: 'Dolly Kumar', code: 'BA0000137413' },
            ].map(({ insurer, name, code }) => (
              <div key={code} style={{
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 8, padding: '6px 14px', fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)'
              }}>
                <span style={{ color: '#10B981', fontWeight: 700 }}>{insurer}</span> · {name} · <span style={{ fontFamily: 'monospace', color: 'white' }}>{code}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <section style={{ background: 'white', padding: '4.75rem 0', textAlign: 'center' }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: '2.2rem', color: '#0A1F4A', marginBottom: '1rem' }}>
            Facing a claim? Don’t worry.<br /><span style={{ color: '#10B981' }}>We’re here for you.</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#64748b', maxWidth: 480, margin: '0 auto 2rem' }}>
            Call or WhatsApp our claims team right now. We’ll guide you through every step.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={handleBookCall} style={{
              padding: '15px 32px', background: '#0A1F4A', color: 'white', borderRadius: '9999px',
              fontWeight: 700, fontSize: '1.05rem'
            }}>
              Call Claims Helpline
            </button>
            <button onClick={handleWhatsApp} style={{
              padding: '15px 32px', background: '#10B981', color: 'white', borderRadius: '9999px',
              fontWeight: 700, fontSize: '1.05rem', border: 'none', cursor: 'pointer'
            }}>
              WhatsApp Claims Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <WAFloat />
    </>
  );
}

function ClaimsLogged() {
  const [form, setForm] = useState({
    fullName: '', phone: '', policyNumber: '', insurer: '', claimType: '', claimCategory: '', totalBilledAmount: '', claimedAmount: '', description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fullName || !form.phone || !form.claimType || !form.claimCategory || !form.totalBilledAmount || !form.claimedAmount || !form.description) {
      alert('Please fill all required fields.');
      return;
    }
    alert(`✅ Claim submitted successfully!\n\nOur claims team will review within 2 hours.\n\nReference: CLM${Date.now().toString().slice(-6)}`);
  };

  const inputStyle = {
    width: '100%', padding: '13px 18px', border: '1.5px solid #e2e8f0',
    borderRadius: 12, fontSize: '1rem', outline: 'none', background: 'white'
  };

  return (
    <>
      <Navbar isLoggedIn={true} />

      <section style={{
        background: 'linear-gradient(135deg, #0A1F4A 0%, #1E3A8A 50%, #0F2E6B 100%)',
        minHeight: '42vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center'
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontSize: '0.82rem', fontWeight: 500, padding: '8px 22px', borderRadius: 50, marginBottom: '1.5rem' }}>
            24×7 CLAIMS SUPPORT
          </div>
          <h1 style={{ fontFamily: "'DM Serif Display',serif", fontSize: 'clamp(2.5rem,5vw,4rem)', color: 'white', marginBottom: '1rem' }}>Claims Made Easy</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)' }}>Our expert team is ready to handle your claim smoothly. Fill the form below.</p>
        </div>
      </section>

      <section style={{ padding: '4rem 0', background: '#F8FAFC' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div style={{ background: 'white', borderRadius: 24, padding: '2.75rem', boxShadow: '0 20px 50px rgba(15,37,87,0.08)' }}>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.35rem', marginBottom: '1.35rem' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem', display: 'block' }}>Full Name *</label>
                  <input type="text" value={form.fullName} onChange={e => setForm({...form, fullName: e.target.value})} style={inputStyle} required />
                </div>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem', display: 'block' }}>Phone Number *</label>
                  <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} style={inputStyle} required />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.35rem', marginBottom: '1.35rem' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem', display: 'block' }}>Policy Number</label>
                  <input type="text" value={form.policyNumber} onChange={e => setForm({...form, policyNumber: e.target.value})} style={inputStyle} />
                </div>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem', display: 'block' }}>Insurer</label>
                  <select value={form.insurer} onChange={e => setForm({...form, insurer: e.target.value})} style={inputStyle}>
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
                  <select value={form.claimType} onChange={e => setForm({...form, claimType: e.target.value})} style={inputStyle} required>
                    <option value="">Select Type</option>
                    <option value="Cashless">Cashless</option>
                    <option value="Reimbursement">Reimbursement</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem', display: 'block' }}>Claim Category *</label>
                  <select value={form.claimCategory} onChange={e => setForm({...form, claimCategory: e.target.value})} style={inputStyle} required>
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
                  <input type="number" value={form.totalBilledAmount} onChange={e => setForm({...form, totalBilledAmount: e.target.value})} style={inputStyle} required />
                </div>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem', display: 'block' }}>Claimed Amount (₹) *</label>
                  <input type="number" value={form.claimedAmount} onChange={e => setForm({...form, claimedAmount: e.target.value})} style={inputStyle} required />
                </div>
              </div>

              <div style={{ marginBottom: '1.75rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem', display: 'block' }}>Description of Illness / Treatment *</label>
                <textarea value={form.description} onChange={e => setForm({...form, description: e.target.value})} rows={4} style={{...inputStyle, padding: '13px 18px', resize: 'vertical'}} required />
              </div>

              <button type="submit" style={{
                width: '100%', padding: '16px', background: '#0A1F4A', color: 'white', borderRadius: '9999px',
                fontWeight: 700, fontSize: '1.05rem', border: 'none', cursor: 'pointer'
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