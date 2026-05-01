import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WAFloat from '../components/WAFloat'
import CalcFloat from '../components/CalcFloat'
import useAuthStore from '../store/auth.store'
import { Phone, CheckCircle, Star, ArrowRight, Users, Shield, Heart, Award, Clock } from 'lucide-react'
import { useScrollAnim } from '../components/useScrollAnim'
import star from "./star.png"
import lombard from "./Lombard.png"

const WA_SVG = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.858L.057 23.572a.5.5 0 0 0 .612.612l5.714-1.477A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.849 0-3.585-.497-5.086-1.366l-.363-.214-3.766.972.992-3.663-.234-.374A9.962 9.962 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
)

const TESTIMONIALS = [
  { id: 1, stars: 5, tag: 'Delhi', text: '"Finally got a plan that covers my pre-existing diabetes without a 4-year wait. The team was honest from day one — best decision ever!"', img: 'https://picsum.photos/id/64/64/64', name: 'Ramesh Sharma', role: 'Software Engineer, Noida' },
  { id: 2, stars: 5, tag: 'Mumbai', text: '"Claim settled in 4 days for my wife\'s surgery. No paperwork headache. The advisor guided us through every step at the hospital."', img: 'https://picsum.photos/id/1005/64/64', name: 'Priya Patel', role: 'Teacher, Mumbai' },
  { id: 3, stars: 5, tag: 'Bangalore', text: '"Compared 18 plans in one call. Saved ₹42,000 yearly and got better coverage. They even told me not to buy riders I didn\'t need!"', img: 'https://picsum.photos/id/201/64/64', name: 'Arjun Rao', role: 'Business Owner, Bangalore' },
  { id: 4, stars: 5, tag: 'Chennai', text: '"Policy issued in just 1 day! Every clause explained clearly. Finally a broker who actually puts the customer first."', img: 'https://picsum.photos/id/300/64/64', name: 'Suresh Gupta', role: 'Retired Banker, Chennai' },
  { id: 5, stars: 5, tag: 'Hyderabad', text: '"Saved ₹35,000 on premium while getting superior coverage for my parents. Super transparent team — no hidden surprises."', img: 'https://picsum.photos/id/1009/64/64', name: 'Meena Iyer', role: 'Homemaker, Hyderabad' },
  { id: 6, stars: 5, tag: 'Kolkata', text: '"During my father\'s emergency, the claims team handled everything. Cashless approval in 25 minutes. Absolute lifesaver."', img: 'https://picsum.photos/id/870/64/64', name: 'Anil Verma', role: 'Business Owner, Kolkata' },
]

export default function Home() {
  const { isLoggedIn } = useAuthStore()
  useScrollAnim()

  const handleBookCall = () => {
    window.open('https://cal.com/insure-well-6wcyz0/30min', '_blank')
  }

  const handleWhatsApp = () => {
    const message = "Hi, I'm looking to buy a new health insurance policy. Can you guide me on the right plan?";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919217182171?text=${encodedMessage}`, '_blank');
  }

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />

      {/* HERO — EXACT AS PROVIDED */}
      <section style={{
        background: 'linear-gradient(135deg,var(--navy) 0%,#1A3A7A 55%,#0F3460 100%)',
        minHeight: '92vh', position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)',
          backgroundSize: '60px 60px', pointerEvents: 'none', zIndex: 0
        }}></div>

        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '5rem 2rem',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem',
          alignItems: 'center', position: 'relative', zIndex: 1, width: '100%'
        }} className="hero-inner-grid">
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)', color: 'white',
              fontSize: '0.78rem', fontWeight: 500, padding: '6px 16px', borderRadius: 50,
              marginBottom: '1.5rem', animation: 'fadeUp 0.7s 0.2s both'
            }}>
              <span style={{ width: 7, height: 7, background: '#4ADE80', borderRadius: '50%', animation: 'pulse 1.5s infinite' }}></span>
              IRDAI Approved · Trusted by 4,000+ Families
            </div>

            <h2 style={{
              fontFamily: "'DM Serif Display',serif", fontSize: 'clamp(2.4rem,5vw,4rem)',
              lineHeight: 1.1, color: 'white', marginBottom: '1.2rem',
              animation: 'fadeUp 0.7s 0.35s both'
            }}>
              Insurance Tab Kaam Aata Hai<br /><span style={{ color: 'var(--teal)' }}>Jab Claim Milta Hai.</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: 480, animation: 'fadeUp 0.7s 0.5s both' }}>
              At HealthInsuranceWale, we don't just help you choose a policy — we ensure you are supported at every step during claims.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, animation: 'fadeUp 0.7s 0.65s both' }}>
              <button onClick={() => handleBookCall()} style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '14px 28px',
                background: 'white', color: 'var(--navy)', borderRadius: 50, fontSize: '1rem',
                fontWeight: 700, border: 'none', cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                transition: 'all 0.25s'
              }}>
                <i className="fas fa-headset"></i> Book a free call
              </button>
              <button onClick={handleWhatsApp} style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '14px 28px',
                background: 'var(--wa)', color: 'white', borderRadius: 50, fontSize: '1rem',
                fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 20px rgba(37,211,102,0.4)'
              }}>
                <WA_SVG width="22" height="22" fill="white" /> Talk on WhatsApp
              </button>
            </div>

            <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem', animation: 'fadeUp 0.7s 0.8s both', flexWrap: 'wrap' }}>
              <div><div style={{ fontSize: '1.7rem', fontWeight: 800, color: 'white' }}>4K+</div><div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>Families Guided</div></div>
              <div style={{ width: 1, background: 'rgba(255,255,255,0.2)' }}></div>
              <div><div style={{ fontSize: '1.7rem', fontWeight: 800, color: 'white' }}>₹6 Cr+</div><div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>Claims Assisted</div></div>
              <div style={{ width: 1, background: 'rgba(255,255,255,0.2)' }}></div>
              <div><div style={{ fontSize: '1.7rem', fontWeight: 800, color: 'white' }}>Best</div><div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>Consultation Fee</div></div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', animation: 'fadeLeft 0.8s 0.4s both' }} className="hero-card-wrap">
            <div style={{
              background: 'rgba(255,255,255,0.97)', borderRadius: 24, padding: '2rem',
              maxWidth: 340, width: '100%', boxShadow: '0 30px 60px rgba(0,0,0,0.3)', position: 'relative'
            }}>
              <div style={{
                position: 'absolute', top: -12, right: 20, background: 'var(--gold)', color: 'var(--ink)',
                fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.5px', padding: '5px 14px', borderRadius: 50
              }}>✦ Most Recommended</div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 4 }}>Get your personalised plan</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.5 }}>Cashless at 10,000+ hospitals · Honest advice · Zero pressure</p>
              <div style={{ margin: '1.2rem 0' }}>
                {[['fa-shield-alt', 'No room rent capping or co-pay'], ['fa-hospital', '10,000+ cashless network hospitals'], ['fa-bolt', 'Policy issued within 24 hours'], ['fa-headset', '24×7 claims & support team']].map(([icon, text]) => (
                  <div key={icon} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: '0.83rem', color: 'var(--ink)' }}>
                    <div style={{ width: 28, height: 28, background: 'var(--teal-light)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)', fontSize: '0.8rem', flexShrink: 0 }}>
                      <i className={`fas ${icon}`}></i>
                    </div>
                    {text}
                  </div>
                ))}
              </div>
              <button onClick={() => handleBookCall()} style={{
                width: '100%', padding: 14, background: 'linear-gradient(135deg,var(--navy),var(--navy-mid))',
                color: 'white', border: 'none', borderRadius: 14, fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer', marginTop: '1rem'
              }}>Get your free quote in 2 min →</button>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: '1rem' }}>
                <span style={{ color: 'var(--gold)', fontSize: '0.85rem', letterSpacing: 1 }}>★★★★★</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>4.9/5 · 8,500+ Google reviews</span>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes fadeLeft { from{opacity:0;transform:translateX(40px)} to{opacity:1;transform:translateX(0)} }
          @media(max-width:900px){.hero-inner-grid{grid-template-columns:1fr!important}.hero-card-wrap{display:none!important}}
        `}</style>
      </section>

      {/* TRUST BAR */}
      <div className="bg-white py-8 border-b border-slate-200 overflow-hidden">
        <div className="flex items-center gap-14 md:gap-20 animate-marquee whitespace-nowrap">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/HDFC-Ergo-logo.png" className="h-12 md:h-14 opacity-80 hover:opacity-100 transition-opacity" alt="HDFC ERGO" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Niva_Bupa_Logo.jpg" className="h-12 md:h-14 opacity-80 hover:opacity-100 transition-opacity" alt="Niva Bupa" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/Care_health_insurance_logo.png" className="h-12 md:h-14 opacity-80 hover:opacity-100 transition-opacity" alt="Care Health" />
          <img src={star} className="h-12 md:h-14 opacity-80 hover:opacity-100 transition-opacity" alt="Star Health" />
          <img src={lombard} className="h-12 md:h-14 opacity-80 hover:opacity-100 transition-opacity" alt="ICICI Lombard" />

          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/HDFC-Ergo-logo.png" className="h-12 md:h-14 opacity-80 hover:opacity-100 transition-opacity" alt="HDFC ERGO" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Niva_Bupa_Logo.jpg" className="h-12 md:h-14 opacity-80 hover:opacity-100 transition-opacity" alt="Niva Bupa" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/Care_health_insurance_logo.png" className="h-12 md:h-14 opacity-80 hover:opacity-100 transition-opacity" alt="Care Health" />
          <img src={star} className="h-12 md:h-14 opacity-80 hover:opacity-100 transition-opacity" alt="Star Health" />
          <img src={lombard} className="h-12 md:h-14 opacity-80 hover:opacity-100 transition-opacity" alt="ICICI Lombard" />

          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/HDFC-Ergo-logo.png" className="h-12 md:h-14 opacity-80 hover:opacity-100 transition-opacity" alt="HDFC ERGO" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Niva_Bupa_Logo.jpg" className="h-12 md:h-14 opacity-80 hover:opacity-100 transition-opacity" alt="Niva Bupa" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/Care_health_insurance_logo.png" className="h-12 md:h-14 opacity-80 hover:opacity-100 transition-opacity" alt="Care Health" />
          <img src={star} className="h-12 md:h-14 opacity-80 hover:opacity-100 transition-opacity" alt="Star Health" />
          <img src={lombard} className="h-12 md:h-14 opacity-80 hover:opacity-100 transition-opacity" alt="ICICI Lombard" />
        </div>
      </div>

      <style>{`
        @keyframes marquee { 
          from { transform: translateX(0); } 
          to { transform: translateX(-50%); } 
        }
        .animate-marquee { 
          animation: marquee 45s linear infinite; 
        }
        .animate-marquee:hover { 
          animation-play-state: paused; 
        }
      `}</style>

      {/* THE EXPERIENCE */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="text-emerald-600 text-sm font-semibold tracking-[4px]">
            THE HEALTHINSURANCEWALE <span className="font-bold">EXPERIENCE</span>
          </div>
          <h2 className="font-serif text-[34px] tracking-tight mt-4 text-[#100a4a]">From confusion to confidence in 3 simple steps</h2>
        </div>

        <div className="space-y-10">
          {[
            { num: "01", title: "Expert Guidance", desc: "Our IRDAI-certified advisors understand your health needs and budget — with zero sales pressure and completely honest recommendations." },
            { num: "02", title: "Compare & Decide", desc: "We compare plans across 15+ insurers, explain every clause in plain language, and get your policy issued quickly." },
            { num: "03", title: "Lifetime Support", desc: "24×7 dedicated team for renewals, claims assistance and any question — we don't vanish after the sale." },
          ].map((step, i) => (
            <div key={i} className="flex gap-8 group">
              <div className="w-16 flex-shrink-0">
                <div className="font-serif text-[58px] text-emerald-300 group-hover:text-emerald-500 transition-colors leading-none">
                  {step.num}
                </div>
              </div>
              <div className="pt-1">
                <h3 className="text-[26px] font-semibold tracking-tight text-[#0A1F4A] mb-3">{step.title}</h3>
                <p className="text-[15px] text-slate-600 max-w-xl">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY HEALTH INSURANCE */}
      <section className="bg-[#0A1F4A] text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <div className="text-emerald-400 text-xs font-semibold tracking-[3px]">WHY IT MATTERS</div>
            <h2 className="font-serif text-[34px] tracking-tight mt-4">What is Health Insurance &amp; why do you need it?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Cashless Hospital Treatment", desc: "Get treated at 10,000+ network hospitals without paying a rupee upfront." },
              { num: "02", title: "Tax Benefits under Section 80D", desc: "Save up to ₹25,000 every year on your premium payments." },
              { num: "03", title: "Protect Your Life Savings", desc: "No need to liquidate assets or take loans during a health crisis." },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-emerald-400 pl-7">
                <div className="font-serif text-5xl text-emerald-300/40 mb-3">{item.num}</div>
                <h4 className="text-[22px] font-semibold tracking-tight mb-3">{item.title}</h4>
                <p className="text-blue-100 text-[15px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTABILITY */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="text-emerald-600 text-xs font-semibold tracking-[3px]">KNOW YOUR RIGHTS</div>
          <h2 className="font-serif text-[34px] tracking-tight mt-4 text-[#0A1F4A]">Health Insurance Portability</h2>
          <p className="mt-4 text-[15px] text-slate-600 max-w-md mx-auto">Switch insurers without losing your waiting periods or no-claim bonus. Keep the benefits you’ve already earned.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Key Benefits of Portability", items: ["Carry forward waiting periods for pre-existing conditions", "Retain your No Claim Bonus and extra sum insured", "Switch to better coverage or lower premiums", "Access improved hospital networks"] },
            { title: "When to Consider Porting", items: ["Renewal premium has increased sharply", "Poor claims experience or support", "Limited hospital network", "Better plans are now available"] },
          ].map((card, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-3xl p-9 hover:border-emerald-200 transition-all">
              <h3 className="text-[22px] font-semibold tracking-tight mb-7">{card.title}</h3>
              <ul className="space-y-4 text-[15px] text-slate-600">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-4">
                    <CheckCircle className="text-emerald-500 mt-1 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="text-emerald-600 text-xs font-semibold tracking-[3px]">WHAT FAMILIES SAY</div>
              <h2 className="font-serif text-[34px] tracking-tight mt-4 text-[#0A1F4A]">Real families.<br />Real peace of mind.</h2>
            </div>
            <div className="hidden md:flex items-center gap-3 text-sm text-slate-500">
              <div className="flex text-amber-400">★★★★★</div>
              <span>4.9/5 • 8,500+ reviews</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {TESTIMONIALS.slice(0, 4).map((t, i) => (
              <div key={i} className="bg-white rounded-3xl p-9 border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all">
                <div className="flex text-amber-400 mb-6">{'★'.repeat(t.stars)}</div>
                <p className="text-[15px] text-slate-700 leading-relaxed mb-9">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.img} alt="" className="w-11 h-11 rounded-2xl" />
                  <div>
                    <div className="font-semibold text-[15px]">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT + REALITY */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="sticky top-20">
              <div className="text-emerald-600 text-xs font-semibold tracking-[3px]">OUR IMPACT</div>
              <h2 className="font-serif text-[34px] tracking-tight mt-4 text-[#0A1F4A]">Our achievements are defined by the trust our clients place in us.</h2>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, num: "6,700+", label: "Families Guided" },
                { icon: Award, num: "₹6 Cr+", label: "Claims Assisted" },
                { icon: Star, num: "High", label: "Claim Support Success Rate" },
                { icon: Clock, num: "10+ Yrs", label: "Experience in Advisory" },
              ].map((stat, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-3xl p-8 hover:-translate-y-1 transition-all">
                  <div className="w-10 h-10 bg-emerald-50 rounded-2xl flex items-center justify-center mb-5">
                    <stat.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="font-serif text-[42px] tracking-tighter text-[#0A1F4A]">{stat.num}</div>
                  <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Reality */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-9">
            <div className="text-red-500 text-xs font-semibold tracking-[3px] mb-4">THE REALITY</div>
            <h3 className="font-serif text-[28px] tracking-tight text-[#0A1F4A] mb-6">What Really Happens at Claim Time?</h3>
            <div className="space-y-4 text-[15px] text-slate-600">
              {["Confusing documentation requirements", "Delays from hospital or insurer side", "Partial approvals or unexpected deductions", "No proper guidance at critical moments"].map((item, i) => (
                <div key={i}>• {item}</div>
              ))}
            </div>
            <div className="mt-6 bg-emerald-50 border-l-4 border-emerald-500 pl-5 py-4 text-sm font-medium">Policy lena easy hai. Claim manage karna nahi.</div>
          </div>

          <div className="bg-[#0A1F4A] text-white rounded-3xl p-9">
            <h3 className="font-serif text-[28px] tracking-tight mb-6">This Is Where We Step In</h3>
            <div className="bg-emerald-900/30 border-l-4 border-emerald-400 pl-5 py-4 mb-6 text-sm">Will your insurance work smoothly when you need it?</div>
            {["Pre-claim guidance (before hospitalization)", "Hospital coordination support", "Documentation structuring", "Insurance company follow-ups", "Reimbursement claim assistance", "Claim rejection handling guidance"].map((item, i) => (
              <div key={i} className="flex items-center gap-4 py-2 text-[14px] text-blue-100 border-b border-white/10 last:border-0">
                <CheckCircle className="text-emerald-400" /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL OUTCOMES */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="text-center mb-12">
          <div className="text-emerald-600 text-xs font-semibold tracking-[3px]">REAL OUTCOMES</div>
          <h2 className="font-serif text-[34px] tracking-tight mt-4 text-[#0A1F4A]">Real Situations. Real Outcomes.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { badge: "₹18 Lakh Case", title: "Structured claim support led to full settlement despite documentation delays." },
            { badge: "Senior Citizen", title: "Pre-existing condition case navigated successfully with zero major complications." },
            { badge: "Policy Portability", title: "Right policy switch. Claim delivered smoothly under new insurer within months." },
          ].map((c, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-3xl p-9 hover:-translate-y-1 transition-all">
              <div className="inline-block px-5 py-1.5 text-xs font-bold rounded-full mb-6 bg-emerald-50 text-emerald-700">{c.badge}</div>
              <p className="text-[15px] text-slate-600 leading-relaxed">{c.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR PROMISE */}
      <section className="bg-[#0A1F4A] py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="h-px w-14 bg-emerald-400 mx-auto mb-8" />
          <h2 className="font-serif text-white text-[42px] tracking-tight leading-tight">
            We don't disappear after selling a policy.<br />
            <span className="text-emerald-300">We stand with you when it matters the most.</span>
          </h2>
          <div className="h-px w-14 bg-emerald-400 mx-auto mt-8" />
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="text-emerald-600 text-xs font-semibold tracking-[3px]">IS THIS FOR YOU?</div>
          <h2 className="font-serif text-[34px] tracking-tight mt-4 text-[#0A1F4A]">Who Should Talk to Us?</h2>
        </div>

        <div className="space-y-5">
          {[
            { title: "Buying a new policy", text: "Want to understand what you're actually buying and how it will perform at claim time." },
            { title: "Unsure about your existing policy", text: "Have a policy but don't fully understand the claim process or your coverage." },
            { title: "Facing an ongoing claim issue", text: "Dealing with delays, rejections, or documentation confusion right now." },
            { title: "Planning for parents or senior citizens", text: "Need specialized guidance for high-risk or pre-existing condition cases." },
          ].map((item, i) => (
            <div key={i} className="group flex items-center justify-between bg-white border border-slate-200 hover:border-emerald-300 p-7 rounded-3xl transition-all">
              <div>
                <div className="font-semibold text-[21px] tracking-tight text-[#0A1F4A]">{item.title}</div>
                <p className="text-[14px] text-slate-600 mt-2 max-w-2xl">{item.text}</p>
              </div>
              <ArrowRight className="w-6 h-6 text-emerald-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0A1F4A] py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-white text-[34px] tracking-tight mb-4">Ready to protect your family?</h2>
          <p className="text-blue-200 text-[15px] mb-8">Our advisors are available right now — no spam, no pressure, just clarity.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleBookCall} className="px-8 py-3.5 bg-white text-[#0A1F4A] font-semibold rounded-2xl text-base hover:bg-emerald-50 transition-all flex items-center justify-center gap-3">
              <Phone className="w-4 h-4" /> Book Free Call
            </button>
            <button onClick={handleWhatsApp} className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-2xl text-base flex items-center justify-center gap-3 transition-all">
              <WA_SVG className="w-4 h-4" fill="currentColor" /> WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <WAFloat />
    </>
  )
}
