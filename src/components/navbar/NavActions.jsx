import { useState, useRef, useEffect } from 'react';
import ProfileDropdown from './ProfileDropdown';
import WhatsAppButton from './WhatsAppButton';
import { Phone } from 'lucide-react';

export default function NavActions({ logged = false, onLogout = () => {} }) {
  const [toolsOpen, setToolsOpen] = useState(false);
  const toolsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (toolsRef.current && !toolsRef.current.contains(e.target)) setToolsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="hidden lg:flex items-center gap-3">
      {logged ? (
        <>
          <ProfileDropdown onLogout={onLogout} />
          <WhatsAppButton />
        </>
      ) : (
        <>
          <WhatsAppButton />
          <a
            href="tel:+919971466960"
            className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            Book Free Call
          </a>
        </>
      )}
    </div>
  );
}