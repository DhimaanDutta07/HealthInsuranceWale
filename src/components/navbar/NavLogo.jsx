import { Link } from 'react-router-dom';
import logo from "./logo.png";

export default function NavLogo({ logged = false }) {
  return (
    <Link 
      to={logged ? '/dashboard' : '/'} 
      className="flex items-center gap-3 group flex-shrink-0"
    >
      <img
        src={logo}
        alt="Insurewell Advisory"
        className="w-10 h-10 object-contain rounded-xl"
      />
      <div>
        <span className="font-serif text-xl font-semibold text-ink group-hover:text-blue-600 transition-colors">
          insurance<span className="text-blue-500">wale</span>
        </span>
        <p className="text-[10px] text-muted -mt-1">by Insurewell Advisory</p>
      </div>
    </Link>
  );
}