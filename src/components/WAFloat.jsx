import { useState } from 'react';

export default function WAFloat() {
  const [showOptions, setShowOptions] = useState(false);

  const openWhatsApp = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919217182171?text=${encodedMessage}`, '_blank');
    setShowOptions(false);
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}>
      {/* WhatsApp Button */}
      <button
        onClick={() => setShowOptions(!showOptions)}
        style={{
          width: '60px',
          height: '60px',
          background: '#25D366',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
          transition: 'all 0.3s ease'
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.858L.057 23.572a.5.5 0 0 0 .612.612l5.714-1.477A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.849 0-3.585-.497-5.086-1.366l-.363-.214-3.766.972.992-3.663-.234-.374A9.962 9.962 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </button>

      {/* Professional Options Menu */}
      {showOptions && (
        <div style={{
          position: 'absolute',
          bottom: '75px',
          right: '0',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
          padding: '8px 0',
          minWidth: '280px',
          border: '1px solid #e2e8f0',
          overflow: 'hidden'
        }}>
          <div style={{ 
            padding: '14px 20px', 
            fontSize: '0.85rem', 
            fontWeight: 700, 
            color: '#0A1F4A', 
            borderBottom: '1px solid #f1f5f9',
            background: '#F8FAFC'
          }}>
            How can we help you today?
          </div>

          <button 
            onClick={() => openWhatsApp("Hi, I'm looking to buy a new health insurance policy. I'd like guidance on the right plan.")} 
            style={{ 
              width: '100%', 
              padding: '15px 20px', 
              textAlign: 'left', 
              background: 'none', 
              border: 'none', 
              fontSize: '0.95rem', 
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#F8FAFC'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            New Policy Guidance
          </button>

          <button 
            onClick={() => openWhatsApp("Hi, I already have a health insurance policy and want to explore portability options. Can you guide me on better plans?")} 
            style={{ 
              width: '100%', 
              padding: '15px 20px', 
              textAlign: 'left', 
              background: 'none', 
              border: 'none', 
              fontSize: '0.95rem', 
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#F8FAFC'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            Policy Portability
          </button>

          <button 
            onClick={() => openWhatsApp("Hi, I need help regarding a health insurance claim. It’s urgent—please guide me on next steps.")} 
            style={{ 
              width: '100%', 
              padding: '15px 20px', 
              textAlign: 'left', 
              background: 'none', 
              border: 'none', 
              fontSize: '0.95rem', 
              cursor: 'pointer', 
              color: '#DC2626',
              fontWeight: 600,
              transition: 'background 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#FEF2F2'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            Claim Assistance (Urgent)
          </button>

          <button 
            onClick={() => openWhatsApp("Hi, I'm looking for a health insurance plan for my family/parents. Need guidance on the best options.")} 
            style={{ 
              width: '100%', 
              padding: '15px 20px', 
              textAlign: 'left', 
              background: 'none', 
              border: 'none', 
              fontSize: '0.95rem', 
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#F8FAFC'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            Family / Parents Plan
          </button>
        </div>
      )}
    </div>
  );
}